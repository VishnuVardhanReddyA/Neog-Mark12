const input=document.querySelectorAll('.input-angles')
const check=document.querySelector('#check')
const output=document.querySelector('.output')

function calculateSumOfAngles(angles){
    var sum=0
    for(let i=0;i<angles.length;i++){
        sum+=Number(angles[i].value)
    }
    return sum
}

check.addEventListener('click',()=>{
    var anglesSum=calculateSumOfAngles(input)
    if(anglesSum===180){
        output.innerText='Yes, the angles forms a triangle'
    }
    else if(Number(input[0].value) && Number(input[1].value) && Number(input[2].value)){
        output.innerText='No, the angles do not form a triangle'
    }
    else{
        output.innerText='Enter all the fields'
    }
})