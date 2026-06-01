const slides = [
    {
        title: "Judo",
        description: "Discover the dynamic and rewarding art of Judo, a martial art that focuses on skill, technique, and leverage rather than brute strength. Our Judo classes teach students how to safely execute throws, takedowns, holds, and grappling techniques while developing balance, coordination, and body awareness. Suitable for all ages and abilities, Judo promotes discipline, respect, confidence, and resilience both on and off the mat. Whether you are looking to compete, improve your fitness, learn self-defence, or simply challenge yourself, our experienced instructors will help you progress in a supportive and welcoming environment.",
        image: "img/Judo.jpg"
    },
    {
        title: "Karate",
        description: "Our Karate programme combines traditional martial arts values with practical training designed to build confidence, fitness, and self-discipline. Students learn a variety of striking techniques, including punches, kicks, blocks, and combinations, while also developing flexibility, coordination, and mental focus. Karate training encourages personal growth, respect for others, and perseverance through consistent practice. Whether you are a complete beginner or an experienced martial artist, our structured classes provide a clear path for progression while helping you achieve your individual goals.",
        image: "img/Karate.jpg"
    },
    {
        title: "Jui-Jitsu",
        description: "Jiu-Jitsu is one of the most effective martial arts for self-defence, teaching students how to control and overcome opponents through technique, leverage, and positioning. Our classes focus on ground fighting, submissions, escapes, and defensive strategies, allowing practitioners to develop confidence and practical skills in realistic situations. Alongside technical development, students benefit from improved fitness, problem-solving abilities, and mental resilience. Training in Jiu-Jitsu offers a challenging yet rewarding experience that helps build both physical and mental strength while fostering a strong sense of community among members.",
        image: "img/jiu jitsu actual image.jpeg"
    },
    {
        title: "Muay Thai",
        description: "Known as the \"Art of Eight Limbs,\" Muay Thai is a powerful and highly effective striking martial art that uses punches, kicks, knees, and elbows in combination with clinch techniques. Our Muay Thai classes provide an intense and engaging workout that improves cardiovascular fitness, strength, agility, and endurance while teaching practical combat skills. Whether your goal is to compete, improve your fitness, learn self-defence, or increase your confidence, our experienced coaches will guide you through technical training, pad work, drills, and conditioning exercises in a safe and motivating environment.",
        image: "img/muay thai.jpg"
    },
    {
        title: "Large Mats Area",
        description: "Our spacious, professionally maintained matted training area provides a safe and comfortable environment for all martial arts disciplines. The generous floor space allows multiple classes and training sessions to take place simultaneously while ensuring students have plenty of room to practise techniques safely and effectively. Designed to support everything from throws and grappling to striking drills and fitness training, our training area offers the ideal setting for learning, improving, and achieving your martial arts goals.",
        image: "img/large mats.jpg"
    },
    {
        title: "Large Gym",
        description: "In addition to our martial arts facilities, members have access to a large, fully equipped gym designed to support every aspect of their training. Featuring a wide range of modern strength, conditioning, and cardiovascular equipment, the gym provides everything needed to improve fitness, build strength, increase endurance, and enhance athletic performance. Whether you're looking to supplement your martial arts training, follow a dedicated fitness programme, or simply maintain a healthy lifestyle, our gym offers the equipment and space to help you succeed.",
        image: "img/large gym.jpg"
    },
    {
        title: "Changing Rooms",
        description: "Our modern and well-maintained changing facilities are designed to provide comfort and convenience before and after every training session. With ample space, secure storage options, and clean surroundings, members can prepare for training and freshen up afterwards in a relaxed environment. We take pride in maintaining high standards of cleanliness throughout our facilities, ensuring a pleasant experience for all members and visitors.",
        image: "img/changing rooms.jpg"
    },
    {
        title: "Sauna",
        description: "After a challenging training session or workout, our dedicated sauna offers the perfect place to relax, recover, and recharge. The soothing dry heat helps ease muscle tension, improve circulation, and promote relaxation, making it an excellent addition to any recovery routine. Whether you are looking to aid recovery after intense physical activity or simply take time to unwind, the sauna provides a calm and comfortable environment that supports both physical wellbeing and mental relaxation.",
        image: "img/actual sausna.jpg"
    },
    {
        title: "Steam Room",
        description: "Our steam room provides a luxurious and relaxing space where members can recover and rejuvenate after training. The warm, humid environment can help relax tired muscles, reduce tension, and create a calming experience that complements your fitness and martial arts journey. Whether used as part of a recovery routine or simply as a way to unwind after a busy day, the steam room offers an additional level of comfort and wellbeing that enhances your overall experience at our facility.",
        image: "img/steam room.jpg"
    },
    {
        title: "Showers",
        description: "Our clean, modern shower facilities ensure that members can comfortably refresh and prepare for the rest of their day after training. Conveniently located within the changing areas, the showers provide a practical and hygienic way to cool down, freshen up, and leave the dojo feeling revitalised. Designed with comfort and cleanliness in mind, they are an essential part of the high-quality facilities available to all members.",
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

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.menu-toggle');

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuToggle.innerHTML = '✕';
    } else {
        menuToggle.innerHTML = '☰';
    }
}