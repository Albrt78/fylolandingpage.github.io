// Hamburger Menu button
const hamburgerIcon = document.getElementById("hamburger-menu");
const hamburgerMenu = document.querySelector(".navbar");

// alert
const alert = document.getElementById("alert");
const formInput = document.getElementById("input");
const getStartedButton = document.getElementById("button");

// newsletter alert
const newsletterAlert = document.getElementById("newsletter-alert");
const newsletterInput = document.getElementById("newsletter-form");
const newsletterButton = document.getElementById("newsletter-button");

// For email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Register Validation
function inputValidation() {
    if (!formInput.value.match(emailRegex)) {
        alert.style.visibility = "visible";
        formInput.style.border = "3px dotted red";
    } else {
        alert.style.visibility = "hidden";
        formInput.style.border = "3px dotted var(--Moderate-Cyan)";
    }
}

formInput.addEventListener("input", () => {
    inputValidation();
});

getStartedButton.onclick = (e) => {
    inputValidation();
    e.preventDefault();
};

// Newsletter Validation
function newsletterValidation() {
    if (!newsletterInput.value.match(emailRegex)) {
        newsletterAlert.style.visibility = "visible";
        newsletterInput.style.border = "3px dotted red";
    } else {
        newsletterAlert.style.visibility = "hidden";
        newsletterInput.style.border = "3px dotted var(--Moderate-Cyan)";
    }
}

newsletterInput.addEventListener("input", () => {
    newsletterValidation();
});

newsletterButton.onclick = (e) => {
    newsletterValidation();
    e.preventDefault();
};

// Hamburger Menu Event
hamburgerIcon.onclick = () => {
    hamburgerMenu.classList.toggle("active");
};

document.addEventListener("click", (e) => {
    if (!hamburgerIcon.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove("active");
    }
});
