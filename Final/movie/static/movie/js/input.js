const changeBtn = document.getElementById("changeBtn");
const viewText = document.getElementById("changes-saved");
let nameUser = document.getElementById("name-of-user");
let nickname = document.getElementById("Nickname");
let email = document.getElementById("email");

function showChanges() {
    changeBtn.onclick = () => {
        viewText.style.color = "#093";
        nameUser.innerHTML = nickname.value;
    }
}

let phoneContainer = document.getElementById("main-container-phone-number");
let logOff = document.getElementById("out-icon");
let notRobotIcon = document.getElementById("change-icon-empty");
let accesNotRobotIcon = document.getElementById("change-icon-acces");
let accesPhone = document.getElementById("futher-system");
let inputPhone = document.getElementById("Phone_inpt");
let inputValueOfPhone = document.getElementById("Phone-diff");

function showPhone () {
    notRobotIcon.onclick = () => {
        notRobotIcon.style.display = "none";
        accesNotRobotIcon.style.display = "block";
    }
    logOff.onclick = () => {
        phoneContainer.style.display = "none";
    }
    accesPhone.onclick = () => {
        phoneContainer.style.display = "none";
        inputPhone.setAttribute('value', inputValueOfPhone.value);
    }
    inputPhone.onclick = () => {
        phoneContainer.style.display = "block";
    }
}