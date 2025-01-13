'use strict';

const root = document.documentElement

function Dark() {
    root.style.setProperty("--my-text-col", "white")
    root.style.setProperty("--my-light-btn", "#c4b5a5")
    root.style.setProperty("--my-dark-btn", "#FB982F")
    root.style.setProperty("--my-body", "black")
}

function light() {
    root.style.setProperty("--my-text-col", "black")
    root.style.setProperty("--my-light-btn", "#FB982F")
    root.style.setProperty("--my-dark-btn", "black")
    root.style.setProperty("--my-body", "#c4b5a5")
}