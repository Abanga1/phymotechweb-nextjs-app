import { Hero } from '@/components/home/Hero';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { FeaturedRow } from '@/components/home/FeaturedRow';
import { ValueProps } from '@/components/home/ValueProps';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedRow />
      <ValueProps />
      <Newsletter />
    </>
  );
}
