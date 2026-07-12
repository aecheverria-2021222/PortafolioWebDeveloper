/**
 * main.js — Punto de entrada. Orquesta la inicialización de los módulos.
 */
import { initTheme } from "./modules/theme.js";
import { initNav } from "./modules/nav.js";
import { initReveal } from "./modules/reveal.js";
import { initForm } from "./modules/form.js";

function start() {
  initTheme();
  initNav();
  initReveal();
  initForm();

  // Año dinámico en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
