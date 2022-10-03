const inputs=document.querySelectorAll('.sidelengths')
const hypBtn=document.querySelector('.hypotenuse')
const output=document.querySelector('.output')

hypBtn.addEventListener('click',()=>{
    var sumOfSquares=0
    var a=Number(inputs[0].value)
    var b=Number(inputs[1].value)
    if(a &&b){
        for(let i=0;i<inputs.length;i++){
            var sidelength=Number(inputs[i].value)
            sumOfSquares+=(sidelength*sidelength)
        }
        var hypotenuse=Math.sqrt(sumOfSquares)
        output.innerText='Hypotenuse is '+hypotenuse
    }
    else{
        output.innerText='Enter Both values'
    }
})