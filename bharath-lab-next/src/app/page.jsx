import BookingButtons from '@/components/home/BookingButtons';
import Equipment from '@/components/home/Equipment';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import HealthRisks from '@/components/home/HealthRisks';
import MostBooked from '@/components/home/MostBooked';
import Packages from '@/components/home/Packages';
import QuickActions from '@/components/home/QuickActions';
import Reviews from '@/components/home/Reviews';
import Stats from '@/components/home/Stats';
import TestSearch from '@/components/home/TestSearch';

// Home page = a list of sections. Reorder or remove sections here.
export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingButtons />
      <TestSearch />
      <QuickActions />
      <MostBooked />
      <HealthRisks />
      <Packages />
      <Stats />
      <Equipment />
      <Gallery />
      <Reviews />
    </>
  );
}
