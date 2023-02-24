const text = document.querySelectorAll('.text');
const hiddenText = document.querySelectorAll('.hidden_text');
const arrow = document.querySelectorAll('.arrow');


// console.log(arrow);

text.forEach((tag) => {
    tag.addEventListener("click", arrowFun);
    tag.addEventListener("click", visibleFun);
    tag.addEventListener("click", boldFun);

});

function visibleFun(event) {
    let activeTip = document.querySelector('.active_tip')

    event.target.parentNode.nextElementSibling.classList.add('active_tip')
    activeTip.classList.remove('active_tip');

}

function arrowFun(event) {
    let active = document.querySelector('.active');

    event.target.nextElementSibling.classList.add('active');
    active.classList.remove('active');
}

function boldFun(event) {
    let bold = document.querySelector('.active_text');

    event.target.classList.add('active_text')
    bold.classList.remove('active_text');
}