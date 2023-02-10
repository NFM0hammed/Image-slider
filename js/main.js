// Get info
let boxImgs    = document.querySelector(".imgs"),
    allImgs    = document.querySelectorAll(".imgs img"),
    leftBtn    = document.querySelector(".left"),
    rightBtn   = document.querySelector(".right")

/*
    Size of scroll
    All images have the same scroll width, choose any image.
*/
let scroll_width = allImgs[0].scrollWidth;

// Length of images
let lengthImages = allImgs.length;

// Count for images start by zero
let count = 0;

// Create ul element
let ul = document.createElement("ul");

// Loop to create li elements [dynamic]
for(let i = 0; i < lengthImages; i++) {

    // Create li element
    let li = document.createElement("li");

    // Add each li element on the ul element
    ul.appendChild(li);

}
// Add bullets on DOM
document.querySelector(".bullets").appendChild(ul);

// Default active class to the first bullet
ul.firstChild.className = "active";

// Get bullets info from DOM
let allBullets = document.querySelectorAll(".bullets ul li");

// Scroll to right
function rightClick() {
    // Return false if the count is equal length of images [Last image] and still clicking right
    if(count === lengthImages - 1) return false;

    stopButton();

    // Scroll horizental by width of images [Plus(+) => Right]
    boxImgs.scrollBy(scroll_width, 0);

    // Remove active class from images and bullets before increament [Current images, bullets]
    allImgs[count].classList.remove("active");
    allBullets[count].classList.remove("active");

    // Increament count
    count++;

    // Add active class to images and bullets after increament [Current images, bullets]
    allImgs[count].classList.add("active");
    allBullets[count].classList.add("active");
    
    checker();

    resumptionButton();
}

// Scroll to left
function leftClick() {
    // Return false if the count is equal zero [first image] and still clicking left
    if(count === 0) return false;

    stopButton();

    // Scroll horizental by width of images [Minus(-) => Left]
    boxImgs.scrollBy(-(scroll_width), 0);

    // Remove active class from images and bullets before dcreament [Current images, bullets]
    allImgs[count].classList.remove("active");
    allBullets[count].classList.remove("active");

    // Dcreament count
    count--;

    // Add active class to images and bullets after dcreament [Current images, bullets]
    allImgs[count].classList.add("active");
    allBullets[count].classList.add("active");

    checker();

    resumptionButton();
}

// Disabled buttons
function stopButton() {
    rightBtn.disabled = true;
    leftBtn.disabled = true;
}

// Undisabled buttons
function resumptionButton() {
    setTimeout(() => {
        rightBtn.disabled = false;
        leftBtn.disabled = false;
    }, 1000);
}

// To add or remove active class on buttons
function checker() {
    // That means it reached to the last image
    if(count === lengthImages - 1) {
        rightBtn.classList.add("active");
    } else {
        rightBtn.classList.remove("active");
    }

    // That means it reached to the first image
    if(count === 0) {
        leftBtn.classList.add("active");
    } else {
        leftBtn.classList.remove("active");
    }
}

// Right click function for scroll images to right
rightBtn.onclick = rightClick;

// Left click function for scroll images to left
leftBtn.onclick = leftClick;