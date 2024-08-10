//counter

$(document) .ready(function(){
    $('.counter h3').counterUp({
        delay:10,
        time:1200
    })
})


//select count-percentage

let count_percentage1 = document.getElementById("count-percentage1")
let counter1 = 0;

setInterval(() => {
    if (counter1 == 92){
    clearInterval();
    }
    else{
        counter1 += 1;
        count_percentage1.innerHTML = counter1 + "%";

    }
},25)

let count_percentage2 = document.getElementById("count-percentage2")
let counter2 = 0;

setInterval(() => {
    if (counter2 == 97){
    clearInterval();
    }
    else{
        counter2 += 1;
        count_percentage2.innerHTML = counter2 + "%";

    }
}, 20)

let count_percentage3 = document.getElementById("count-percentage3")
let counter3 = 0;

setInterval(() => {
    if (counter3 == 80){
    clearInterval();
    }
    else{
        counter3 += 1;
        count_percentage3.innerHTML = counter3 + "%";

    }
},20)


let count_percentage4 = document.getElementById("count-percentage4")
let counter4 = 0;

setInterval(() => {
    if (counter4 == 87){
    clearInterval();
    }
    else{
        counter4 += 1;
        count_percentage4.innerHTML = counter4 + "%";

    }
},20)

