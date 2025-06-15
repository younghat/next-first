import type { Metadata, ResolvingMetadata } from 'next';
import { getTripsItem } from '../../lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';

// Helper to create slug from title
function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

type Props = {
  params: Promise<{ activities: string }>;
};

// Generate OG metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getTripsItem();
  const activities=(await params).activities;
  const match = data.find((item: any) => slugify(item.title) === activities);

  const title = match?.title || 'Trip Not Found';
  const description = match
    ? `Explore details about ${match.title}`
    : 'The requested trip was not found.';
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

// Page component
export default async function Activitydetails({ params }: Props) {
  const trip = await getTripsItem();
   const activities=(await params).activities;
  const match = trip.find((item: any) => slugify(item.title) === activities);

  if (!match) {
    return (
       <div className='container'>
    <div className="row">
          <div className="col-md-12">
        <h1>Trip not found</h1>
        {/* <p>We could not find the trip you're looking for.</p> */}
      </div>
      </div>
      </div>
    );
  }

  return (
  <div className='container'>
    <div className="row">
          <div className="col-md-12">
    <p>
      <strong>Activity Link:</strong>{' '}
      <Link href={match.url} target="_blank" rel="noopener noreferrer">
        {match.url}
      </Link>
    </p>
    <Image
      src={match.image}
      alt={match.title}
      width={300}
      height={300}
    />
  </div>
  </div>
  </div>
);
}
