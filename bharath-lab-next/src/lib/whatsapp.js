import { SITE } from '@/data/site';

export function openWhatsApp(text) {
  const url = new URL(`https://wa.me/${SITE.whatsappNumber}`);
  if (text) url.searchParams.set('text', text);
  window.open(url.toString(), '_blank', 'noopener');
}

export function buildOrderMessage(name, items) {
  const names = items.map((item) => item.name).join(', ');
  return `hi I am ${name}, I am looking for this test (${names})`;
}
