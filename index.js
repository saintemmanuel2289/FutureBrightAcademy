let welcomeButton = document.getElementById("welcomeButton");
let homeMessage = document.getElementById("homeMessage");

welcomeButton.addEventListener("click", function(){
    let name = prompt("Please enter your name");
    if (name === null || name.trim() === ""){
    homeMessage.textContent = "Please enter your name";
    homeMessage.style.color = "red";
    }else{
        homeMessage.textContent = name + ", welcome to Bright Future Academy where we build knowledge and inspire excellence!";
        homeMessage.style.color = "green";
        homeMessage.style.fontWeight = "bold";
        homeMessage.style.fontSize = "20px";
    }
});

let aboutButton = document.getElementById("aboutButton");
let aboutMessage = document.getElementById("aboutMessage");

aboutButton.addEventListener("dblclick", function(){
    aboutMessage.textContent = "At Bright Future Academy, we believe every child has the potential to achieve greatness through quality education and proper guidance. Our school provides a supportive learning environment where students develop critical thinking, creativity, discipline, and problem-solving skills. We are committed to nurturing future leaders by combining academic excellence with good moral values and responsible citizenship. Our dedicated teachers use effective teaching methods to help students understand their subjects and reach their full academic potential. We encourage students to participate in extracurricular activities that promote teamwork, leadership, confidence, and personal development. At Bright Future Academy, we work closely with parents and guardians to ensure that every student receives the support needed to succeed.";
    aboutMessage.style.color = "tomato";
    aboutMessage.style.fontWeight = "bold";
});

let courseButton = document.getElementById("courseButton");
let courseMessage = document.getElementById("courseMessage");

courseButton.addEventListener("click", function(){
    courseMessage.textContent = "Bright Future Academy offers Mathematics, English Language, Biology, Chemistry, Physics, Computer Science, and Further Mathematics. Our courses develop critical thinking, communication, scientific understanding, and problem-solving skills to prepare students for higher education and future careers. Mathematics: Develops logical reasoning, analytical thinking, and problem-solving skills. English Language: Improves communication, reading comprehension, writing, and speaking skills. Biology: Helps students understand living organisms, the human body, and the environment. Chemistry: Introduces students to substances, chemical reactions, and the composition of matter. Physics: Explores energy, motion, forces, electricity, and the physical world. Computer Science: Equips students with foundational knowledge of computers, programming, and digital technology. Further Mathematics: Strengthens advanced mathematical reasoning and prepares students for science, engineering, and technology-related fields.";
    courseMessage.style.color = "green";
    courseMessage.style.fontWeight = "bold";
});
