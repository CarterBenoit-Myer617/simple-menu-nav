import {burgerTL} from "./burgerAnimation.js";
// import {menuAnimation} from "./mobileMenu.js"

// import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");

burgerButton.addEventListener("click", () => {
    console.log("burger");
    burgerTL.play();

});





// burgerButton.addEventListener("click", (openCloseMenu) => {
            
//     burger.play();

//             // let navButtons = document.querySelectorAll(".nav-btns");

//             // for (const button of navButtons) {
//             //     // button.addEventListener("click", checkScrolling);
//             //     // button.addEventListener("click", openCloseMenu);

//             // }


//             // window.addEventListener('load', function () {

//             //     // //listen to window resize
//             //     window.addEventListener("resize", displayWindowSize);

//             //     //check the window size on load
//             //     window.addEventListener('load');

//             // });


// });