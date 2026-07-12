/**
 * scroll-fx.js — Efectos ligados al scroll:
 *   1) Barra de progreso de lectura (fina, en el borde superior).
 *   2) Parallax sutil del hero (profundidad entre capas).
 *
 * Todo se actualiza en un único handler con throttle por requestAnimationFrame.
 * Por decisión de producto, el parallax se muestra siempre (no se ata a
 * prefers-reduced-motion). La barra de progreso es informativa.
 */
export function initScrollFx() {
  // --- Barra de progreso ---
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  // --- Referencias para el parallax del hero ---
  const hero = document.querySelector(".hero");
  const heroVisual = document.querySelector(".hero-visual");
  const heroMono = document.querySelector(".hero-visual__mono");

  // El .hero-visual tiene data-reveal (anima su transform al entrar). Para no
  // pisar esa animación, solo tomamos el control de su transform cuando el
  // reveal ha terminado. La capa __mono no tiene reveal: es segura desde ya.
  let visualReady = false;
  if (heroVisual) {
    if (heroVisual.classList.contains("is-visible")) visualReady = true;
    heroVisual.addEventListener(
      "transitionend",
      (e) => {
        if (e.propertyName === "transform") visualReady = true;
      },
      { once: true }
    );
    // Fallback: si el transitionend no llega (p. ej. reveal instantáneo),
    // activamos el parallax igualmente pasado el tiempo del reveal.
    setTimeout(() => {
      visualReady = true;
    }, 700);
  }

  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${docH > 0 ? Math.min(1, y / docH) : 0})`;

    if (hero && y < hero.offsetHeight) {
      if (visualReady && heroVisual) {
        heroVisual.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      }
      if (heroMono) {
        heroMono.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
      }
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}
