import {
    burgerTL
} from "./burgerAnimation";
// import {menuAnimation} from "./mobileMenu.js"

// import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");


burgerButton.addEventListener("click", () => {


    burgerTL.play();



    if (canISeeMenu === false) {
        
        burgerTL.play();
        // menuAnimation.play();
        canISeeMenu = true;
    } else {
        
        burgerTL.reverse();
        // menuAnimation.reverse();
        canISeeMenu = true;
    }


});





burgerButton.addEventListener("click", openCloseMenu);
let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

window.addEventListener('load', function(){



// //listen to window resize
window.addEventListener("resize", displayWindowSize);

// //check the window size on load
window.addEventListener('load', displayWindowSize); 