import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
const GreetingsMessageusername = document.getElementById(
  "GreetingsMessageUsername2"
);
const GreetingsMessageAge = document.getElementById("GreetingsMessageAge2");
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
const GoalCommentDiv = document.querySelector("#GoalCommentPopUp");
const GoalCommentTextGoal = document.querySelector("#PopUpcommentTextGoal");
const GoalCommentTextComment = document.querySelector(
  "#PopUpcommentTextComment"
);
const CurrentGoalSquattext = document.querySelector(`#CurrentGoalsSquat`);
const CurrentGoalBenchtext = document.querySelector(`#CurrentGoalsBench`);
const CurrentGoalsDeadlifttext = document.querySelector(
  `#CurrentGoalsDeadlift`
);
const activityGraph = document.querySelector(`#Activitygraph`);
const totalweight = document.querySelector("#totalweightlifted");
const bestlift = document.querySelector("#bestlift");

const mostrecentlift = document.querySelector("#mostrecentlift");
const currentliftsquat = document.querySelector(
  "#NewAccountAmountCurInputSqaut"
);
const currentliftbench = document.querySelector(
  "#NewAccountAmountCurInputBench"
);
const currentliftdeadlift = document.querySelector(
  "#NewAccountAmountCurInputDeadlift"
);
const LoginContainer = document.querySelector("#LogInContainer");
const rankupcontainer = document.querySelector("#rankupcontainer");
const rankupnumber1 = document.querySelector("#rankupnumber1");
const addupdateerror = document.querySelector("#addupdateerror");
const ageofaccount = document.querySelector("#ageofaccount");
const updategoaltexts = document.querySelector("#updategoaltexts");
const updategoaltextb = document.querySelector("#updategoaltextb");
const updategoaltextd = document.querySelector("#updategoaltextd");
const MainDashCon = document.querySelector("#maindashcon");

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
  LoginContainer.style.height = "178px";
  ClearingInputField(UsernameInput);
  ClearingInputField(PasswordInput1);
  ClearingInputField(PasswordInput2);
}

function InitiatingLogInUI() {
  hideEl(PasswordInput2Con);
  revealEl(CreateAccountButtonINCon);
  hideEl(CreateAccountButtonFinCon);
  revealEl(LogInFinCon);
  hideEl(LogInINCon);
  hideEl(ErrorSuccesCon);
  LoginContainer.style.height = "145px";
  ClearingInputField(UsernameInput);
  ClearingInputField(PasswordInput1);
  ClearingInputField(PasswordInput2);
}

// Accounts//
let arrayofaccountobjects = [];
let loggedInAccountObject;
let loggedInRank;
class Accounts {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.dateAccountCreated = undefined;
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
  localStorage.removeItem(
    loggedInAccountObject.username,
    JSON.stringify(loggedInAccountObject)
  );
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
    LoginContainer.style.height = "178px";
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
      LoginContainer.style.height = "178px";
      ClearingInputField(UsernameInput);
      ClearingInputField(PasswordInput1);
    }
  } else {
    revealEl(ErrorSuccesCon);
    ChangeTextOfElement("ACCOUNT NOT FOUND", ErrorSucces);
    LoginContainer.style.height = "178px";
    ClearingInputField(UsernameInput);
    ClearingInputField(PasswordInput1);
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
  arrayofaccountobjects = [];
  let arrayofkeys = Object.keys(localStorage);
  arrayofkeys.forEach((key) => {
    if (key !== "debug") {
      arrayofaccountobjects.push(JSON.parse(localStorage.getItem(key)));
    }
  });
}

function ChangingPasswwordLoggedIn() {
  if (
    ChangingPassword.value == ChangingPasswordConfirm.value &&
    ChangingPassword.value !== ""
  ) {
    loggedInAccountObject.password = ChangingPassword;
    ClearingInputField(ChangingPassword);
    ClearingInputField(ChangingPasswordConfirm);
    hideEl(ChangePasswordError);
    ChangingPassword.value = "";
    ChangingPasswordConfirm.value = "";
  } else {
    revealEl(ChangePasswordError);
    ChangingPassword.value = "";
    ChangingPasswordConfirm.value = "";
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
  // hideEl(LogInTitleCon);
  revealEl(MainDashCon);
}

function LoggingOut() {
  revealEl(WholeLogInContainer);
  revealEl(LogInTitleCon);
  hideEl(MainDashCon);
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
function UpdatingRecentLift() {
  let arrayofrecent = [
    loggedInAccountObject.Deadlift.Lifts[
      loggedInAccountObject.Deadlift.Lifts.length - 1
    ],

    loggedInAccountObject.Bench.Lifts[
      loggedInAccountObject.Bench.Lifts.length - 1
    ],

    loggedInAccountObject.Squat.Lifts[
      loggedInAccountObject.Squat.Lifts.length - 1
    ],
  ];

  arrayofrecent.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date);
  });
  if (
    arrayofrecent[2] ==
    loggedInAccountObject.Squat.Lifts[
      loggedInAccountObject.Squat.Lifts.length - 1
    ]
  ) {
    ChangeTextOfElement(
      `Squatted ${arrayofrecent[2].Amount} on ${arrayofrecent[2].Date}`,
      mostrecentlift
    );
  } else if (
    arrayofrecent[2] ==
    loggedInAccountObject.Bench.Lifts[
      loggedInAccountObject.Bench.Lifts.length - 1
    ]
  ) {
    ChangeTextOfElement(
      `Benched ${arrayofrecent[2].Amount} on ${arrayofrecent[2].Date}`,
      mostrecentlift
    );
  } else if (
    arrayofrecent[2] ==
    loggedInAccountObject.Deadlift.Lifts[
      loggedInAccountObject.Deadlift.Lifts.length - 1
    ]
  ) {
    ChangeTextOfElement(
      `Deadlifted ${arrayofrecent[2].Amount} on ${arrayofrecent[2].Date}`,
      mostrecentlift
    );
  }
}
function UpdatingAgeOfAccount() {
  let oneDay = 24 * 60 * 60 * 1000;
  let firstDate = new Date(loggedInAccountObject.dateAccountCreated);
  let secondDate = new Date();
  let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  if (diffDays == 1) {
    ageofaccount.textContent = `${diffDays} day`;
  } else ageofaccount.textContent = `${diffDays} days`;
}
function UpdatingHowFarFromRankUpGraph() {
  let loggedtotal = +document.querySelector(`#total${loggedInRank}`)
    .textContent;
  if (+loggedInRank == 1) {
    hideEl(rankupcontainer);
    revealEl(rankupnumber1);
  } else {
    document.querySelector("#RankUpText").textContent = `Gain ${
      +document.querySelector(`#total${loggedInRank - 1}`).textContent -
      +document.querySelector(`#total${loggedInRank}`).textContent +
      1
    } to rank up`;
    activitycongraph.data = {
      labels: [
        `Current Total: ${+document.querySelector(`#total${loggedInRank}`)
          .textContent}`,
        `Next Rank Total: ${
          +document.querySelector(`#total${loggedInRank - 1}`).textContent + 1
        }`,
      ],
      datasets: [
        {
          label: "",
          data: [
            +document.querySelector(`#total${loggedInRank}`).textContent,
            +document.querySelector(`#total${loggedInRank - 1}`).textContent -
              +document.querySelector(`#total${loggedInRank}`).textContent +
              1,
          ],
          backgroundColor: ["black", "white"],
          hoverOffset: 5,
        },
      ],
    };
  }
  activitycongraph.update();
}
function UpdatingHowCloseToCurrentMaxes() {
  updategoaltexts.style.visibility = "hidden";
  updategoaltextb.style.visibility = "hidden";
  updategoaltextd.style.visibility = "hidden";
  if (
    +HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts) >=
    +loggedInAccountObject.Squat.goal.weight
  ) {
    updategoaltexts.style.visibility = "visible";
  }
  if (
    +HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts) >=
    +loggedInAccountObject.Bench.goal.weight
  ) {
    updategoaltextb.style.visibility = "visible";
  }
  if (
    +HeighestWEightOfArray(loggedInAccountObject.Deadlift.Lifts) >=
    +loggedInAccountObject.Deadlift.goal.weight
  ) {
    updategoaltextd.style.visibility = "visible";
  }
  DonghnutSqaut.data = {
    labels: [
      `Squat Max: ${HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts)}`,
      `Squat Goal: ${loggedInAccountObject.Squat.goal.weight}`,
    ],
    datasets: [
      {
        label: "",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts),
          CalcutlatingAmountLeftToHitGoal("Squat"),
        ],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  };

  DonghnutBench.data = {
    labels: [
      `Bench Max: ${HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts)}`,
      `Bench Goal: ${loggedInAccountObject.Bench.goal.weight}`,
    ],
    datasets: [
      {
        label: "",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts),
          CalcutlatingAmountLeftToHitGoal("Bench"),
        ],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  };
  DonghnutDeadlift.data = {
    labels: [
      `Deadlift Max: ${HeighestWEightOfArray(
        loggedInAccountObject.Deadlift.Lifts
      )}`,
      `Deadlift Goal: ${loggedInAccountObject.Deadlift.goal.weight}`,
    ],
    datasets: [
      {
        label: "",
        data: [
          HeighestWEightOfArray(loggedInAccountObject.Deadlift.Lifts),
          CalcutlatingAmountLeftToHitGoal("Deadlift"),
        ],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  };
  DonghnutSqaut.update();
  DonghnutBench.update();
  DonghnutDeadlift.update();
}

function UpdatingTableData(AccountArray) {
  let dataHtml = ``;
  let arrayofTabledata = [];
  let rank = 0;
  for (let user of AccountArray) {
    let highestSqaut = HeighestWEightOfArray(user.Squat.Lifts);
    let highestBench = HeighestWEightOfArray(user.Bench.Lifts);
    let highestDeadlift = HeighestWEightOfArray(user.Deadlift.Lifts);
    let total = highestSqaut + highestBench + highestDeadlift;
    arrayofTabledata.push({
      username: user.username,
      highestSqaut: highestSqaut,
      highestBench: highestBench,
      highestDeadlift: highestDeadlift,
      total: total,
    });
  }
  arrayofTabledata.sort((a, b) => {
    return b.total - a.total;
  });
  for (let tableuser of arrayofTabledata) {
    rank += 1;
    if (tableuser.username == loggedInAccountObject.username) {
      loggedInRank = rank;
      dataHtml += `<tr  class="loggedinrow"><td>${rank}</td><td>${tableuser.username}</td><td>${tableuser.highestSqaut}</td><td>${tableuser.highestBench}</td><td>${tableuser.highestDeadlift}</td><td id='total${rank}'>${tableuser.total}</td></tr>`;
    } else {
      dataHtml += `<tr ><td>${rank}</td><td>${tableuser.username}</td><td>${tableuser.highestSqaut}</td><td>${tableuser.highestBench}</td><td>${tableuser.highestDeadlift}</td><td id='total${rank}'>${tableuser.total}</td></tr>`;
    }
  }
  tabledata.innerHTML = dataHtml;
}

function UpdatingMainGraph() {
  if (MainButtonSelectBench.classList.contains("MainSelected")) {
    MainGrpah.data = {
      labels: loggedInAccountObject.Bench.Lifts.map((a) => a.Date),
      datasets: [
        {
          label: "Lift's",
          borderColor: "white",

          fill: "origin",
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
          label: "Lift's",
          borderColor: "white",

          fill: "origin",
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
          label: "Lift's",
          borderColor: "white",

          fill: "origin",
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
    `${loggedInAccountObject.username}`,
    GreetingsMessageusername
  );
  ChangeTextOfElement(`${loggedInRank}`, GreetingsMessageAge);
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
function UpdatingBestLift() {
  let array = [
    HeighestWEightOfArray(loggedInAccountObject.Squat.Lifts),
    HeighestWEightOfArray(loggedInAccountObject.Bench.Lifts),
    HeighestWEightOfArray(loggedInAccountObject.Deadlift.Lifts),
  ];
  if (Math.max(...array) == array[0]) {
    ChangeTextOfElement("Squat", bestlift);
  }
  if (Math.max(...array) == array[1]) {
    ChangeTextOfElement("Bench", bestlift);
  }
  if (Math.max(...array) == array[2]) {
    ChangeTextOfElement("Deadlift", bestlift);
  }
}

function UpdatingTotalWeight() {
  let addedAmount = 0;
  loggedInAccountObject.Squat.Lifts.forEach((lift) => {
    addedAmount += Number(lift.Amount);
  });
  loggedInAccountObject.Bench.Lifts.forEach((lift) => {
    addedAmount += Number(lift.Amount);
  });
  loggedInAccountObject.Deadlift.Lifts.forEach((lift) => {
    addedAmount += Number(lift.Amount);
  });
  ChangeTextOfElement(addedAmount, totalweight);
}
function UpdateGoalReusedFunction(Lift) {
  if (loggedInAccountObject[Lift].goal.weight == undefined) {
    ChangeTextOfElement(
      `${Lift}: Update Goal
    `,
      document.querySelector(`#CurrentGoals${Lift}`)
    );
  } else {
    if (loggedInAccountObject[Lift].goal.comment != undefined || "") {
      ChangeTextOfElement(
        `${Lift}: ${loggedInAccountObject[Lift].goal.weight} by ${loggedInAccountObject[Lift].goal.date} +
  `,
        document.querySelector(`#CurrentGoals${Lift}`)
      );
    } else {
      ChangeTextOfElement(
        `${Lift}: ${loggedInAccountObject[Lift].goal.weight} by ${loggedInAccountObject[Lift].goal.date} 
    `,
        document.querySelector(`#CurrentGoals${Lift}`)
      );
    }
  }
}

function UpdatingGoals() {
  UpdateGoalReusedFunction("Bench");
  UpdateGoalReusedFunction("Squat");
  UpdateGoalReusedFunction("Deadlift");
}

function UpdateAllDashboardUI() {
  ChangingCurrentStats();
  UpdatingGoals();
  UpdatingMainGraph();
  UpdatingHowCloseToCurrentMaxes();
  UpdatingArrayOfAllAccountObjects();
  UpdatingTableData(arrayofaccountobjects);
  ChangeGreetingsMessage();
  UpdatingBestLift();
  UpdatingTotalWeight();

  UpdatingHowFarFromRankUpGraph();
  UpdatingRecentLift();
  UpdatingAgeOfAccount();
}

//Making GoalComment Appear

function GoalCommentAppear(event) {
  if (event.target.classList.contains("SqautGoal")) {
    if (CurrentGoalSquattext.textContent.includes("+")) {
      document.getElementById(
        "GoalCommentPopUp"
      ).style.left = `${event.pageX}px`;
      console.log(CurrentGoalBenchtext.getBoundingClientRect());
      document.getElementById("GoalCommentPopUp").style.top = `${
        event.pageY - 100
      }px`;
      GoalCommentTextGoal.style.left = ChangeTextOfElement(
        `Goal: ${loggedInAccountObject.Squat.goal.weight} by ${loggedInAccountObject.Squat.goal.date}`,
        GoalCommentTextGoal
      );
      ChangeTextOfElement(
        `Comment: ${loggedInAccountObject.Squat.goal.comment}`,
        GoalCommentTextComment
      );
      revealEl(GoalCommentDiv);
      CurrentGoalSquattext.style.cursor = "pointer";
    }
  }
  if (event.target.classList.contains("BenchGoal")) {
    if (CurrentGoalBenchtext.textContent.includes("+")) {
      document.getElementById("GoalCommentPopUp").style.left = `${
        event.pageX + 405
      }px`;
      document.getElementById("GoalCommentPopUp").style.top = `${
        event.pageY + 35
      }px`;
      ChangeTextOfElement(
        `Goal: ${loggedInAccountObject.Bench.goal.weight} by ${loggedInAccountObject.Bench.goal.date}`,
        GoalCommentTextGoal
      );
      ChangeTextOfElement(
        `Comment: ${loggedInAccountObject.Bench.goal.comment}`,
        GoalCommentTextComment
      );
      revealEl(GoalCommentDiv);
      CurrentGoalBenchtext.style.cursor = "pointer";
    }
  }
  if (event.target.classList.contains("DeadliftGoal")) {
    if (CurrentGoalsDeadlifttext.textContent.includes("+")) {
      document.getElementById("GoalCommentPopUp").style.left = `${
        event.pageX + 402
      }px`;
      document.getElementById("GoalCommentPopUp").style.top = `${
        event.pageY + 35
      }px`;
      ChangeTextOfElement(
        `Goal: ${loggedInAccountObject.Deadlift.goal.weight} by ${loggedInAccountObject.Deadlift.goal.date}`,
        GoalCommentTextGoal
      );
      ChangeTextOfElement(
        `Comment: ${loggedInAccountObject.Deadlift.goal.comment}`,
        GoalCommentTextComment
      );
      revealEl(GoalCommentDiv);
      CurrentGoalsDeadlifttext.style.cursor = "pointer";
    }
  }
}

//  Pr's, updating goal and Account Settings UI and Funtions

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
    hideEl(addupdateerror);
    hideEl(ChangePasswordError);
  }

  if (
    event.target.classList.contains("DashboardSelectorButtonUnSel") &&
    event.target.classList.contains("AddGoalButton")
  ) {
    changingClickedButtonToSelected(AddGoalsSelectorButton);
    hideEl(AccountSettingsContent);
    hideEl(AddPrContent);
    revealEl(UpdateGoalsContent);
    hideEl(addupdateerror);
    hideEl(ChangePasswordError);
  }
  if (
    event.target.classList.contains("DashboardSelectorButtonUnSel") &&
    event.target.classList.contains("AccountSettingsButton")
  ) {
    changingClickedButtonToSelected(AccountsSettingsSelectorButton);
    hideEl(UpdateGoalsContent);
    hideEl(AddPrContent);
    revealEl(AccountSettingsContent);
    hideEl(addupdateerror);
    hideEl(ChangePasswordError);
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
    currentliftbench.value &&
    currentliftdeadlift.value &&
    currentliftsquat.value != ""
  ) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;
    loggedInAccountObject.dateAccountCreated = today;
    loggedInAccountObject.Bench.Lifts.push({
      Amount: currentliftbench.value,
      Date: today,
    });
    loggedInAccountObject.Deadlift.Lifts.push({
      Amount: currentliftdeadlift.value,
      Date: today,
    });
    loggedInAccountObject.Squat.Lifts.push({
      Amount: currentliftsquat.value,
      Date: today,
    });
    loggedInAccountObject.Squat.goal.weight = NewAccountAmountSqaut.value;
    loggedInAccountObject.Squat.goal.date = NewAccountDateSqaut.value;
    loggedInAccountObject.Bench.goal.weight = NewAccountAmountBench.value;
    loggedInAccountObject.Bench.goal.date = NewAccountDateBench.value;
    loggedInAccountObject.Deadlift.goal.weight = NewAccountAmountDeadlift.value;
    loggedInAccountObject.Deadlift.goal.date = NewAccountDateDeadlift.value;

    if (NewAccountCommentBench.value != "") {
      loggedInAccountObject.Bench.goal.comment = NewAccountCommentBench.value;
    }
    if (NewAccountCommentSqaut.value != "") {
      loggedInAccountObject.Squat.goal.comment = NewAccountCommentSqaut.value;
    }
    if (NewAccountCommentDeadlift.value != "") {
      loggedInAccountObject.Deadlift.goal.comment =
        NewAccountCommentDeadlift.value;
    }
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
    currentliftbench.value = "";
    currentliftdeadlift.value = "";
    currentliftsquat.value = "";
  }
}

function AddPrToLoggedInAccountReUSedFunction(Lift) {
  if (AddPrDate.value !== "" && AddPrWeight.value !== "") {
    hideEl(addupdateerror);
    if (AddPrRepDropdown.value != "Reps") {
      let calculatedPr = Math.round(
        AddPrWeight.value / (1.0278 - 0.0278 * Number(AddPrRepDropdown.value))
      );
      loggedInAccountObject[Lift].Lifts.push({
        Amount: calculatedPr,
        Date: AddPrDate.value,
      });
    } else {
      loggedInAccountObject[Lift].Lifts.push({
        Amount: AddPrWeight.value,
        Date: AddPrDate.value,
      });
    }

    loggedInAccountObject.Squat.Lifts.sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );
    loggedInAccountObject.Bench.Lifts.sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );
    loggedInAccountObject.Deadlift.Lifts.sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );
  } else if (
    (AddPrDropdown.value == Lift && AddPrDate.value == "") ||
    AddPrDate.AddPrWeight == ""
  ) {
    revealEl(addupdateerror);
  }

  AddPrDate.value = "";
  AddPrWeight.value = "";

  AddPrRepDropdown.value = "Reps";
}

function UpdateGoalToLoggedInAccountReUSedFunction(Lift) {
  if (
    UpdateDropdown.value == Lift &&
    UpdateDate.value !== "" &&
    UpdateWeight.value !== ""
  ) {
    hideEl(addupdateerror);
    loggedInAccountObject[Lift].goal.weight = UpdateWeight.value;
    loggedInAccountObject[Lift].goal.date = UpdateDate.value;
    if (UpdateComment.value !== "") {
      loggedInAccountObject[Lift].goal.comment = UpdateComment.value;
    } else {
      loggedInAccountObject[Lift].goal.comment = undefined;
    }
  } else if (UpdateDropdown.value == Lift) {
    revealEl(addupdateerror);
  }
  UpdateComment.value = "";
  UpdateDate.value = "";
  UpdateWeight.value = "";
}
function AddPrToLoggedInAccount() {
  if (AddPrDropdown.value == "Deadlift") {
    AddPrToLoggedInAccountReUSedFunction("Deadlift");
  } else if (AddPrDropdown.value == "Squat") {
    AddPrToLoggedInAccountReUSedFunction("Squat");
  } else if (AddPrDropdown.value == "Bench") {
    AddPrToLoggedInAccountReUSedFunction("Bench");
  }
}

function UpdatingGoalsLoggedInAccount() {
  if (UpdateDropdown.value == "Squat") {
    UpdateGoalToLoggedInAccountReUSedFunction("Squat");
  } else if (UpdateDropdown.value == "Bench") {
    UpdateGoalToLoggedInAccountReUSedFunction("Bench");
  } else if (UpdateDropdown.value == "Deadlift") {
    UpdateGoalToLoggedInAccountReUSedFunction("Deadlift");
  }
}
///Graphs
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "monospace";
Chart.defaults.color = "#000";
Chart.defaults.plugins.tooltip.width = 29;
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
    devicePixelRatio: 2,
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
        backgroundColor: ["black", " white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
    devicePixelRatio: 2,
  },
});
const DonghnutBench = new Chart(DonghnutGraph2, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        label: "",
        data: [180, 3],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
    devicePixelRatio: 2,
  },
});
const DonghnutDeadlift = new Chart(DonghnutGraph3, {
  type: "doughnut",
  data: {
    labels: ["current max", "max goal"],
    datasets: [
      {
        data: [120, 50],
        backgroundColor: ["black", "white"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    responsive: false,
    devicePixelRatio: 2,
  },
});
const activitycongraph = new Chart(rankuppie, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "Bench",
        data: [50, 40],
        backgroundColor: ["black", "lightgrey"],
        hoverOffset: 5,
      },
    ],
  },
  options: {
    clip: false,
    layout: {
      padding: { bottom: 55 },
    },
    plugins: {
      legend: {
        display: false,
      },
    },

    responsive: true,
  },
});

const init = function () {
  CreateAccountButtonIN.addEventListener("click", InitiatingCreateAccountUI);
  LogInIN.addEventListener("click", InitiatingLogInUI);
  CreateAccountButtonFin.addEventListener("click", createAccount);
  LogInFin.addEventListener("click", () => {
    LoggingIn();
    SortingLiftsByDateInLoggedInObject();
    MakeUpdateAccountPopUpIfEmpty();
    UpdateAllDashboardUI();
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
    UpdatingLoggedInAccountValuesToLocalStorage();
    UpdateAllDashboardUI();
  });
  [
    CurrentGoalSquattext,
    CurrentGoalBenchtext,
    CurrentGoalsDeadlifttext,
  ].forEach((h3) => h3.addEventListener("mouseenter", GoalCommentAppear));
  [
    CurrentGoalSquattext,
    CurrentGoalBenchtext,
    CurrentGoalsDeadlifttext,
  ].forEach((h3) =>
    h3.addEventListener("mouseleave", () => {
      hideEl(GoalCommentDiv);
    })
  );
};
init();
