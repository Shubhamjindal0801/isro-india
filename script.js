"use strict";

function imgSlider(anything,title) {
    document.querySelector(".rocket").src = anything;
    document.querySelector(".rocket-title").innerHTML = title
}

function menuToggle() {
    const toggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");

    toggle.classList.toggle("active");
    navigation.classList.toggle("nav-active");
}