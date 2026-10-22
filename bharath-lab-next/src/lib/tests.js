import { ORGANS } from '@/data/organs';
import { PACKAGES } from '@/data/packages';

// One flat list of everything that can be searched or added to the cart.
export const ALL_TESTS = [
  ...ORGANS.flatMap((organ) =>
    organ.tests.map((test, index) => ({
      id: `${organ.slug}${index}`,
      name: test.name,
      price: test.price,
      category: organ.slug,
      testsCount: 1,
    }))
  ),
  ...PACKAGES.map((pack) => ({ ...pack, category: 'package' })),
];

export const getTestById = (id) => ALL_TESTS.find((test) => test.id === id);
export const getTestsByCategory = (slug) => ALL_TESTS.filter((test) => test.category === slug);
export const searchTests = (query) => {
  const text = query.trim().toLowerCase();
  return text ? ALL_TESTS.filter((test) => test.name.toLowerCase().includes(text)) : [];
};
