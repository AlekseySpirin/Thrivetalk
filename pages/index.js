const getId = (link) => link.getAttribute("href").replace("#", "");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".header__link").forEach((link) => {
          link.classList.toggle(
            "header__link--active",
            getId(link) === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

document
  .querySelectorAll("section")
  .forEach((section) => observer.observe(section));

document.querySelector("header__list").addEventListener("click", (event) => {
  if (event.target.classList.contains("header__link")) {
    event.preventDefault();
    const id = getId(event.target);

    window.scrollTo({
      top: document.getElementById(getId(event.target)).offsetTop,
      behavior: "smooth",
    });
  }
});
