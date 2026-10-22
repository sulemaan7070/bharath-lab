// Business details used across the site. Edit here, not inside components.
export const SITE = {
  name: 'Bharath Lab',
  tagline: 'Home collection in 60 minutes*  |  Reports in 6 hours*',
  whatsappNumber: '917095406796',
  phoneNumber: '917095406796', // used by the "Book Via Call" button
  instagramUrl: 'https://www.instagram.com/bharath_lab_pdtr',
  instagramHandle: '@bharath_lab_pdtr',
  location: 'Proddatur',
};

// Section links. They use "/#id" so they also work from the organ pages.
export const NAV_LINKS = [
  { label: 'Blood Tests', href: '/#risks' },
  { label: 'Full Body Packages', href: '/#packages' },
  { label: 'Home Visit', href: '/#quick-actions' },
];

export const FOOTER_LINKS = [
  { label: 'Blood Tests', href: '/#risks' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Equipment', href: '/#equipment' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
];

// Ready-made WhatsApp messages.
export const WHATSAPP_MESSAGES = {
  general: 'Hi, I have a question about your tests.',
  booking: 'Hi, I would like to book a test.',
  appointment: 'Hi, I would like to book an appointment.',
};
