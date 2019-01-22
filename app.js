let x = document.getElementById("sec1").childElementCount;
let y = document.getElementById("sec2").childElementCount;

const cards = document.querySelectorAll('.card');

let a = [];
for (let i = 0; i < x; i++) {
    a.push(i);
}

let b = [];
for (i = 0; i < y; i++) {
    b.push(i);
}

function shfl(array) {
    for (let g = array.length - 1; g > 0; g--) {
        const j = Math.floor(Math.random() *(g + 1));
        [array[g], array[j]] = [array[j], array[g]];
    }
}
shfl(a);
shfl(b);

let items = a.concat(b);


let all = document.getElementsByTagName("div");

for (let d = 0, max=all.length; d < max; d++) {
    all[d].setAttribute("id", items[d]);
}

let first = null;
let second = null;

function pick() {

    if (this === first) return;
    
    if (first === null) {
        this.innerHTML = this.id;
        first = this;
    } else if (second === null) {
        this.innerHTML = this.id;
        second = this;
        check();
    }
}

function check() {
    if (first.id === second.id) {
        deletePicks();
        return;
    }

    setTimeout(unflip, 500);
}

function unflip() {
    first.innerHTML = " ";
    second.innerHTML = " ";
    resetFirstSecond();
}


function deletePicks() {
    first.classList.add('disabled');
    first.removeEventListener('click', pick);
    second.classList.add('disabled');
    second.removeEventListener('click', pick);
    resetFirstSecond();
}

function resetFirstSecond() {
    first = null;
    second = null;
}


for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", pick);
}

// const displayCard = function() {
//     //let e = document.getElementById(this);
//     this.innerHTML = this.id;
//     count++;
//     // console.log(this.id);
// }

// const hideCard = function() {
//     this.innerHTML = "";
// }