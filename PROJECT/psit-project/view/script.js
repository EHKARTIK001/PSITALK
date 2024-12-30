// Define valid users
const validUsers = [
    { name: "Naitik", id: "2432888" },
    { name: "Kartik Bajpei", id: "2431204" },
    { name: "Karan Gupta", id: "2433079" },
    { name: "Nainasi Kushwaha", id: "2432090" }
];

// Login function
function login() {
    const name = document.getElementById('student-name').value.trim();
    const id = document.getElementById('student-id').value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ""; // Clear error message

    const user = validUsers.find(user => user.name.toLowerCase() === name.toLowerCase() && user.id === id);

    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'flex';
        document.getElementById('greeting-message').innerText = `Hello, ${user.name}! How can I assist you today?`;
    } else {
        errorMessage.textContent = "Invalid name or student ID. Please try again.";
    }
}

// Guest login function
function loginAsGuest() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("chat-container").style.display = "flex";
    document.getElementById("greeting-message").innerText = "Welcome, Guest! How can I assist you today?";
}

// Expanded Keywords and Responses
const keywords = {
    // Existing categories
    greeting: ["hi", "hello", "hey", "howdy", "good morning", "good evening"],
    help: ["help", "assist", "support"],
    psitalk: ["psitalk", "about psitalk", "virtual assistant", "chatbot"],
    creator: ["who created you", "developer", "who made you", "made by"],
    gratitude: ["thank you", "thanks", "appreciate", "grateful"],
    goodbye: ["goodbye", "bye", "farewell", "see you", "take care"],
    courses: ["courses offered", "what courses", "programs available", "course list", "degree programs"],
    facilities: ["facilities available", "campus facilities", "what facilities", "amenities"],
    admission: ["apply for admission", "admission process", "how to apply", "admission requirements"],
    psit: ["what is psit", "about psit", "PSIT overview"],
    hostel: ["hostel facilities", "hostel rules", "accommodation", "hostel life"],
    library: ["library rules", "library timings", "library resources", "library facilities"],
    training: ["training programs", "corporate training", "skills development", "workshops"],
    conduct: ["code of conduct", "student rules", "behavioral rules"],
    attendance: ["attendance policy", "attendance requirements", "attendance rules"],
    covid: ["covid protocol", "covid guidelines", "covid measures", "safety protocol"],
    faculty: ["faculty", "professors", "instructors", "teaching staff"],
    events: ["events", "campus events", "cultural activities", "sports events", "student events"],
    placements: ["placement", "placement cell", "career opportunities", "job placements"],
    studentLife: ["student life", "hostel life", "student activities", "clubs", "societies", "extracurricular"],
    alumni: ["alumni", "alumni network", "alumni association"],
    libraryResources: ["library resources", "library facilities", "books available", "research materials"],
    scholarships: ["scholarships", "financial aid", "scholarship programs", "scholarship opportunities"],
    research: ["research opportunities", "research facilities", "research programs"],
    internships: ["internships", "internship opportunities", "internship programs", "summer internships"],
    departments: ["departments", "academic departments", "branches", "B.Tech departments", "M.Tech departments"],
    clubs: ["clubs", "societies", "student clubs", "cultural clubs", "sports clubs"],
    studentSupport: ["student support", "counseling", "mental health", "career counseling"],
    industryCollaborations: ["industry collaborations", "industry tie-ups", "industry partnerships", "corporate collaborations"],
    
    // New category for campus locations
    campusLocations: [
        "library location", "where is the library", "find the library", "library map",
        "sports facilities", "where is the sports ground", "where are the sports facilities",
        "cafeteria location", "where is the cafeteria", "find the cafeteria",
        "hostel location", "where are the hostels", "hostel map", "hostel directions",
        "computer labs", "where are the computer labs", "find the computer labs",
        "main building", "where is the main building", "find the main building",
        "parking area", "where is the parking", "find the parking", "campus parking",
        "auditorium", "where is the auditorium", "auditorium location", "find the auditorium",
        "administration block", "where is the administration block", "find the admin block"
    ]
};

// Bot response function
function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Check for campus location keywords
    for (const [key, words] of Object.entries(keywords)) {
        if (words.some(kw => userInput.includes(kw))) {
            switch (key) {
                case "greeting":
                    return "Hello! How can I assist you today?";
                case "help":
                    return "I'm here to help. Please tell me what you need assistance with.";
                case "psitalk":
                    return "PSITalk is a virtual assistant designed to help students and visitors with information about PSIT.";
                case "creator":
                    return "I was created by the team K2N—Naitik, Nainsi, Karan, and Kartik from BCA 1D—to assist with common queries and offer guidance.";
                case "gratitude":
                    return "You're very welcome! Feel free to ask if you have more questions.";
                case "goodbye":
                    return "Goodbye! Have a wonderful day!";
                case "courses":
                    return "PSIT offers various undergraduate and postgraduate courses such as B.Tech, M.Tech, MBA, BBA, BCA, and Pharmacy programs. Visit our official website for the complete course list.";
                case "facilities":
                    return "PSIT provides a state-of-the-art campus with centralized AC, 24x7 medical facilities, high-speed Wi-Fi, sports grounds, and a digital library. Additionally, there are multiple food courts, cafeterias, and recreational areas.";
                case "admission":
                    return "You can apply for admission through the PSIT website or by contacting the admissions office. Online applications are available, and we update the admission process every year.";
                case "psit":
                    return "PSIT (Pranveer Singh Institute of Technology) is known for its commitment to high-quality education, offering a range of undergraduate, postgraduate, and diploma courses in engineering, management, and sciences.";
                case "hostel":
                    return "PSIT provides separate hostels for boys and girls, offering round-the-clock security, AC dining halls, Wi-Fi, laundry services, and basic amenities for a comfortable stay.";
                case "library":
                    return "The library is open from 8:00 am to 8:00 pm on weekdays and 9:00 am to 2:00 pm on holidays. It offers a vast collection of books, journals, and research papers, along with digital resources.";
                case "campusLocations":
                    if (userInput.includes("library")) {
                        return "The library is located near the main building. It is easily accessible from the central walkway.";
                    }
                    if (userInput.includes("sports")) {
                        return "The sports facilities are located behind the main building, near the football and cricket fields.";
                    }
                    if (userInput.includes("cafeteria")) {
                        return "The cafeteria is situated on the ground floor of the main building. You can find it beside the student lounge.";
                    }
                    if (userInput.includes("hostel")) {
                        return "The boys' and girls' hostels are located on the east side of the campus, near the parking area.";
                    }
                    if (userInput.includes("computer labs")) {
                        return "The computer labs are located in the west block, next to the library.";
                    }
                    if (userInput.includes("auditorium")) {
                        return "The auditorium is located near the main entrance, right across from the administration block.";
                    }
                    if (userInput.includes("administration block")) {
                        return "The administration block is located at the entrance of the campus, near the parking area.";
                    }
                    if (userInput.includes("parking")) {
                        return "The parking area is situated on the west side of the campus, near the computer labs.";
                    }
                    return "I can help you with information about various locations on campus. Try asking about the library, cafeteria, sports facilities, or the hostels.";
                default:
                    return "I'm not sure how to respond to that. Here are some questions you can ask:\n - 'Where is the library?'\n - 'How do I get to the sports ground?'\n - 'Where is the cafeteria?'\n - 'Where are the hostels located?'";
            }
        }
    }

    return "I'm not sure how to respond to that. Please try asking something like 'Where is the library?' or 'Tell me about the campus facilities.'";
}


// Send message function
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        displayMessage('user', userInput);
        document.getElementById('user-input').value = '';

        const botResponse = getBotResponse(userInput);
        setTimeout(() => displayMessage('bot', botResponse), 500);
    }
}

// Display message in chat
function displayMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerHTML = `<div class="bubble">${text}</div>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggleBtn = document.querySelector('.theme-toggle');
    themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
}
// Voice command function using SpeechRecognition API
function startVoiceCommand() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        const voiceButton = document.getElementById('voice-command');

        recognition.onstart = () => {
            voiceButton.classList.add('recording'); // Add pulsing effect
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('user-input').value = transcript;
            sendMessage();
        };

        recognition.onerror = (event) => {
            alert('Voice recognition error. Please try again.');
        };

        recognition.onend = () => {
            voiceButton.classList.remove('recording'); // Remove pulsing effect
        };

        recognition.start();
    } else {
        alert('Speech Recognition is not supported in this browser.');
    }
}
