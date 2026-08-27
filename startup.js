(() => {
  'use strict';

  const intro = document.getElementById('brandIntro');
  if (!intro) {
    document.documentElement.classList.remove('splash-active');
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minimumVisible = reduceMotion ? 250 : 1450;
  const started = performance.now();

  function closeIntro() {
    const elapsed = performance.now() - started;
    const remaining = Math.max(0, minimumVisible - elapsed);

    window.setTimeout(() => {
      intro.classList.add('is-leaving');
      document.documentElement.classList.remove('splash-active');

      window.setTimeout(() => {
        intro.hidden = true;
        intro.setAttribute('aria-hidden', 'true');
      }, reduceMotion ? 170 : 760);
    }, remaining);
  }

  if (document.readyState === 'complete') closeIntro();
  else window.addEventListener('load', closeIntro, { once: true });

  // Safety fallback: never let the opening screen block access if a remote image stalls.
  window.setTimeout(() => {
    if (!intro.hidden && !intro.classList.contains('is-leaving')) closeIntro();
  }, 2600);
})();