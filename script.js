const Question =[
    {
        question:"Q: Which HTML tag is used to define a large heading",
        answers:[
            {text:"A) < h6>",correct:false},
            {text:"B) < h1>",correct:true},
            {text:"C) < p>",correct:false},
            {text:"D) < header>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to create a form?",
        answers:[
            {text:"A) < form>",correct:true},
            {text:"B) < input>",correct:false},
            {text:"C) < button>",correct:false},
            {text:"D) < select>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to define a line break ?",
        answers:[
            {text:"A) < br>",correct:true},
            {text:"B) < hr>",correct:false},
            {text:"C) < header>",correct:false},
            {text:"D) < footer>",correct:false},
        ]
    },
    {
        question:"Q: Which attribute in the < img> tag is used to provide a text alternative for the image?",
        answers:[
            {text:"A) src",correct:false},
            {text:"B) alt",correct:true},
            {text:"C) href",correct:false},
            {text:"D) id",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to create a dropdown list?",
        answers:[
            {text:"A) < datalist>",correct:false},
            {text:"B) < select>",correct:true},
            {text:"C) < option>",correct:false},
            {text:"D) < list>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to create a hyperlink that links one page to another?",
        answers:[
            {text:"A) < a>",correct:true},
            {text:"B) < link>",correct:false},
            {text:"C) < nav>",correct:false},
            {text:"D) < url>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML entity represents the non-breaking space?",
        answers:[
            {text:"A) & nbsp ;",correct:true},
            {text:"B) & copy;",correct:false},
            {text:"C) & reg;",correct:false},
            {text:"D) & trade;",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to create a table header?",
        answers:[
            {text:"A) < table>",correct:false},
            {text:"B) < tr>",correct:false},
            {text:"C) < td>",correct:false},
            {text:"D) < th>",correct:true},
        ]
    },
    {
        question:"Q: Which HTML tag is used to create an unordered list?",
        answers:[
            {text:"A) < ul>",correct:true},
            {text:"B) < ol>",correct:false},
            {text:"C) < li>",correct:false},
            {text:"D) < dl>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML tag is used to define a large heading?",
        answers:[
            {text:"A) < h6>",correct:false},
            {text:"B) < h1>",correct:true},
            {text:"C) < p>",correct:false},
            {text:"D) < header>",correct:false},
        ]
    },
    {
        question:"Q: Which HTML attribute specifies the HTTP method used to send form-data?",
        answers:[
            {text:"A) action",correct:false},
            {text:"B) method",correct:true},
            {text:"C) enctype",correct:false},
            {text:"D) novalidate",correct:false},
        ]
    },
    {
        question:'Q: Consider the following HTML code:< img src="mypic.jpg">'+
        ' Which attribute should be added to provide alternative text for the image?',
        answers:[
            {text:"A) alt",correct:true},
            {text:"B) title",correct:false},
            {text:"C) name",correct:false},
            {text:"D) description",correct:false},
        ]
    },
    
];
const question = document.getElementById("Question");
const answers = document.getElementById("answers");
const nextQuiz = document.getElementById("nextQuiz");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextQuiz.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion = Question[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1; 
    question.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}
function  resetstate(){
    nextQuiz.style.display = " none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answers.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextQuiz.style.display = "block";
}
nextQuiz.addEventListener("click",()=>{
    if(currentQuestionIndex < Question.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < Question.length){
        showQuestion();
    }else{
        showScore();
    
    }
}
function showScore(){
    resetstate();
    question.innerHTML = 'your Score '+score+' Out of '+Question.length+'!';
    nextQuiz.innerHTML = " PLAY AGIAN";
    nextQuiz.style.display ="";

}
startQuiz();
