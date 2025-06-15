// implementing generate metadata
import type { Metadata, ResolvingMetadata } from 'next';
import { getTripsItem } from '../../lib/wordpress';

type Props = {
  params: { activities: string };
};

// Metadata generation
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
     const { activities } = await params
  const decodedTitle = decodeURIComponent(activities);

  const data = await getTripsItem();
  const match = data.find((item: any) => item.title === decodedTitle);

  const title = match?.title || decodedTitle;
  const description = `Explore details about ${title}`;
  const ogImage = match?.image || '/default-og-image.jpg';
  const pageUrl = match?.url || '';

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      images: [ogImage, ...previousImages],
    },
  };
}

// Component
export default async function Activitydetails({ params }: Props) {
  const { activities } = await params
  const decodedTitle = decodeURIComponent(activities);
  const data = await getTripsItem();
  const match = data.find((item: any) => item.title === decodedTitle);

  return (
    <div>
      <h1>{match?.title || decodedTitle}</h1>
      <p>
        <strong>Activity Link:</strong>{' '}
        <a href={match?.url} target="_blank" rel="noopener noreferrer">
          {match?.url}
        </a>
      </p>
      {match?.image && (
        <img
          src={match.image}
          alt={match.title}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      )}
    </div>
  );
}
