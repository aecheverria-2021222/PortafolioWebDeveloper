/**
 * form.js — Validación del formulario de contacto (lado cliente).
 * Sin backend todavía: al validar, muestra confirmación y prepara el envío.
 * TODO: conectar con un servicio de formularios (Formspree / Netlify Forms).
 */
export function initForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");

  const validators = {
    nombre: (v) => (v.trim() ? "" : "Por favor, indica tu nombre."),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Introduce un correo electrónico válido.",
    mensaje: (v) =>
      v.trim().length >= 10 ? "" : "Cuéntame un poco más (mínimo 10 caracteres).",
  };

  const setError = (field, message) => {
    const wrap = field.closest(".field");
    if (!wrap) return;
    wrap.classList.toggle("is-invalid", Boolean(message));
    const errorEl = wrap.querySelector(".field__error");
    if (errorEl) errorEl.textContent = message || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      if (!field) return;
      const message = validators[name](field.value);
      setError(field, message);
      if (message) valid = false;
    });

    if (!valid) {
      if (status) status.textContent = "";
      return;
    }

    if (status) status.textContent = "¡Gracias! Tu mensaje está listo para enviarse.";
    form.reset();
  });

  form.querySelectorAll(".field__control").forEach((input) => {
    input.addEventListener("input", () => setError(input, ""));
  });
}
