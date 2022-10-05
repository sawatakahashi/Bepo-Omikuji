
let button = document.getElementById('button');
button.addEventListener('click', ()=>{
    const n = Math.random();
    if (n < 0.05){
        button.textContent="Great day!";
    }else if (n < 0.4){
        button.textContent="Okey Day";
    }else{
        button.textContent="BAAAD DAY";
    }

});

let snowContainer = document.querySelector(".container");

const createSnow = () => {
    let snow = document.createElement("span");
    snow.className = "snow";

    minSize = 5;
    maxSize = 10;

    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    snow.style.left = Math.random() * 100 + "%";
    snowContainer.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 10000);
};

setInterval(createSnow, 100);