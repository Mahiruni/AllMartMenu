(() => {
  'use strict';

  const content = document.getElementById('menuContent');
  const index = document.getElementById('menuIndex');
  const categoryFilters = document.getElementById('categoryFilters');
  const layout = document.querySelector('.menu-layout');

  if (!content || !layout) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const shell = document.createElement('div');
  shell.className = 'menu-slider-shell';
  shell.innerHTML = `
    <div class="menu-slider-chrome" aria-label="Menu slider controls">
      <div class="menu-slider-status">
        <span class="menu-slider-kicker">Swipe menu</span>
        <span class="menu-slider-counter" id="menuSliderCounter" aria-live="polite">01 / 01</span>
      </div>
      <div class="menu-slider-actions">
        <span class="menu-slider-hint" aria-hidden="true">Drag or swipe</span>
        <button class="menu-slide-button" id="menuSlidePrev" type="button" aria-label="Previous menu section">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7"/></svg>
        </button>
        <button class="menu-slide-button" id="menuSlideNext" type="button" aria-label="Next menu section">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    <div class="menu-slider-progress" aria-hidden="true"><span id="menuSliderProgress"></span></div>
  `;

  content.parentNode.insertBefore(shell, content);
  shell.appendChild(content);
  const chrome = shell.querySelector('.menu-slider-chrome');
  shell.insertBefore(chrome, content);
  const progressTrack = shell.querySelector('.menu-slider-progress');
  shell.appendChild(progressTrack);

  const prev = document.getElementById('menuSlidePrev');
  const next = document.getElementById('menuSlideNext');
  const counter = document.getElementById('menuSliderCounter');
  const progress = document.getElementById('menuSliderProgress');

  content.setAttribute('tabindex', '0');
  content.setAttribute('role', 'region');
  content.setAttribute('aria-roledescription', 'carousel');
  content.setAttribute('aria-label', 'ALL MART menu sections');

  let activeIndex = 0;
  let raf = 0;
  let drag = null;
  let renderVersion = 0;

  const slides = () => Array.from(content.querySelectorAll('.menu-category'));

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function nearestSlideIndex() {
    const items = slides();
    if (!items.length) return 0;
    const left = content.scrollLeft;
    let best = 0;
    let distance = Infinity;
    items.forEach((item, i) => {
      const d = Math.abs(item.offsetLeft - left);
      if (d < distance) {
        distance = d;
        best = i;
      }
    });
    return best;
  }

  function updateIndexState() {
    if (!index) return;
    const links = Array.from(index.querySelectorAll('a'));
    links.forEach((link, i) => {
      const isCurrent = i === activeIndex;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function updateChrome(forceIndex) {
    const items = slides();
    const total = items.length;
    if (!total) {
      counter.textContent = '00 / 00';
      progress.style.transform = 'scaleX(0)';
      prev.disabled = true;
      next.disabled = true;
      return;
    }

    activeIndex = clamp(Number.isInteger(forceIndex) ? forceIndex : nearestSlideIndex(), 0, total - 1);
    counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    progress.style.transform = `scaleX(${(activeIndex + 1) / total})`;
    prev.disabled = activeIndex === 0;
    next.disabled = activeIndex === total - 1;
    updateIndexState();

    items.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `${i + 1} of ${total}: ${slide.querySelector('h3')?.textContent || 'Menu section'}`);
      slide.classList.toggle('is-current-slide', i === activeIndex);
    });
  }

  function scrollToSlide(targetIndex, focusRail = false) {
    const items = slides();
    if (!items.length) return;
    const indexToUse = clamp(targetIndex, 0, items.length - 1);
    const target = items[indexToUse];

    content.scrollTo({
      left: target.offsetLeft,
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
    });

    activeIndex = indexToUse;
    updateChrome(indexToUse);
    if (focusRail) content.focus({ preventScroll: true });
  }

  function scheduleUpdate() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => updateChrome());
  }

  function afterRender() {
    const version = ++renderVersion;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (version !== renderVersion) return;
        content.scrollLeft = 0;
        activeIndex = 0;
        updateChrome(0);
      });
    });
  }

  prev.addEventListener('click', () => scrollToSlide(activeIndex - 1, true));
  next.addEventListener('click', () => scrollToSlide(activeIndex + 1, true));

  content.addEventListener('scroll', scheduleUpdate, { passive: true });
  content.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToSlide(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToSlide(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      scrollToSlide(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      scrollToSlide(slides().length - 1);
    }
  });

  content.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: content.scrollLeft,
      moved: false
    };
    content.setPointerCapture(event.pointerId);
    content.classList.add('is-dragging');
  });

  content.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const delta = event.clientX - drag.x;
    if (Math.abs(delta) > 3) drag.moved = true;
    content.scrollLeft = drag.scrollLeft - delta;
  });

  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const shouldSnap = drag.moved;
    try { content.releasePointerCapture(event.pointerId); } catch (_) {}
    drag = null;
    content.classList.remove('is-dragging');
    if (shouldSnap) scrollToSlide(nearestSlideIndex());
  }

  content.addEventListener('pointerup', endDrag);
  content.addEventListener('pointercancel', endDrag);

  if (index) {
    index.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      const id = link.getAttribute('href')?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target || target.parentElement !== content) return;
      event.preventDefault();
      scrollToSlide(slides().indexOf(target), true);
    });
  }

  if (categoryFilters) {
    categoryFilters.addEventListener('click', event => {
      const chip = event.target.closest('.filter-chip');
      if (!chip) return;
      requestAnimationFrame(() => {
        chip.scrollIntoView({
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      });
    });
  }

  const observer = new MutationObserver(afterRender);
  observer.observe(content, { childList: true });

  const indexObserver = index ? new MutationObserver(() => requestAnimationFrame(updateIndexState)) : null;
  if (indexObserver) indexObserver.observe(index, { childList: true });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => scrollToSlide(activeIndex), 100);
  }, { passive: true });

  afterRender();
})();
