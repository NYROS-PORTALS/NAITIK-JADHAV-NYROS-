// MOBILE MENU

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// CLOSE MENU AFTER CLICKING LINK

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });


// CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(
    ".section, .skill-card, .about-card, .contact-card"
  )
  .forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

  });