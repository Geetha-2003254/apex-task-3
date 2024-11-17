
// Image Carousel  
const images = ["https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg", "https://content.jdmagicbox.com/v2/comp/chennai/k2/044pxx44.xx44.220309070653.x4k2/catalogue/apurva-sweets-and-bakery-chromepet-chennai-bakeries-1yoipn64b5.jpg", "https://luvflowercake.com/wp-content/uploads/2022/06/designer.jpg", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6edd0c8e-2286-4249-81f6-d006b814408d.__CR0,0,970,600_PT0_SX970_V1___.jpg", "https://i.pinimg.com/originals/20/a1/7c/20a17c920e097fdd04e2bacad1b0dc8e.jpg", "https://merakcakes.com/cdn/shop/files/78_51356252-e77a-474e-8d35-ecc8ac67e430_grande.jpg?v=1695980286"];  
let currentImage = 0;  
const carouselImage = document.getElementById('carousel-image');  

document.getElementById('next').onclick = function() {  
    currentImage = (currentImage + 1) % images.length;  
    carouselImage.src = images[currentImage];  
};  

document.getElementById('prev').onclick = function() {  
    currentImage = (currentImage - 1 + images.length) % images.length;  
    carouselImage.src = images[currentImage];  
};  

const startQuizButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz");
const submitAnswerButton = document.getElementById("submit-answer");
const resultDiv = document.getElementById("result");
const jokeButton = document.getElementById("display-joke");
const jokeDiv = document.getElementById("joke");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
    {
        question: "What is the main ingredient in a croissant?",
        answers: ["Flour", "Sugar", "Butter", "Eggs"],
        correctAnswer: 2
    },
    {
        question: "What is the Italian name for a profiterole filled with ice cream?",
        answers: ["Tiramisu", "Cannoli", "Gelato", "Profiterole"],
        correctAnswer: 3
    },
    {
        question: "Which fruit is commonly used in a Black Forest cake?",
        answers: ["Strawberry", "Cherry", "Blueberry", "Raspberry"],
        correctAnswer: 1
    }
];

startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultDiv.innerHTML = "";
    startQuizButton.style.display = "none";
    submitAnswerButton.style.display = "block";
    quizContainer.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        quizContainer.innerHTML = `<h2>${question.question}</h2>`;
        question.answers.forEach((answer, index) => {
            quizContainer.innerHTML += `<input type="radio" name="answer" value="${index}">${answer}<br>`;
        });
    } else {
        quizContainer.innerHTML = `<h2>Quiz Finished! Your score: ${'3'}/${quizQuestions.length}</h2>`;
        submitAnswerButton.style.display = "none";
    }
}

submitAnswerButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (parseInt(selectedAnswer.value) === quizQuestions[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("Please select an answer!");
    }
});

jokeButton.addEventListener("click", () => {
    const jokes = [
        "Why did the cookie go to the doctor? Because it felt crummy!",
        "What do you call a fake noodle? An impasta!",
        "Why did the cupcake go to school? Because it wanted to be a smartie!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDiv.innerHTML = randomJoke;
    jokeDiv.style.display = "block";
});




