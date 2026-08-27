// ===============================
// STUDENT PORTFOLIO - JAVASCRIPT
// Roll Number: 11
// ===============================


// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }
        });


        // Close menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuButton.textContent = "☰";

            });

        });

    }


    // ===============================
    // SMOOTH SCROLLING
    // ===============================

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===============================
    // ACTIVE NAVIGATION
    // ===============================

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navItems.forEach(function (item) {

            item.classList.remove("active");

            if (
                item.getAttribute("href") === "#" + currentSection
            ) {
                item.classList.add("active");
            }

        });

    });


    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();


            if (name === "" || email === "" || message === "") {

                alert("Please fill in all required fields.");

                return;
            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        });

    }


    // ===============================
    // SCROLL TO TOP BUTTON
    // ===============================

    const scrollTopButton = document.createElement("button");

    scrollTopButton.innerHTML = "↑";
    scrollTopButton.className = "scroll-top";
    scrollTopButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    document.body.appendChild(scrollTopButton);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    });


    scrollTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ===============================
    // TYPING EFFECT
    // ===============================

    const typingElement = document.querySelector(".hero h2");

    if (typingElement) {

        const words = [
            "Student",
            "Learner",
            "Programmer",
            "Web Enthusiast"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function typeText() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (characterIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeText, 1500);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }

                }

            }

            setTimeout(
                typeText,
                deleting ? 60 : 100
            );

        }


        typeText();

    }


    // ===============================
    // REVEAL SECTIONS ON SCROLL
    // ===============================

    const revealElements = document.querySelectorAll(
        "section, .skill-card, .project-card, .achievement-card"
    );


    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    // ===============================
    // CURRENT YEAR
    // ===============================

    const footerYear = document.querySelector(
        "footer p:last-child"
    );

    if (footerYear) {

        const currentYear = new Date().getFullYear();

        footerYear.innerHTML =
            "© " +
            currentYear +
            " Student Portfolio. All Rights Reserved.";

    }

});

