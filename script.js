const slides = [
    {
        title: "Judo",
        description: "Learn powerful throws, balance control, and grappling techniques.",
        image: "img/Judo.jpg"
    },
    {
        title: "Karate",
        description: "Traditional martial arts focusing on discipline, striking, and kata.",
        image: "img/Karate.jpg"
    },
    {
        title: "Jui-Jitsu",
        description: "Ground fighting, submissions, and grappling fundamentals.",
        image: "img/jiu jitsu actual image.jpeg"
    },
    {
        title: "Muay Thai",
        description: "Elbows, knees, clinch work, and powerful striking combinations.",
        image: "img/muay thai.jpg"
    },
    {
        title: "Large Mats Area",
        description: "A spacious mat area perfect for sparring, drills, and classes.",
        image: "img/large mats.jpg"
    },
    {
        title: "Large Gym",
        description: "Fully equipped gym space for strength and conditioning.",
        image: "img/large gym.jpg"
    },
    {
        title: "Changing Rooms",
        description: "Clean and modern changing rooms for all members.",
        image: "img/changing rooms.jpg"
    },
    {
        title: "Sauna",
        description: "Relax and recover in our authentic heated sauna.",
        image: "img/actual sausna.jpg"
    },
    {
        title: "Steam Room",
        description: "A warm steam environment perfect for recovery and relaxation.",
        image: "img/steam room.jpg"
    },
    {
        title: "Showers",
        description: "Modern shower facilities available for all members.",
        image: "img/shower rooms.jpg"
    }
];

let currentSlide = 0;

function updateSlide() {
    document.getElementById("offerTitle").textContent = slides[currentSlide].title;
    document.getElementById("offerDescription").textContent = slides[currentSlide].description;
    document.getElementById("offerImage").src = slides[currentSlide].image;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

/* REQUIRED FOR BUTTONS TO WORK */
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const enquiry = document.getElementById("enquiry").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Reset error message
    errorMessage.style.display = "none";
    errorMessage.style.color = "red";
    errorMessage.textContent = "";

    // Swear words list
    const bannedWords = ["fuck", "shit", "bitch", "cunt", "bastard", "wanker"];

    // First name required
    if (firstName === "") {
        errorMessage.textContent = "Submission failed: Please enter your first name.";
        errorMessage.style.display = "block";
        return;
    }

    // Email required
    if (email === "") {
        errorMessage.textContent = "Submission failed: An email address is required.";
        errorMessage.style.display = "block";
        return;
    }

    // Email must contain @ and look real
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Submission failed: Please enter a valid email address containing '@'.";
        errorMessage.style.display = "block";
        return;
    }

    // Enquiry required
    if (enquiry === "") {
        errorMessage.textContent = "Submission failed: Please provide details about your enquiry.";
        errorMessage.style.display = "block";
        return;
    }

    // Check for swear words
    const enquiryLower = enquiry.toLowerCase();
    for (let word of bannedWords) {
        if (enquiryLower.includes(word)) {
            errorMessage.textContent = "Submission failed: Please remove inappropriate language from your enquiry.";
            errorMessage.style.display = "block";
            return;
        }
    }

    // If everything is valid
    errorMessage.style.color = "green";
    errorMessage.textContent = "Your enquiry has been submitted successfully.";
    errorMessage.style.display = "block";
});
