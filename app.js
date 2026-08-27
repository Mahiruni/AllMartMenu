(() => {
  "use strict";

  const menu = window.ALL_MART_MENU || [];
  const featured = window.ALL_MART_FEATURED || [];
  const state = { query: "", group: "all" };

  const els = {
    menuContent: document.getElementById("menuContent"),
    categoryFilters: document.getElementById("categoryFilters"),
    menuIndex: document.getElementById("menuIndex"),
    menuSearch: document.getElementById("menuSearch"),
    menuCount: document.getElementById("menuCount"),
    clearSearch: document.getElementById("clearSearch"),
    noResults: document.getElementById("noResults"),
    resetFilters: document.getElementById("resetFilters"),
    featuredGrid: document.getElementById("featuredGrid"),
    searchToggle: document.getElementById("searchToggle"),
    globalSearch: document.getElementById("globalSearch"),
    headerSearchInput: document.getElementById("headerSearchInput"),
    menuToggle: document.getElementById("menuToggle"),
    mobileMenu: document.getElementById("mobileMenu"),
    mobileMenuClose: document.getElementById("mobileMenuClose"),
    mobileSearch: document.getElementById("mobileSearch"),
    backToTop: document.getElementById("backToTop")
  };

  const groups = [
    { id: "all", label: "All menu" },
    { id: "breakfast", label: "Breakfast" },
    { id: "mains", label: "Mains" },
    { id: "pizza", label: "Pizza & burgers" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" }
  ];

  function currency(value) {
    return `${Number(value).toLocaleString("en-US")} ETB`;
  }

  function priceMarkup(item) {
    if (item.prices) {
      return `<div class="multi-price">${Object.entries(item.prices)
        .map(([size, value]) => `<span><small>${size}</small>${currency(value)}</span>`)
        .join("")}</div>`;
    }
    return `<span class="item-price">${currency(item.price)}</span>`;
  }

  function searchableText(section, item) {
    return [section.label, section.kicker, item.name, item.description || "", ...(item.tags || [])]
      .join(" ")
      .toLowerCase();
  }

  function getVisibleSections() {
    const q = state.query.trim().toLowerCase();
    return menu
      .filter(section => state.group === "all" || section.group === state.group)
      .map(section => ({
        ...section,
        items: section.items.filter(item => !q || searchableText(section, item).includes(q))
      }))
      .filter(section => section.items.length > 0);
  }

  function renderFilters() {
    els.categoryFilters.innerHTML = groups.map(group => `
      <button class="filter-chip ${state.group === group.id ? "is-active" : ""}" type="button" data-group="${group.id}" aria-pressed="${state.group === group.id}">
        ${group.label}
      </button>
    `).join("");

    els.categoryFilters.querySelectorAll("[data-group]").forEach(button => {
      button.addEventListener("click", () => {
        state.group = button.dataset.group;
        renderMenu();
      });
    });
  }

  function renderMenu() {
    const visible = getVisibleSections();
    const count = visible.reduce((total, section) => total + section.items.length, 0);

    renderFilters();
    els.menuCount.textContent = `${count} ${count === 1 ? "item" : "items"} shown`;
    els.clearSearch.hidden = !state.query;
    els.noResults.hidden = count !== 0;
    els.menuContent.hidden = count === 0;

    els.menuIndex.innerHTML = visible.map(section => `
      <a href="#section-${section.id}">${section.label}<span>${section.items.length}</span></a>
    `).join("");

    els.menuContent.innerHTML = visible.map((section, sectionIndex) => `
      <section class="menu-category reveal" id="section-${section.id}" aria-labelledby="heading-${section.id}">
        <div class="menu-category-head">
          <div>
            <p class="category-number">${String(sectionIndex + 1).padStart(2, "0")} · ${section.kicker}</p>
            <h3 id="heading-${section.id}">${section.label}</h3>
          </div>
          <p>${section.description}</p>
        </div>
        <div class="menu-items">
          ${section.items.map(item => `
            <article class="menu-item ${item.popular ? "is-popular" : ""}">
              <div class="menu-item-main">
                <div class="item-title-row">
                  <h4>${item.name}</h4>
                  ${item.popular ? `<span class="popular-badge">Popular</span>` : ""}
                </div>
                ${item.description ? `<p>${item.description}</p>` : ""}
                ${item.tags?.length ? `<div class="item-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>` : ""}
              </div>
              <div class="menu-item-price">${priceMarkup(item)}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("");

    activateReveal();
  }

  function findItem(sectionId, name) {
    const section = menu.find(entry => entry.id === sectionId);
    return section?.items.find(item => item.name === name);
  }

  function renderFeatured() {
    els.featuredGrid.innerHTML = featured.map((feature, index) => {
      const item = findItem(feature.section, feature.item);
      if (!item) return "";
      const section = menu.find(entry => entry.id === feature.section);
      const price = item.price ? currency(item.price) : `From ${currency(Math.min(...Object.values(item.prices)))}`;
      return `
        <article class="featured-card reveal" style="--delay:${index * 80}ms">
          <div class="featured-photo">
            <img src="${feature.image}" alt="${feature.alt}" loading="lazy" />
            <span>${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="featured-copy">
            <p>${section.label}</p>
            <h3>${item.name}</h3>
            <div><span>${price}</span><a href="#section-${feature.section}" aria-label="View ${item.name} in menu">↗</a></div>
          </div>
        </article>
      `;
    }).join("");
  }

  function setSearch(value) {
    state.query = value;
    els.menuSearch.value = value;
    els.headerSearchInput.value = value;
    renderMenu();
  }

  function openSearch() {
    els.globalSearch.hidden = false;
    els.searchToggle.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => els.headerSearchInput.focus());
  }

  function closeSearch() {
    els.globalSearch.hidden = true;
    els.searchToggle.setAttribute("aria-expanded", "false");
  }

  function openMobileMenu() {
    els.mobileMenu.hidden = false;
    document.body.classList.add("menu-open");
    els.menuToggle.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => els.mobileMenuClose.focus());
  }

  function closeMobileMenu() {
    els.mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    els.menuToggle.setAttribute("aria-expanded", "false");
  }

  function handleNavGroup(group) {
    state.group = group;
    renderMenu();
    closeMobileMenu();
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  let revealObserver;
  function activateReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
  }

  function bindEvents() {
    els.menuSearch.addEventListener("input", event => setSearch(event.target.value));
    els.headerSearchInput.addEventListener("input", event => {
      setSearch(event.target.value);
      if (event.target.value) document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.clearSearch.addEventListener("click", () => {
      setSearch("");
      els.menuSearch.focus();
    });
    els.resetFilters.addEventListener("click", () => {
      state.group = "all";
      setSearch("");
    });

    els.searchToggle.addEventListener("click", () => {
      els.globalSearch.hidden ? openSearch() : closeSearch();
    });
    els.mobileSearch.addEventListener("click", () => {
      openSearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    els.menuToggle.addEventListener("click", () => els.mobileMenu.hidden ? openMobileMenu() : closeMobileMenu());
    els.mobileMenuClose.addEventListener("click", closeMobileMenu);

    document.querySelectorAll("[data-nav]").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        handleNavGroup(link.dataset.nav);
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeSearch();
        if (!els.mobileMenu.hidden) closeMobileMenu();
      }
    });

    document.getElementById("printMenu").addEventListener("click", () => window.print());

    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      document.body.classList.toggle("scrolled", y > 12);
      els.backToTop.classList.toggle("is-visible", y > 700);
    }, { passive: true });

    els.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function init() {
    renderFeatured();
    renderMenu();
    bindEvents();
    activateReveal();
    const totalItems = menu.reduce((sum, section) => sum + section.items.length, 0);
    document.getElementById("dishStat").textContent = `${totalItems}+`;
    document.getElementById("sectionStat").textContent = menu.length;
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  init();
})();
