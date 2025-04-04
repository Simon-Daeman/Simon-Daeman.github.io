/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-2

    Author: Simon Still
    Date: 3/16/2025

    Filename: project01-02.js
*/
document.addEventListener("DOMContentLoaded", function () {

    const plans = [
        { name: "Basic", speed: "50 Mbsp" },
        { name: "Express", speed: "100 Mbsp" },
        { name: "Extreme", speed: "500 Mbsp" },
        { name: "Ultimate", speed: "1 Gig" }
    ];

    for (let i = 0; i < plans.length; i++) {
        document.getElementById(`service${i + 1}Name`).textContent = plans[i].name;
        document.getElementById(`service${i + 1}Speed`).textContent = plans[i].speed;
    }
});
//define variables for service name and service speed
