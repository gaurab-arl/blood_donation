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

    //  search for blood bank in home page 
    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", updateMap);

    serviceBtnDonor.addEventListener("click", () => {
        showPage("donor");
    });
    serviceBtnRequest.addEventListener("click", () => {
        showPage("register");
    });
    serviceBtnCenter.addEventListener('click', () => {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })

    serviceBtnCamp.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    serviceBtnProfile.addEventListener("click", () => {
        showPage("login");
    });

    serviceBtnLearn.addEventListener("click", () => {
        showPage("learn");
    });

}

