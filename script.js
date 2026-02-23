const knowledge = {
    greeting: "Hello! Welcome to Believers Church Residential School. How can I help you?",
    admission: "Admission is based on interview for LKG, written test for UKG, Classes I–IX & Class XI.",
    fees: "Tuition fees are Rs. ______ per quarter. One time admission fee and annual establishment fee also apply.",
    location: "The school is at Kuttapuzha, Tiruvalla, Kerala - 689103. https://maps.app.goo.gl/8J5to2M5DS8SJnM2A",
    hostel: "Hostel facilities are available for boys and girls from Class V onwards.",
    contact: "Phone: +91 0469 2733402 | Email: bcrsthiruvalla@gmail.com",
    courses: "We offer Science and Commerce streams in Classes XI and XII.",
    facilities: "Facilities include computer lab, science labs, library, sports, swimming pool & digital classes.",
    cbse: "Yes, the school is affiliated with the CBSE board.",
    princi:  "The Principal is Ms. Shirley Ann Thomas. She joined the school in 2010.",
    default: "Please ask about admission, courses, hostel, facilities, contact or location."
};

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.classList.add("message");
    msg.classList.add(sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    input = input.toLowerCase();
    if (input.includes("admission"))
        return knowledge.admission;
    if (input.includes("fee"))
        return knowledge.fees;
    if (input.includes("location") || input.includes("address"))
        return knowledge.location;
    if (input.includes("hostel"))
        return knowledge.hostel;
    if (input.includes("contact") || input.includes("phone") || input.includes("email") || input.includes("mobile"))
        return knowledge.contact;
    if (input.includes("course") || input.includes("stream") || input.includes("subject"))
        return knowledge.courses;
    if (input.includes("facilit"))
        return knowledge.facilities;
    if (input.includes("cbse") || input.includes("board"))
        return knowledge.cbse;
    if (input.includes("hello") || input.includes("hi"))
        return knowledge.greeting;
    if (input.includes("princi"))
        return knowledge.princi;
    return knowledge.default;
}

function sendMessage() {
    const inputField = document.getElementById("input");
    const text = inputField.value;
    if (text === "") return;
    addMessage(text, "user");
    const response = getResponse(text);
    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);
    inputField.value = "";
}

document.getElementById("send").onclick = sendMessage;
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter")
        sendMessage();
});

window.onload = function() {
    addMessage(knowledge.greeting, "bot");
    document.getElementById("input").focus();
};