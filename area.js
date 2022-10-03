const sidelengths=document.querySelectorAll('.sidelengths')
const calculateAreaBtn=document.querySelector('.find-area')
const outputEl=document.querySelector('.output')

calculateAreaBtn.addEventListener('click',()=>{
    var a=Number(sidelengths[0].value)
    var b=Number(sidelengths[1].value)
    var c=Number(sidelengths[2].value)
    if(a && b&& c){
        var s=(a+b+c)/2
        var area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
        outputEl.innerText='Area of the triangle is: '+area
    }
    else{
        outputEl.innerText='Enter lengths of all sides'
    }

})