var startbtn = document.querySelector(".startbtn button");
var rulebox = document.querySelector(".rulebox");
var quizbox = document.querySelector(".quizbox")
var startbtn2 = document.querySelector(".startbtn2 button")

//enter quiz button
startbtn.onclick = ()=>{
    rulebox.classList.add("activeInfo");
    document.getElementById("startbtn1").remove();
}

//start quiz button
startbtn2.onclick = ()=>{
    document.getElementById("ruleboxx").remove();
    quizbox.classList.add("activeQuiz");
}
