// Define valid 
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

// Define detailed responses with extensive information about PSIT
const responses = {
    greeting: "Hello! Welcome to PSIT College of Higher Education. I’m here to help you with information about our campus, academic programs, facilities, and answer any questions you may have.",
    psitInfo: "PSIT is a premier educational institution offering a wide range of undergraduate and postgraduate programs.",
    creater: "I was created by the team K2N—Naitik, Nainsi, Karan, and Kartik from BCA 1D—to assist with common queries and offer guidance.",
    studentLife:  "PSIT offers a vibrant student life with numerous clubs, societies, and events. Students can participate in activities ranging from cultural programs to sports and academic clubs, helping them grow holistically.",
    faculty:  "PSIT boasts a dedicated team of qualified and experienced faculty members who are committed to delivering high-quality education and guiding students in their academic and professional journeys.",
    events:  "PSIT organizes a variety of events throughout the year, including cultural fests, sports competitions, guest lectures, and industry visits, all designed to enrich the student experience.",
    courses: {
        main: "PSIT offers several courses. Which one would you like to know more about?",
        BTech: "PSIT offers B.Tech programs in various disciplines like Computer Science, Mechanical, and Electrical Engineering.",
        MBA_MTech: "The MBA and M.Tech programs are designed to equip students with advanced knowledge in management and technology.",
        BBA_BCA: "BBA and BCA programs are designed to provide foundational knowledge in business and computer applications.",
        Pharmacy: "PSIT offers programs in Pharmacy, including Diploma in Pharmacy (D.Pharm), Bachelor of Pharmacy (B.Pharm), and Master of Pharmacy (M.Pharm), to educate students in pharmaceutical sciences."

    },
    facilities: {
    main: "PSIT’s campus has many facilities. Would you like to know about:",
    hostel: "PSIT provides safe and comfortable hostels with various amenities like Wi-Fi, dining, and recreational areas.",
    sports: "PSIT has extensive sports facilities, including football, basketball, cricket, and indoor games.",
    library: "The PSIT library has a vast collection of books, journals, and digital resources for students.",
    labs: "PSIT boasts state-of-the-art labs equipped with modern technology for practical learning in various fields like engineering and science.",
    cafeteria: "The PSIT cafeteria offers a variety of food options, including vegetarian and non-vegetarian meals, snacks, and beverages.",
    auditorium: "PSIT has a large auditorium for seminars, conferences, workshops, and cultural events, with excellent acoustics and seating.",
    parking: "PSIT provides ample parking space for students and faculty, ensuring convenient parking for everyone.",
    healthCenter: "PSIT’s health center provides medical services with qualified doctors and nurses available for emergencies and routine check-ups.",
    wifi: "PSIT offers campus-wide Wi-Fi, ensuring that students and staff are connected at all times for academic and personal use.",
    counseling: "PSIT offers counseling services to support mental health and well-being of students, with professional counselors available for sessions."
},

    attendance: "PSIT has a strict attendance policy. Students must maintain at least 90% attendance to appear for exams.",
    training: "PSIT organizes several training and skill development programs to help students enhance their employability.",
    placements: "The PSIT Placement Cell helps students secure jobs by connecting them with top companies through placement drives."
};

// Define regex patterns for each category of question
const keywordPatterns = {
    greeting: /hi|hello|hey|howdy|good (morning|evening)/i,
    psitInfo: /about psit|psit college|what is psit/i,
    creater: /who created you|creator/i,
    studentLife: /student life|hostel life|student activities|clubs|societies|extracurricular/i,
    events: /events|campus events|cultural activities|sports events|student events/i,
    courses: /courses offered|what courses|programs available|course list|degree programs/i,
    facilities: /facilities available|campus facilities|what facilities|amenities/i,
    library: /library rules|library timings|library resources|library facilities|where is the library/i,
    hostel: /hostel facilities|hostel rules|accommodation|hostel life|where are the hostels/i,
    attendance: /attendance policy|attendance requirements|attendance rules/i,
    faculty: /faculty|professors|instructors|teaching staff/i,
    training: /training programs|corporate training|skills development|workshops/i,
    placements: /placement|placement cell|career opportunities|job placements/i
};

// Bot response function to trigger main category or subcategory questions
function getBotResponse(userInput) {
    // Iterate through each keyword pattern to find a match
    for (const [category, pattern] of Object.entries(keywordPatterns)) {
        if (pattern.test(userInput)) {
            // Show the main options for categories with subquestions (courses, facilities)
            if (responses[category].main) {
                return responses[category].main;
            } else {
                return responses[category];  // Return direct response for others
            }
        }
    }
    
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;  // Ignore empty input

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    const userBubble = document.createElement('div');
    userBubble.classList.add('bubble');
    userBubble.textContent = userInput;
    userMessage.appendChild(userBubble);
    document.getElementById('chat-box').appendChild(userMessage);

    // Scroll to the bottom of the chat
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

    // Clear input field
    document.getElementById('user-input').value = '';

    // Get bot response after a slight delay (simulating typing)
    document.getElementById('typing-indicator').style.display = 'block'; // Show typing indicator
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none'; // Hide typing indicator
        const botResponse = getBotResponse(userInput);

        // Display bot message
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        const botBubble = document.createElement('div');
        botBubble.classList.add('bubble');
        botBubble.textContent = botResponse;
        botMessage.appendChild(botBubble);
        document.getElementById('chat-box').appendChild(botMessage);

        // Add clickable options for courses, facilities, attendance, etc.
        addClickableOptions(userInput);

        // Scroll to the bottom of the chat again after the response
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }, 1500);  // Simulate 1.5 seconds of "thinking" time
}

// Function to add clickable options for the user
function addClickableOptions(userInput) {
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('options-container');
    let options = [];

    // Based on user input, show the relevant options
    if (userInput.match(/courses/i)) {
        options = [
            { text: "B.Tech Courses", callback: () => displayCourseInfo("BTech") },
            { text: "MBA and M.Tech", callback: () => displayCourseInfo("MBA_MTech") },
            { text: "BBA and BCA", callback: () => displayCourseInfo("BBA_BCA") },
            { text: "D.Pharm, B.Pharm & M.Pharm", callback: () => displayCourseInfo("Pharmacy") }
        ];
    } else if (userInput.match(/facilities/i)) {
        options = [
        { text: "Hostel Facilities", callback: () => displayFacilityInfo("hostel") },
        { text: "Sports and Recreation", callback: () => displayFacilityInfo("sports") },
        { text: "Library", callback: () => displayFacilityInfo("library") },
        { text: "Laboratories", callback: () => displayFacilityInfo("labs") },
        { text: "Cafeteria", callback: () => displayFacilityInfo("cafeteria") },
        { text: "Auditorium", callback: () => displayFacilityInfo("auditorium") },
        { text: "Parking", callback: () => displayFacilityInfo("parking") },
        { text: "Health Center", callback: () => displayFacilityInfo("healthCenter") },
        { text: "Wi-Fi Services", callback: () => displayFacilityInfo("wifi") },
        { text: "Counseling Services", callback: () => displayFacilityInfo("counseling") }
        ];
    
    
    } else if (userInput.match(/attendance/i)) {
        options = [
            { text: "Attendance Policy", callback: () => displayGeneralInfo("attendance") }
        ];
    } else if (userInput.match(/training/i)) {
        options = [
            { text: "Training Programs", callback: () => displayGeneralInfo("training") }
        ];
    } else if (userInput.match(/placements/i)) {
        options = [
            { text: "Placements and Career Opportunities", callback: () => displayGeneralInfo("placements") }
        ];
    }

    // Add buttons with styles for attractiveness
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-button');
        optionButton.textContent = option.text;
        optionButton.onclick = function () {
            // Add fade-out animation to all options
            const allButtons = document.querySelectorAll('.option-button');
            allButtons.forEach(button => {
                button.classList.add('fade-out');
            });

            // Call the callback to show the selected info after a delay
            setTimeout(() => {
                // Call the callback to display the selected content
                option.callback();
                // Remove the buttons after animation
                allButtons.forEach(button => button.remove());
            }, 500); // Delay to allow the fade-out animation to finish
        };
        optionContainer.appendChild(optionButton);
    });

    document.getElementById('chat-box').appendChild(optionContainer);
}


// Display course details based on user choice
function displayCourseInfo(courseType) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    const botBubble = document.createElement('div');
    botBubble.classList.add('bubble');
    botBubble.textContent = responses.courses[courseType];
    botMessage.appendChild(botBubble);
    document.getElementById('chat-box').appendChild(botMessage);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

// Display facility details based on user choice
function displayFacilityInfo(facilityType) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    const botBubble = document.createElement('div');
    botBubble.classList.add('bubble');
    botBubble.textContent = responses.facilities[facilityType];
    botMessage.appendChild(botBubble);
    document.getElementById('chat-box').appendChild(botMessage);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

// Display general info (attendance, training, placements)
function displayGeneralInfo(infoType) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    const botBubble = document.createElement('div');
    botBubble.classList.add('bubble');
    botBubble.textContent = responses[infoType];
    botMessage.appendChild(botBubble);
    document.getElementById('chat-box').appendChild(botMessage);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

// Function to toggle chat theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');  // Toggle dark theme on body
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '🌞'; // Toggle theme icon
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
