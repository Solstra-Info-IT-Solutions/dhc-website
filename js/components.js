const DHC_NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About Us" },
  { href: "production.html", label: "Production" },
  { href: "rental.html", label: "Rental Equipment" },
  { href: "works.html", label: "Our Works" },
  { href: "book.html", label: "Book Now" },
  { href: "contact.html", label: "Contact" },
];

function renderHeader() {
  const current = document.body.getAttribute("data-page");
  const navLinks = (cls) =>
    DHC_NAV.map(
      (n) =>
        `<a href="${n.href}" class="${n.href.replace(".html","") === current ? cls + " active" : cls}">${n.label}</a>`
    ).join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap inner">
      <a href="index.html" class="logo">
        <span class="logo-mark">C</span>
        <span class="logo-text">
          <span class="l1">DREAM<span class="pink-grad"> HOUSE</span></span><br/>
          <span class="l2">CINEMAS</span>
        </span>
      </a>
      <nav class="main-nav">${navLinks("")}</nav>
      <a href="book.html" class="btn-enquire">ENQUIRE NOW &rarr;</a>
      <button class="burger" id="burgerBtn" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-nav" id="mobileNav">
      ${navLinks("")}
      <a href="book.html" class="btn-enquire">ENQUIRE NOW &rarr;</a>
    </div>
  `;
  document.body.prepend(header);

  document.getElementById("burgerBtn").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("open");
  });
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<div class="wrap">&copy; 2024 Dream House Cinemas. All Rights Reserved.</div>`;
  document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
