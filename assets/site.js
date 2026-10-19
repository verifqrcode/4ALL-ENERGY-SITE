const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
// The contact form opens the visitor's email application; no server is required.
const form = document.querySelector("#quote-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Demande de devis - 4ALL ENERGY");
    const body = encodeURIComponent(
      `Nom : ${data.get("name") || ""}\nEntreprise : ${data.get("company") || ""}\nTéléphone : ${data.get("phone") || ""}\nE-mail : ${data.get("email") || ""}\nActivité : ${data.get("activity") || ""}\n\nProjet :\n${data.get("message") || ""}`
    );
    window.location.href = `mailto:4ae.contact@gmail.com?subject=${subject}&body=${body}`;
  });
}
