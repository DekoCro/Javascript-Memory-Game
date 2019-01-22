let x = document.getElementById("sec1").childElementCount;
let y = document.getElementById("sec2").childElementCount;


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
console.log(items);

let displayCard = function() {
    //let e = document.getElementById(this);
    this.innerHTML = this.id;
    console.log(this.id);
}



let card = document.getElementsByClassName("card");
let cards = [...card];

for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
}
