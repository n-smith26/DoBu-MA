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
