import Chart from "chart.js/auto";
const UsernameInput = document.querySelector("#UserNameInput");
const PasswordInput1 = document.querySelector("#PasswordInput1");
const PasswordInput2 = document.querySelector("#PasswordInput2");
const PasswordInput2Con = document.querySelector("#PasswordInput2Con");
const LoginButton = document.querySelector("#LoginButton");
const CreateAccountButtonINCon = document.querySelector("#CreateAccountINCon");
const CreateAccountButtonFinCon = document.querySelector(
  "#CreateAcoountFinCon"
);
const LogInINCon = document.querySelector("#LogInINCon");
const LogInFinCon = document.querySelector("#LoginButtonFinCon");
const CreateAccountButtonIN = document.querySelector("#CreateAccountIN");
const CreateAccountButtonFin = document.querySelector("#CreateAcoountFin");
const LogInIN = document.querySelector("#LogInIN");
const LogInFin = document.querySelector("#LoginButtonFin");
const WholeLogInContainer = document.querySelector("#LogInContainer");
const ErrorSuccesCon = document.querySelector("#ErorrSuccessMessageCon");
const ErrorSucces = document.querySelector("#ErorrSuccessMessage");
const LogInTitleCon = document.querySelector("#titleCon");
const dashboardCon = document.querySelector("#Dashboard");
const AccountDetails = document.querySelector("#AccountDetails");
const LineGraph = document.getElementById("LineGraph");
const DonghnutGraph1 = document.getElementById("DonghnutGraphS");
const DonghnutGraph2 = document.getElementById("DonghnutGraphB");
const DonghnutGraph3 = document.getElementById("DonghnutGraphD");
const AllDashBoardSelectorButtons = document.querySelectorAll(
  ".DashboardSelectorButtonUnSel, .DashboardSelectorButtonSel"
);
console.log(AllDashBoardSelectorButtons);
const AddPrsSelectorButton = document.querySelector(".AddPrButton");
const AddGoalsSelectorButton = document.querySelector(".AddGoalButton");
const AccountsSettingsSelectorButton = document.querySelector(
  ".AccountSettingsButton"
);
const AddPrContent = document.querySelector("#AddPrContent");
const UpdateGoalsContent = document.querySelector("#UpdateGoalsContent");
const AccountSettingsContent = document.querySelector(
  "#AccountSettingsContent"
);

//General//
function ClearingInputField(inputobject) {
  inputobject.value = "";
}
function hideEl(element) {
  element.setAttribute("hidden", true);
}
function revealEl(element) {
  element.removeAttribute("hidden", true);
}
function ChangeTextOfElement(newtext, element) {
  element.innerText = `${newtext}`;
}
//Change LogIN UI//
function InitiatingCreateAccountUI() {
  revealEl(PasswordInput2Con);
  hideEl(CreateAccountButtonINCon);
  revealEl(CreateAccountButtonFinCon);
  hideEl(LogInFinCon);
  revealEl(LogInINCon);
  hideEl(ErrorSuccesCon);
}
function InitiatingLogInUI() {
  hideEl(PasswordInput2Con);
  revealEl(CreateAccountButtonINCon);
  hideEl(CreateAccountButtonFinCon);
  revealEl(LogInFinCon);
  hideEl(LogInINCon);
  hideEl(ErrorSuccesCon);
}

// Accounts//

let loggedInAccountObject;
class Accounts {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
function clearAllAccounts() {
  localStorage.clear();
}
function setObject(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

function UpdatingAccount(key, property, value) {
  var obj = getObject(key);
  obj[property] = value;
  setObject(key, obj);
}

function createAccount() {
  if (PasswordInput1.value == PasswordInput2.value) {
    localStorage.setItem(
      UsernameInput.value,
      JSON.stringify(new Accounts(UsernameInput.value, PasswordInput1.value))
    );
    console.log(localStorage);
    ClearingInputField(UsernameInput);
    ClearingInputField(PasswordInput1);
    ClearingInputField(PasswordInput2);
    InitiatingLogInUI();
    revealEl(ErrorSuccesCon);
    ChangeTextOfElement("ACCOUNT CREATED", ErrorSucces);
  } else {
    ClearingInputField(UsernameInput);
    ClearingInputField(PasswordInput1);
    ClearingInputField(PasswordInput2);
    revealEl(ErrorSuccesCon);
    ChangeTextOfElement("PLEASE ENTER THE SAME PASSWORDS", ErrorSucces);
  }
}
function LoggingIn() {
  if (localStorage.getItem(UsernameInput.value)) {
    let LoggingInAccount = JSON.parse(
      localStorage.getItem(UsernameInput.value)
    );
    console.log(LoggingInAccount);
    if (PasswordInput1.value == LoggingInAccount.password) {
      loggedInAccountObject = LoggingInAccount;
      LoadingDashboard();
    } else {
      revealEl(ErrorSuccesCon);
      ChangeTextOfElement("WRONG PASSWORD", ErrorSucces);
    }
  } else {
    revealEl(ErrorSuccesCon);
    ChangeTextOfElement("ACCOUNT NOT FOUND", ErrorSucces);
  }
}
//Loading dashboardUI

function LoadingDashboard() {
  hideEl(WholeLogInContainer);
  hideEl(LogInTitleCon);
  revealEl(dashboardCon);
  AccountDetails.textContent = `${loggedInAccountObject.username}  ${loggedInAccountObject.password}`;
}
//DashboardUI

//Adding Pr's and Account Settings

function changingClickedButtonToSelected(button) {
  AllDashBoardSelectorButtons.forEach((element) => {
    if (element.classList.contains("DashboardSelectorButtonSel")) {
      element.classList.remove("DashboardSelectorButtonSel");
      element.classList.add("DashboardSelectorButtonUnSel");
    }
  });
  button.classList.toggle("DashboardSelectorButtonSel");
  button.classList.toggle("DashboardSelectorButtonUnSel");
}

function ChangingContainerContent(event) {
  if (
    event.target.classList.contains("DashboardSelectorButtonUnSel") &&
    event.target.classList.contains("AddPrButton")
  ) {
    changingClickedButtonToSelected(AddPrsSelectorButton);
    hideEl(AccountSettingsContent);
    hideEl(UpdateGoalsContent);
    revealEl(AddPrContent);
  }

  if (
    event.target.classList.contains("DashboardSelectorButtonUnSel") &&
    event.target.classList.contains("AddGoalButton")
  ) {
    changingClickedButtonToSelected(AddGoalsSelectorButton);
    hideEl(AccountSettingsContent);
    hideEl(AddPrContent);
    revealEl(UpdateGoalsContent);
  }
  if (
    event.target.classList.contains("DashboardSelectorButtonUnSel") &&
    event.target.classList.contains("AccountSettingsButton")
  ) {
    changingClickedButtonToSelected(AccountsSettingsSelectorButton);
    hideEl(UpdateGoalsContent);
    hideEl(AddPrContent);
    revealEl(AccountSettingsContent);
  }
}
///Graphs

new Chart(LineGraph, {
  type: "line",
  data: {
    labels: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    datasets: [
      {
        label: "Squat",
        backgroundColor: "black",
        data: [3, 15, 10],
        borderWidth: 1,
      },
      {
        label: "Bench",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "green",
        borderWidth: 1,
      },
      {
        label: "Deadlift",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "red",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
new Chart(DonghnutGraph1, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [180, 10],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
  },
});
new Chart(DonghnutGraph2, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [180, 10],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
  },
});
new Chart(DonghnutGraph3, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [180, 10],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
  },
});

const init = function () {
  CreateAccountButtonIN.addEventListener("click", InitiatingCreateAccountUI);
  LogInIN.addEventListener("click", InitiatingLogInUI);
  CreateAccountButtonFin.addEventListener("click", createAccount);
  LogInFin.addEventListener("click", LoggingIn);
  AllDashBoardSelectorButtons.forEach((element) =>
    element.addEventListener("click", ChangingContainerContent)
  );
};
init();
