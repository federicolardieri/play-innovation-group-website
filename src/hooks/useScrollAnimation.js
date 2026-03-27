import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook riutilizzabile per animazioni GSAP al scroll.
 * Sostituisce il pattern ripetuto in 13+ componenti.
 *
 * @param {object} options
 * @param {number} [options.y=40] - Offset verticale iniziale
 * @param {number} [options.duration=0.8] - Durata animazione
 * @param {string} [options.ease="power2.out"] - Easing GSAP
 * @param {string} [options.start="top 80%"] - ScrollTrigger start
 * @param {number} [options.stagger=0] - Stagger per animazioni multiple
 * @param {number} [options.delay=0] - Delay iniziale
 * @returns {{ ref: React.RefObject }} - Ref da attaccare all'elemento o al container
 */
const useScrollAnimation = ({
  y = 40,
  duration = 0.8,
  ease = 'power2.out',
  start = 'top 80%',
  stagger = 0,
  delay = 0,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const target = stagger > 0 ? ref.current.children : ref.current;
    if (!target) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          ...(stagger > 0 ? { stagger } : {}),
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, ease, start, stagger, delay]);

  return { ref };
};

export default useScrollAnimation;
