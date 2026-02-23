import { updateMap } from "./map.js";
import {
    serviceBtnDonor,
    serviceBtnRequest,
    serviceBtnCenter,
    serviceBtnCamp,
    serviceBtnProfile,
    serviceBtnLearn
} from "./data.js";
import { showPage } from "./navigation.js";

export function renderIndex() {

    // Search for blood bank in home page 
    const searchBtn = document.querySelector(".search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", updateMap);
    }

    // Become a Donor button
    if (serviceBtnDonor) {
        serviceBtnDonor.addEventListener("click", () => {
            showPage('register');
        });
    }

    // Request Blood button
    if (serviceBtnRequest) {
        serviceBtnRequest.addEventListener("click", () => {
            showPage('register');
        });
    }

    // Find Blood Centers button
    if (serviceBtnCenter) {
        serviceBtnCenter.addEventListener('click', () => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                // If contact section not found, show home and then scroll
                showPage('home');
                setTimeout(() => {
                    document.querySelector("#contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 100);
            }
        });
    }

    // Organize Camp button
    if (serviceBtnCamp) {
        serviceBtnCamp.addEventListener("click", () => {
            showPage('register'); // Or navigate to organize camp page
        });
    }

    // View Profile button
    if (serviceBtnProfile) {
        serviceBtnProfile.addEventListener("click", () => {
            showPage("login");
        });
    }

    // Learn More button
    if (serviceBtnLearn) {
        serviceBtnLearn.addEventListener("click", (e) => {
            // The anchor link already has href, so we don't need to do anything
            // But if you want to track analytics or add logic, you can do it here
            console.log("Learn more clicked");
        });
    }

    // Also fix the navigation links in header
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href === '#home') {
                showPage('home');
            } else if (href === '#about') {
                showPage('home');
                setTimeout(() => {
                    document.querySelector('#about')?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 100);
            } else if (href === '#services') {
                showPage('home');
                setTimeout(() => {
                    document.querySelector('#services')?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 100);
            } else if (href === '#contact') {
                showPage('home');
                setTimeout(() => {
                    document.querySelector('#contact')?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 100);
            }
        });
    });
}