import { gsap } from '@/lib/gsap';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cart icon shakes when something is added.
export function wiggle(element) {
  if (!element || prefersReducedMotion()) return;
  gsap
    .timeline()
    .to(element, { rotation: -14, duration: 0.1 })
    .to(element, { rotation: 12, duration: 0.15 })
    .to(element, { rotation: -6, duration: 0.15 })
    .to(element, { rotation: 0, duration: 0.1 });
}

// Cart badge pops when the count changes.
export function popBadge(element) {
  if (!element || prefersReducedMotion()) return;
  gsap.fromTo(element, { scale: 1.6 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' });
}

// A yellow dot flies from the clicked button to the cart button in the header.
export function flyToCart(fromElement) {
  const cart = document.querySelector('[data-cart-button]');
  if (!fromElement || !cart || prefersReducedMotion()) return;

  const from = fromElement.getBoundingClientRect();
  const to = cart.getBoundingClientRect();
  const dot = document.createElement('div');
  Object.assign(dot.style, {
    position: 'fixed', left: '0', top: '0', width: '16px', height: '16px',
    borderRadius: '50%', background: '#ffc83d', zIndex: '60', pointerEvents: 'none',
  });
  document.body.append(dot);

  gsap.fromTo(
    dot,
    { x: from.left + from.width / 2 - 8, y: from.top + from.height / 2 - 8, scale: 1 },
    {
      x: to.left + to.width / 2 - 8,
      y: to.top + to.height / 2 - 8,
      scale: 0.3,
      duration: 0.65,
      ease: 'power2.in',
      onComplete: () => dot.remove(),
    }
  );
}
