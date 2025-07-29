let text = document.getElementById("p-div")

let pics = document.getElementById("img-div")

let blank = document.getElementById("nothing-div")

let pCounter = 0;
let imgCounter = 0;
let nothingCounter = 0;


let pCount = document.getElementById("p-count")
function increasePCount() {
    pCounter++;
    pCount.innerHTML = "p-Counter: " + pCounter;
}

let imgCount = document.getElementById("img-count")
function increaseImgCount() {
    imgCounter++;
    imgCount.innerHTML = "img-Counter: " + imgCounter;

}

let nothingCount = document.getElementById("nothing-count")
function increaseNothingCount() {
    nothingCounter++;
    nothingCount.innerHTML = "nothing-Counter: " + nothingCounter;
}


let pButton = document.getElementById("p-button")
pButton.onclick = function() {
    let newMessage = document.createElement("p");
    newMessage.innerHTML = "July is almost over!"

    pics.style.display = "none";
    text.style.display = "block";
    blank.style.display = "none";

    text.appendChild(newMessage)
    increasePCount();
}


let imgButton = document.getElementById("img-button")
imgButton.onclick = function() {
    let newImage = document.createElement("img");
    newImage.src = "Minicat_Fire_Variant.png";

    text.style.display = "none";
    pics.style.display = "block";
    blank.style.display = "none";

    pics.appendChild(newImage) 
    increaseImgCount();
}

let nothingButton = document.getElementById("nothing-button")
nothingButton.onclick = function() {
    
    text.style.display = "none";
    pics.style.display = "none";
    blank.style.display = "block";



    increaseNothingCount()
}