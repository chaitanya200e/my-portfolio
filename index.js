document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Loaded Successfully!");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector(".navbar-collapse");

    toggleButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });
});
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const text = "I'm a Web Developer";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("intro").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Name is required!");
        event.preventDefault();
    }
});



