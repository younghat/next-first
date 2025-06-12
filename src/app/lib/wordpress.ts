// lib/wordpress.ts

import querystring from "query-string";

const baseUrl = process.env.WORDPRESS_URL;

if (!baseUrl) {
  throw new Error("WORDPRESS_URL environment variable is not defined");
}

function getUrl(path: string, query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
}

class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "WordPressAPIError";
  }
}

async function wordpressFetch<T>(url: string): Promise<T> {
  const userAgent = "Next.js WordPress Client";

  const response = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
    },
    next: { revalidate: 60 }, // Enables server-side caching for 60s
  });

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    );
  }

  return response.json();
}

async function fetchWithTimeout<T>(url: string, timeout = 5000): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Request timed out")), timeout);
    wordpressFetch<T>(url)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Menu-specific function
export async function getMenuItems(): Promise<{ title: string; url: string; ID: number }[]> {
  const url = getUrl("/wp-json/list/menus");
  return fetchWithTimeout(url);
}
// trips function
export async function getTripsItem(): Promise<{ title: string; url: string; ID: number; image:string; }[]> {
  const url = getUrl("/wp-json/list/trips");
  return fetchWithTimeout(url);
}

export { WordPressAPIError };
