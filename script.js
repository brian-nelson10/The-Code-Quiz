var startbtn = document.querySelector(".startbtn button");
var rulebox = document.querySelector(".rulebox");
var quizbox = document.querySelector(".quizbox")
var startbtn2 = document.querySelector(".startbtn2 button")
var result_box = document.querySelector(".result_box");
var option_list = document.querySelector(".option_list");
var timeText = document.querySelector(".timer .timeleft");
var timeCount = document.querySelector(".timer .timerlive");
var scorebox = document.querySelector(".scorebox");

//enter quiz button
startbtn.onclick = ()=>{
    rulebox.classList.add("activeInfo");
    document.getElementById("startbtn1").remove();
}

//start quiz button
startbtn2.onclick = ()=>{
    document.getElementById("ruleboxx").remove();
    quizbox.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
    startTimer(500); 

}

let timeValue = 500;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let widthValue = 0;


var next_btn = document.querySelector("footer .next_btn");
var bottom_ques_counter = document.querySelector("footer .total_que");


// if Next Question button is clicked
next_btn.onclick = ()=>{

    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        next_btn.classList.remove("show"); 

    }else {
        clearInterval(counter);
        showResult(); 
    }
}

// getting questions and options from array
function showQuetions(index){
    var que_text = document.querySelector(".questiontext");

        //creating a new span and div tag for question and option
        let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

        que_text.innerHTML = que_tag; 
        option_list.innerHTML = option_tag; 
        
        var option = option_list.querySelectorAll(".option");
    
        // set onclick attribute to all options
        for(i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
        
    }

//array passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "A Syntax Error is?",
    answer: "An error caused by language rules being broken.",
    options: [
      "An error you will never find",
      "An error you find at the end when the program gives out a wrong value",
      "An error caused by language rules being broken.",
      "An error due to user error"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What should values always be enclosed in?",
    answer: "Quotation Marks",
    options: [
      "Commas",
      "Curly Braces",
      "Parenthesis",
      "Quotation Marks"
    ]
  },
    {
    numb: 4,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Total Message Language",
      "Hyper Text Markup Language",
      "How To Make Lasagna",
      "Hipster Text Markup Language"
    ]
  },
    {
    numb: 5,
    question: "What is BootStrap?",
    answer: "A CSS Framework",
    options: [
      "An Html Shortcut",
      "A CSS Framework",
      "Another Language",
      "A western style shoe accessory"
    ]
  },
];

    //if user clicked on option
function optionSelected(answer){

    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    var allOptions = option_list.children.length; 
    var sec =0; 
    
    if(userAns == correcAns){ 

        userScore += 1; 
        answer.classList.add("correct"); 

    }else{

        answer.classList.add("incorrect"); 
        document.getElementsByClassName("incorrect"); {
          sec -= 10;
          document.getElementById("livetime").innerHTML= sec;
        }
        
        for(i=0; i < allOptions; i++){

            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
            }
        }
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disable all options
    }

    next_btn.classList.add("show"); //show the next button if user selected any option
}

var submitbtn = document.querySelector(".submit .submitbtn");
 var highScore = localStorage.getItem("highscore");
 if (highScore === null) {
   highScore = 0;
 }

function showResult(){
    quizbox.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    var congratsText = result_box.querySelector(".congrats");
    var nameText = result_box.querySelector(".nametext");
    var formText = result_box.querySelector(".nameform");

    if (userScore > highScore, userScore === 5)
    { 
       
        let congratsTag = '<span> Congratulations! You got a HIGH SCORE!! </span>';
        let nameTag = '<span>Please Enter Name Below</span>';
        let formTag = '<form onsubmit="return addUser()"><label for="name">Enter Name</label><input type="text" placeholder="Enter Name" id="name"/></form>'
        congratsText.innerHTML = congratsTag;  
        nameText.innerHTML = nameTag;
        formText.innerHTML = formTag;

        localStorage.setItem("highscore", userScore);
        
    }      
  }

//if submit button is clicked
submitbtn.onclick = ()=>{
    scoreBox();
}

function scoreBox(){
    result_box.classList.remove("activeResult");
    scorebox.classList.add("activeScore");
    var highText = scorebox.querySelector(".ul");
    let userName = document.getElementById("name").value;
    let highTag = '<li>'+ userName +'</li>';
    highText.innerHTML = highTag;
    document.getElementById('name').innerHTML=userName;
    localStorage.setItem("name", userName);
    localStorage.getItem("name", userName);

  }


 var restartquiz = scorebox.querySelector(".buttons .restart");

 // if restart button is clicked
 restartquiz.onclick = ()=>{
     quizbox.classList.add("activeQuiz"); 
     scorebox.classList.remove("activeScore"); 
     timeValue = 500; 
     que_count = 0;
     que_numb = 1;
     userScore = 0;
     widthValue = 0;
     showQuetions(que_count); 
     queCounter(que_numb); 
     startTimer(timeValue); 
     next_btn.classList.remove("show");
 }
 


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        }
        //if timer is less than 0
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Over"; 
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }

function queCounter(index){

    //create a new span tag and passing the question number and total question

    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}



