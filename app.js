let mainSection = document.querySelector(".main");
let secondSection = document.querySelector(".thanks");
let submitBtn = document.querySelector(".submit");
let allLis = document.querySelectorAll("ul li");
let rate = document.querySelector(".rate");

submitBtn.addEventListener("click", function () {
    mainSection.style.display = "none";
    secondSection.style.display = "block";
});

// When click add background Color
allLis.forEach(function (ele) {
    ele.addEventListener("click", function () {
        // remove background Color From All Elements
        allLis.forEach(function (ele) {
            ele.style.backgroundColor = "hsl(213deg 18% 21%)"
        });
        // add background Color to Element
        this.style.backgroundColor = "hsl(217, 12%, 63%)";
        this.style.color = "white";

        rate.innerHTML = this.innerHTML;
    })
})