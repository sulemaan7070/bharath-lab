// Each organ page (/tests/[slug]) is generated from this list.
// `icon` must match a key in components/ui/OrganIcon.jsx.
export const ORGANS = [
  {
    slug: 'heart',
    name: 'Heart Tests',
    description:
      'Your heart circulates blood through the whole body. Knowing your cholesterol and cardiac markers early helps you lower your risk of heart disease.',
    tests: [
      { name: 'Lipid Profile – Mini (Fasting)', price: 800 },
      { name: 'Lipid Profile – Mini (Non-Fasting)', price: 840 },
      { name: 'Lipid Profile – Screening (Fasting)', price: 475 },
      { name: 'Cardiac Risk Profile', price: 1450 },
    ],
  },
  {
    slug: 'liver',
    name: 'Liver Tests',
    description:
      'The liver filters toxins and helps digest food. These tests check liver enzymes and bilirubin to spot problems early.',
    tests: [
      { name: 'Liver Function Test (LFT)', price: 550 },
      { name: 'SGOT / SGPT', price: 320 },
      { name: 'Bilirubin Total & Direct', price: 260 },
      { name: 'Hepatitis B Surface Antigen', price: 420 },
    ],
  },
  {
    slug: 'kidney',
    name: 'Kidney Tests',
    description:
      'Kidneys clean your blood and balance fluids. Regular screening catches changes before symptoms appear.',
    tests: [
      { name: 'Kidney Function Test (KFT)', price: 650 },
      { name: 'Serum Creatinine', price: 180 },
      { name: 'Blood Urea Nitrogen', price: 200 },
      { name: 'Urine Routine', price: 150 },
    ],
  },
  {
    slug: 'thyroid',
    name: 'Thyroid Tests',
    description:
      'The thyroid controls metabolism and energy. A simple blood test shows if it is under or over active.',
    tests: [
      { name: 'Thyroid Profile (T3, T4, TSH)', price: 499 },
      { name: 'TSH', price: 250 },
      { name: 'Free T4', price: 320 },
      { name: 'Anti-TPO Antibodies', price: 900 },
    ],
  },
  {
    slug: 'bone',
    name: 'Bone and Joint Tests',
    description:
      'Strong bones depend on calcium and vitamin D. These tests also help check for arthritis and uric acid build-up.',
    tests: [
      { name: 'Vitamin D (25-OH)', price: 1100 },
      { name: 'Calcium, Serum', price: 220 },
      { name: 'Uric Acid', price: 180 },
      { name: 'Rheumatoid Factor (RA)', price: 450 },
    ],
  },
];

export const getOrgan = (slug) => ORGANS.find((organ) => organ.slug === slug);
