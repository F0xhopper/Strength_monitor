import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
Chart.register(annotationPlugin);

const UsernameInput = document.querySelector("#UserNameInput");
const PasswordInput1 = document.querySelector("#PasswordInput1");
const PasswordInput2 = document.querySelector("#PasswordInput2");
const PasswordInput2Con = document.querySelector("#PasswordInput2Con");
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
const GreetingsMessage = document.getElementById("GreetingsMessage");
const LogInTitleCon = document.querySelector("#titleCon");
const dashboardCon = document.querySelector("#Dashboard");

const LineGraph = document.getElementById("LineGraph");
const DonghnutGraph1 = document.getElementById("DonghnutGraphS");
const DonghnutGraph2 = document.getElementById("DonghnutGraphB");
const DonghnutGraph3 = document.getElementById("DonghnutGraphD");
const AllDashBoardSelectorButtons = document.querySelectorAll(
  ".DashboardSelectorButtonUnSel, .DashboardSelectorButtonSel"
);
const AllMainButtonSelectors = document.querySelectorAll(
  ".MainUnSelected, .MainSelected"
);
const CurrentTotal = document.querySelector("#CurrentTotal");
const CurrentSBD = document.querySelector("#CurrentSBD");

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
const MainButtonSelectBench = document.querySelector(".BenchButtonMain");
const MainButtonSelectSquat = document.querySelector(".SquatButtonMain");
const MainButtonSelectDeadlift = document.querySelector(".DeadliftButtonMain");
const AddPrDropdown = document.querySelector("#AddPrLiftSelector");

const AddPrWeight = document.querySelector("#AddPrAmountInput");

const AddPrDate = document.querySelector("#AddPrDateSelector");

const AddPrComment = document.querySelector("#AddPrCommentInput");
const AddPrSubmit = document.querySelector("#AddPrFinalSubmitButton");
const AddPrRepDropdown = document.querySelector("#AddPrRepSelecor");

const UpdateDropdown = document.querySelector("#UpdateGoalsLiftSelector");

const UpdateWeight = document.querySelector("#UpdateGoalsAmountInput");

const UpdateDate = document.querySelector("#UpdateGoalsDateSelector");

const UpdateComment = document.querySelector("#UpdateGoalsCommentInput");
const UpdateSubmit = document.querySelector("#UpdateGoalsFinalSubmitButton");
const LoggingOutButton = document.querySelector("#AccountSettingsLogOutButton");
const ChangingPassword = document.querySelector("#AccountSettingsPassInput");
const ChangingPasswordConfirm = document.querySelector(
  "#AccountSettingsPassInputConfirm"
);
const ChangingPasswordButton = document.querySelector(
  "#AccountSettingsChangePassword"
);
const ChangePasswordError = document.querySelector(
  "#AccountSettingsErrorMessage"
);
const DeleteAccountButton = document.querySelector(
  "#AccountSettingsDeleteAccountButton"
);
const NewAccountPopUp = document.querySelector("#NewAccountUpdatePopUp");
const NewAccountDateSqaut = document.querySelector(
  "#NewAccountDateSelectorSqaut"
);
const NewAccountDateBench = document.querySelector(
  "#NewAccountDateSelectorBench"
);

const NewAccountDateDeadlift = document.querySelector(
  "#NewAccountDateSelectorDeadlift"
);
const NewAccountAmountSqaut = document.querySelector(
  "#NewAccountAmountInputSqaut"
);
const NewAccountAmountBench = document.querySelector(
  "#NewAccountAmountInputBench"
);
const NewAccountAmountDeadlift = document.querySelector(
  "#NewAccountAmountInputDeadlift"
);
const NewAccountCommentSqaut = document.querySelector(
  "#NewAccountCommentInputSqaut"
);
const NewAccountCommentBench = document.querySelector(
  "#NewAccountCommentInputBench"
);
const NewAccountCommentDeadlift = document.querySelector(
  "#NewAccountCommentInputDeadlift"
);
const NewAccountFinalSubmitButton = document.querySelector(
  "#NewAccountFinalSubmitButton"
);

const NewAccountErrorMessage = document.querySelector(
  "#NewAccountErrorMessage"
);
const BlurBox = document.querySelector("#BlurBox");
const tabledata = document.querySelector("#tabledata");

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
let arrayofaccountobjects = [];
let loggedInAccountObject;
class Accounts {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.Squat = {
      Lifts: [],
      goal: {
        weight: undefined,
        date: undefined,
        comment: undefined,
      },
    };
    this.Bench = {
      Lifts: [],
      goal: {
        weight: undefined,
        date: undefined,
        comment: undefined,
      },
    };
    this.Deadlift = {
      Lifts: [],
      goal: {
        weight: undefined,
        date: undefined,
        comment: undefined,
      },
    };
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

function UpdatingLoggedInAccountValuesToLocalStorage() {
  localStorage.setItem(
    loggedInAccountObject.username,
    JSON.stringify(loggedInAccountObject)
  );
}

function createAccount() {
  if (PasswordInput1.value == PasswordInput2.value) {
    localStorage.setItem(
      UsernameInput.value,
      JSON.stringify(new Accounts(UsernameInput.value, PasswordInput1.value))
    );

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
function DeletingAccount() {
  localStorage.removeItem(loggedInAccountObject.username);
}
function SortingLiftsByDateInLoggedInObject() {
  loggedInAccountObject.Squat.Lifts.sort(
    (a, b) => new Date(a.Date) - new Date(b.Date)
  );
  loggedInAccountObject.Bench.Lifts.sort(
    (a, b) => new Date(a.Date) - new Date(b.Date)
  );
  loggedInAccountObject.Deadlift.Lifts.sort(
    (a, b) => new Date(a.Date) - new Date(b.Date)
  );
}

function UpdatingArrayOfAllAccountObjects() {
  let arrayofkeys = Object.keys(localStorage);
  arrayofkeys.forEach((key) => {
    if (key !== "debug") {
      arrayofaccountobjects.push(JSON.parse(localStorage.getItem(key)));
    }
  });
  console.log(arrayofaccountobjects);
}
function ChangingPasswwordLoggedIn() {
  if (ChangingPassword.value == ChangingPasswordConfirm.value) {
    loggedInAccountObject.password = ChangingPassword;
    ClearingInputField(ChangingPassword);
    ClearingInputField(ChangingPasswordConfirm);
    hideEl(ChangePasswordError);
  } else {
    revealEl(ChangePasswordError);
  }
}

//Loading On Log In dashboardUI / Logging Out UI
function MakeUpdateAccountPopUpIfEmpty() {
  NewAccountDateSqaut.value = "";
  NewAccountDateBench.value = "";
  NewAccountDateDeadlift.value = "";
  NewAccountAmountSqaut.value = "";
  NewAccountAmountBench.value = "";
  NewAccountAmountDeadlift.value = "";
  NewAccountCommentSqaut.value = "";
  NewAccountCommentBench.value = "";
  NewAccountCommentDeadlift.value = "";
  if (loggedInAccountObject.Bench.goal.weight == undefined) {
    revealEl(BlurBox);
    revealEl(NewAccountPopUp);
  }
}
function LoadingDashboard() {
  hideEl(WholeLogInContainer);
  hideEl(LogInTitleCon);
  revealEl(dashboardCon);
}

function LoggingOut() {
  revealEl(WholeLogInContainer);
  revealEl(LogInTitleCon);
  hideEl(dashboardCon);
  loggedInAccountObject = undefined;
}

//Updating DashboardUI

function HeighestWEightOfArray(Array) {
  if (Array.length === 0) {
    return 0;
  } else {
    let Prs = Array.map((a) => a.Amount);
    let highestAmount = Math.max(...Prs);
    return highestAmount;
  }
}
function CalcutlatingAmountLeftToHitGoal(Lift) {
  if (
    loggedInAccountObject[Lift].goal.weight -
      HeighestWEightOfArray(loggedInAccountObject[Lift].Lifts) <
    0
  ) {
    return 0;
  } else {
    return (
      loggedInAccountObject[Lift].goal.weight -
      HeighestWEightOfArray(loggedInAccountObject[Lift].Lifts)
    );
  }
}
function UpdatingHowCloseToCurrentMaxes() {
  DonghnutSqaut.data = {
    labels: ["Current Squat Max", "Left To Reach Goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts),
          CalcutlatingAmountLeftToHitGoal("Squat"),
        ],
        backgroundColor: ["black", "grey"],
        hoverOffset: 5,
      },
    ],
  };

  DonghnutBench.data = {
    labels: ["Current Bench Max", "Left To Reach Goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts),
          CalcutlatingAmountLeftToHitGoal("Bench"),
        ],
        backgroundColor: ["black", "grey"],
        hoverOffset: 5,
      },
    ],
  };
  DonghnutDeadlift.data = {
    labels: ["Current Deadlift Max", "Left To Reach Goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Deadlift.Lifts),
          CalcutlatingAmountLeftToHitGoal("Deadlift"),
        ],
        backgroundColor: ["black", "grey"],
        hoverOffset: 5,
      },
    ],
  };
  DonghnutSqaut.update();
  DonghnutBench.update();
  DonghnutDeadlift.update();
}
function UpdatingTableDate(tabledata) {
  let dataHtml = "";
  for (let user of tabledata) {
    dataHtml += `<tr><td>${setObject}`;
  }
}
function UpdatingMainGraph() {
  if (MainButtonSelectBench.classList.contains("MainSelected")) {
    MainGrpah.data = {
      labels: loggedInAccountObject.Bench.Lifts.map((a) => a.Date),
      datasets: [
        {
          label: "Pr's",
          backgroundColor: "black",
          data: loggedInAccountObject.Bench.Lifts.map((a) => a.Amount),
          borderWidth: 1,
        },
        {
          label: "Goal",
          backgroundColor: "lightgreen",
        },
      ],
    };
    MainGrpah.options = {
      plugins: {
        annotation: {
          annotations: {
            line1: {
              type: "line",
              yMin: loggedInAccountObject.Bench.goal.weight,
              yMax: loggedInAccountObject.Bench.goal.weight,
              borderColor: "lightgreen",
              borderWidth: 2,
            },
          },
        },
      },
    };
  }
  if (MainButtonSelectDeadlift.classList.contains("MainSelected")) {
    MainGrpah.data = {
      labels: loggedInAccountObject.Deadlift.Lifts.map((a) => a.Date),
      datasets: [
        {
          label: "Deadlift",
          backgroundColor: "black",
          data: loggedInAccountObject.Deadlift.Lifts.map((a) => a.Amount),
          borderWidth: 1,
        },
        {
          label: "Goal",
          backgroundColor: "lightgreen",
        },
      ],
    };
    MainGrpah.options = {
      plugins: {
        annotation: {
          annotations: {
            line1: {
              type: "line",
              yMin: loggedInAccountObject.Deadlift.goal.weight,
              yMax: loggedInAccountObject.Deadlift.goal.weight,
              borderColor: "lightgreen",
              borderWidth: 2,
            },
          },
        },
      },
    };
  }
  if (MainButtonSelectSquat.classList.contains("MainSelected")) {
    MainGrpah.data = {
      labels: loggedInAccountObject.Squat.Lifts.map((a) => a.Date),
      datasets: [
        {
          label: "Squat",
          backgroundColor: "black",
          data: loggedInAccountObject.Squat.Lifts.map((a) => a.Amount),
          borderWidth: 1,
        },
        {
          label: "Goal",
          backgroundColor: "lightgreen",
        },
      ],
    };
    MainGrpah.options = {
      plugins: {
        annotation: {
          annotations: {
            line1: {
              type: "line",
              yMin: loggedInAccountObject.Squat.goal.weight,
              yMax: loggedInAccountObject.Squat.goal.weight,
              borderColor: "lightgreen",
              borderWidth: 2,
            },
          },
        },
      },
    };
  }
  MainGrpah.update();
}
function ChangeGreetingsMessage() {
  ChangeTextOfElement(
    `Welcome to your hub, ${loggedInAccountObject.username}`,
    GreetingsMessage
  );
}
function ChangingCurrentStats() {
  let maxSquat = HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts);
  let maxBench = HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts);
  let maxDeadlift = HeighestWEightOfArray(loggedInAccountObject.Deadlift.Lifts);
  let total = maxSquat + maxBench + maxDeadlift;
  ChangeTextOfElement(`Total: ${total}`, CurrentTotal);
  ChangeTextOfElement(
    `Squat: ${maxSquat} Bench: ${maxBench} Deadlift: ${maxDeadlift}`,
    CurrentSBD
  );
}

function UpdateGoalReusedFunction(Lift) {
  if (loggedInAccountObject[Lift].goal.weight == undefined) {
    ChangeTextOfElement(
      `${Lift}: Update Goal
    `,
      document.querySelector(`#CurrentGoals${Lift}`)
    );
  } else {
    ChangeTextOfElement(
      `${Lift}: ${loggedInAccountObject[Lift].goal.weight} by ${loggedInAccountObject[Lift].goal.date} *
  `,
      document.querySelector(`#CurrentGoals${Lift}`)
    );
  }
}
function UpdatingGoals() {
  UpdateGoalReusedFunction("Bench");
  UpdateGoalReusedFunction("Squat");
  UpdateGoalReusedFunction("Deadlift");
}

function UpdateAllDashboardUI() {
  ChangeGreetingsMessage();
  ChangingCurrentStats();
  UpdatingGoals();
  UpdatingMainGraph();
  UpdatingHowCloseToCurrentMaxes();
}
//Adding Pr's, updating goal and Account Settings UI and Funtions

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
function MainchangingClickedButtonToSelected(button) {
  AllMainButtonSelectors.forEach((element) => {
    if (element.classList.contains("MainSelected")) {
      element.classList.remove("MainSelected");
      element.classList.add("MainUnSelected");
    }
  });
  button.classList.toggle("MainSelected");
  button.classList.toggle("MainUnSelected");
}
function ChangingMaingraphContent(event) {
  if (
    event.target.classList.contains("MainUnSelected") &&
    event.target.classList.contains("BenchButtonMain")
  ) {
    MainchangingClickedButtonToSelected(MainButtonSelectBench);
    UpdatingMainGraph();
  }

  if (
    event.target.classList.contains("MainUnSelected") &&
    event.target.classList.contains("SquatButtonMain")
  ) {
    MainchangingClickedButtonToSelected(MainButtonSelectSquat);
    UpdatingMainGraph();
  }
  if (
    event.target.classList.contains("MainUnSelected") &&
    event.target.classList.contains("DeadliftButtonMain")
  ) {
    MainchangingClickedButtonToSelected(MainButtonSelectDeadlift);
    UpdatingMainGraph();
  }
}

function NewAccountUpdatingAccount() {
  if (
    NewAccountDateSqaut.value &&
    NewAccountDateBench.value &&
    NewAccountDateDeadlift.value &&
    NewAccountAmountSqaut.value &&
    NewAccountAmountBench.value &&
    NewAccountAmountDeadlift.value &&
    NewAccountCommentSqaut.value &&
    NewAccountCommentBench.value &&
    NewAccountCommentDeadlift.value != ""
  ) {
    loggedInAccountObject.Squat.goal.weight = NewAccountAmountSqaut.value;
    loggedInAccountObject.Squat.goal.date = NewAccountDateSqaut.value;
    loggedInAccountObject.Squat.goal.comment = NewAccountCommentSqaut.value;
    loggedInAccountObject.Bench.goal.weight = NewAccountAmountBench.value;
    loggedInAccountObject.Bench.goal.date = NewAccountDateBench.value;
    loggedInAccountObject.Bench.goal.comment = NewAccountCommentBench.value;
    loggedInAccountObject.Deadlift.goal.weight = NewAccountAmountDeadlift.value;
    loggedInAccountObject.Deadlift.goal.date = NewAccountDateDeadlift.value;
    loggedInAccountObject.Deadlift.goal.comment =
      NewAccountCommentDeadlift.value;
    hideEl(NewAccountPopUp);
    hideEl(BlurBox);
  } else {
    revealEl(NewAccountErrorMessage);
    NewAccountDateSqaut.value = "";
    NewAccountDateBench.value = "";
    NewAccountDateDeadlift.value = "";
    NewAccountAmountSqaut.value = "";
    NewAccountAmountBench.value = "";
    NewAccountAmountDeadlift.value = "";
    NewAccountCommentSqaut.value = "";
    NewAccountCommentBench.value = "";
    NewAccountCommentDeadlift.value = "";
  }
}

function AddPrToLoggedInAccountReUSedFunction(Lift) {
  if (AddPrDropdown.value == Lift) {
    if (AddPrRepDropdown.value != "Reps") {
      let calculatedPr = Math.round(
        AddPrWeight.value / (1.0278 - 0.0278 * Number(AddPrRepDropdown.value))
      );
      loggedInAccountObject[Lift].Lifts.push({
        Amount: calculatedPr,
        Date: AddPrDate.value,
        Comment: AddPrComment.value,
      });
    } else {
      loggedInAccountObject[Lift].Lifts.push({
        Amount: AddPrWeight.value,
        Date: AddPrDate.value,
        Comment: AddPrComment.value,
      });
    }
    loggedInAccountObject.Squat.Lifts.sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );
    loggedInAccountObject.Bench.Lifts.sort((a, b) => a.Date - b.Date);
    loggedInAccountObject.Deadlift.Lifts.sort((a, b) => a.Date - b.Date);
  }
}
function UpdateGoalToLoggedInAccountReUSedFunction(Lift) {
  if (UpdateDropdown.value == Lift) {
    loggedInAccountObject[Lift].goal.weight = UpdateWeight.value;
    loggedInAccountObject[Lift].goal.date = UpdateDate.value;
    loggedInAccountObject[Lift].goal.comment = UpdateComment.value;
  }
}
function AddPrToLoggedInAccount() {
  AddPrToLoggedInAccountReUSedFunction("Squat");
  AddPrToLoggedInAccountReUSedFunction("Bench");
  AddPrToLoggedInAccountReUSedFunction("Deadlift");
}

function UpdatingGoalsLoggedInAccount() {
  UpdateGoalToLoggedInAccountReUSedFunction("Squat");
  UpdateGoalToLoggedInAccountReUSedFunction("Bench");
  UpdateGoalToLoggedInAccountReUSedFunction("Deadlift");
}
///Graphs
Chart.defaults.font.size = 13;
Chart.defaults.font.family = "monospace";
Chart.defaults.color = "#000";
const MainGrpah = new Chart(LineGraph, {
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
const DonghnutSqaut = new Chart(DonghnutGraph1, {
  type: "doughnut",
  data: {
    labels: ["How Far Away From Squat Goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [180, 10],
        backgroundColor: ["black", " lightgrey"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
    events: null,
  },
});
const DonghnutBench = new Chart(DonghnutGraph2, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [180, 3],
        backgroundColor: ["black", "lightgrey"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
  },
});
const DonghnutDeadlift = new Chart(DonghnutGraph3, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "online tutorial subjects",
        data: [120, 50],
        backgroundColor: ["black", "lightgrey"],
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
  LogInFin.addEventListener("click", () => {
    LoggingIn();
    SortingLiftsByDateInLoggedInObject();
    UpdateAllDashboardUI();
    MakeUpdateAccountPopUpIfEmpty();
    UpdatingArrayOfAllAccountObjects();
  });
  AllDashBoardSelectorButtons.forEach((element) =>
    element.addEventListener("click", ChangingContainerContent)
  );
  AllMainButtonSelectors.forEach((element) =>
    element.addEventListener("click", ChangingMaingraphContent)
  );
  AddPrSubmit.addEventListener("click", () => {
    AddPrToLoggedInAccount();

    UpdatingLoggedInAccountValuesToLocalStorage();
    SortingLiftsByDateInLoggedInObject();
    UpdateAllDashboardUI();
  });
  UpdateSubmit.addEventListener("click", () => {
    UpdatingGoalsLoggedInAccount();
    UpdatingLoggedInAccountValuesToLocalStorage();
    UpdateAllDashboardUI();
  });
  LoggingOutButton.addEventListener("click", LoggingOut);
  ChangingPasswordButton.addEventListener("click", ChangingPasswwordLoggedIn);
  DeleteAccountButton.addEventListener("click", () => {
    DeletingAccount();
    LoggingOut();
  });
  NewAccountFinalSubmitButton.addEventListener("click", () => {
    NewAccountUpdatingAccount();
    UpdateAllDashboardUI();
    UpdatingLoggedInAccountValuesToLocalStorage();
  });
};
init();
