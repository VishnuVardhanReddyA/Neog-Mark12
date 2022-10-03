const quizForm=document.querySelector('.quiz-form')
const submitAnswerBtn=document.querySelector('.quiz-check')
const output=document.querySelector('.output')

const correctAnswers=[  "90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°"]

submitAnswerBtn.addEventListener('click',()=>{
    var score=0
    var i=0
    const formResults=new FormData(quizForm)
    for(let value of formResults.values()){
        if(value===correctAnswers[i]){
            score+=1
        }
        i+=1
    }
    output.innerText='Your score is '+score
})