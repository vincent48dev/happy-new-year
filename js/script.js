function play(){
const audio = document.getElementById("audio");

audio.play();
}






function step1(){
    play();
    var step1 = document.getElementById("step1");
    var step1paragraphe = document.getElementById("step1paragraphe")
    var step1title = document.getElementById("step1title")

    step1.style.opacity = 1
    step1title.style.opacity = 1
    step1paragraphe.style.opacity = 1
    step1paragraphe.style.bottom = 0
    step1title.style.top = 0

    setTimeout(() => {    
        step1paragraphe.style.bottom = "-80px"
        step1title.style.top = "-50px"
    }, "5000");
    setTimeout(() => {  
        step1title.style.opacity = 0
        step1paragraphe.style.opacity = 0
        step1.style.opacity = 0
    }, "6000");
    setTimeout(()=>{
        step2()
    }, "5000");
    
}

function step2(){
    var step2 = document.getElementById("step2");
    var step2title = document.getElementById("step2title")
    var step2paragraphe = document.getElementById("step2paragraphe")

    step2.style.opacity = 1
    step2title.style.opacity = 1
    step2paragraphe.style.opacity = 1
    step2paragraphe.style.bottom = 0
    step2title.style.top = 0

    setTimeout(() => {    
        step2paragraphe.style.bottom = "-80px"
        step2title.style.top = "-50px"
    }, "5000");
    setTimeout(() => {  
        step2title.style.opacity = 0
        step2paragraphe.style.opacity = 0
        step2.style.opacity = 0
    }, "6000");
    setTimeout(()=>{
        step3()
    }, "5500");

    
}

function step3(){
    
    var step3 = document.getElementById("step3");
    var step3title = document.getElementById("step3title")
    var step3paragraphe = document.getElementById("step3paragraphe")

    step3.style.opacity = 1
    step3title.style.opacity = 1
    step3paragraphe.style.opacity = 1
    step3paragraphe.style.bottom = 0
    step3title.style.top = 0

    setTimeout(() => {    
        step3paragraphe.style.bottom = "-80px"
        step3title.style.top = "-50px"
    }, "5000");
    setTimeout(() => {  
        step3title.style.opacity = 0
        step3paragraphe.style.opacity = 0
        step3.style.opacity = 0
    }, "6000");
    setTimeout(()=>{
        step4()
    }, "5500");
   
     }

function step4(){
    
    var step4 = document.getElementById("step4");
    var step4title = document.getElementById("step4title")
    var step4paragraphe = document.getElementById("step4paragraphe")

    step4.style.opacity = 1
    step4title.style.opacity = 1
    step4paragraphe.style.opacity = 1
    step4paragraphe.style.bottom = 0
    step4title.style.top = 0

    setTimeout(() => {    
        step4paragraphe.style.bottom = "-80px"
        step4title.style.top = "-50px"
    }, "5000");
    setTimeout(() => {  
        step4title.style.opacity = 0
        step4paragraphe.style.opacity = 0
        step4.style.opacity = 0
    }, "6000");

    setTimeout(()=>{
        step5()
    }, "5500");
   
}

function step5(){
    
    var step5 = document.getElementById("step5");
    var step5title = document.getElementById("step5title")
    var step5paragraphe = document.getElementById("step5paragraphe")

    step5.style.opacity = 1
    step5title.style.opacity = 1
    step5paragraphe.style.opacity = 1
    step5paragraphe.style.bottom = 0
    step5title.style.top = 0

    setTimeout(() => {    
        step5paragraphe.style.bottom = "-80px"
        step5title.style.top = "-50px"
    }, "5000");
    setTimeout(() => {  
        step5title.style.opacity = 0
        step5paragraphe.style.opacity = 0
        step5.style.opacity = 0
    }, "6000");
}

