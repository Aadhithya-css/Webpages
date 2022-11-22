const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');



function display(event){
    
    for(i = 0;i < answers.length;i++){
        
        if(arrows[i] != event.target){
            answers[i].classList.remove('opacity');
            answers[i].parentNode.childNodes[1].classList.remove('font-weight');
            arrows[i].classList.remove('transition');
            answers[i].parentNode.classList.remove('max-height');
        }
    }

    event.target.parentNode.childNodes[5].classList.toggle('opacity');
    event.target.parentNode.childNodes[1].classList.toggle('font-weight');
    event.target.parentNode.childNodes[3].classList.toggle('transition');
    event.target.parentNode.classList.toggle('max-height');
}


for(i = 0;i < arrows.length;i++){
    arrows[i].addEventListener("click", display);
}
