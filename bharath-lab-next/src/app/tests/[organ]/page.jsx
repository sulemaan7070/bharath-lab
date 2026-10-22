import { notFound } from 'next/navigation';
import OrganPanel from '@/components/tests/OrganPanel';
import OrganTests from '@/components/tests/OrganTests';
import { ORGANS, getOrgan } from '@/data/organs';
import { getTestsByCategory } from '@/lib/tests';

// Builds /tests/heart, /tests/liver ... at build time.
export function generateStaticParams() {
  return ORGANS.map((organ) => ({ organ: organ.slug }));
}

// `await params` works in Next 14 and Next 15.
export async function generateMetadata({ params }) {
  const { organ: slug } = await params;
  const organ = getOrgan(slug);
  return organ ? { title: `${organ.name} – Bharath Lab`, description: organ.description } : {};
}

export default async function OrganPage({ params }) {
  const { organ: slug } = await params;
  const organ = getOrgan(slug);
  if (!organ) notFound();

  return (
    <div className="container" style={{ paddingBottom: 40 }}>
      <OrganPanel organ={organ} />
      <OrganTests tests={getTestsByCategory(slug)} />
    </div>
  );
}
