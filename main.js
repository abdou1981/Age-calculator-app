let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
let submit = document.querySelector(".submit");
let resultYear = document.querySelector(".years span");
let resultMonth = document.querySelector(".months span");
let resultDay = document.querySelector(".days span");
let formInput = document.querySelectorAll(".form-input input");
let formLabel = document.querySelectorAll(".form-input label");
let formPara = document.querySelectorAll(".form-input .req");
let whole = document.querySelector(".form-input .whole");
let invaMonth = document.querySelector(".form-input .inva-month");
let invaDay = document.querySelector(".form-input .inva-day");

submit.addEventListener("click", () => {
  let birthday = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`);
  let datedeff = Date.now() - birthday;
  resultDay.innerHTML = "--";
  resultMonth.innerHTML = "--";
  resultYear.innerHTML = "--";
  if (inputYear.value == "" || inputMonth.value == "" || inputDay.value == "") {
    changeDis()
    change();
    formPara.forEach(p => {
      p.style.display = "block";
    })
  } else if (datedeff < 0){
    changeDis()
    change();
    whole.style.display = "block";
  } else if (inputMonth.value > 12) {
    changeDis()
    change();
    invaMonth.style.display = "block";
  } else {
    if (inputMonth.value == 2) {
      if (inputDay.value > 28) {
        changeDis()
        change();
        invaDay.style.display = "block";
      } else {
        toggelResult();
      }
    } else if (inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11) {
      if (inputDay.value > 30) {
        changeDis()
        change();
        invaDay.style.display = "block";
      } else {
        toggelResult();
      }
    } else {
      if (inputDay.value > 31) {
        changeDis()
        change();
        invaDay.style.display = "block";
      } else {
        toggelResult();
      }
    }
  }
})  

// function change color
function change() {
  formInput.forEach(input => {
    input.style.borderColor = "hsl(0, 100%, 67%)";
  })
  formLabel.forEach(label => {
    label.style.color = "hsl(0, 100%, 67%)";
  })
}

//result
function toggelResult() {
  let birthday = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`);
  let datedeff = Date.now() - birthday;
  formInput.forEach(input => {
    input.style.borderColor = "hsl(0, 0%, 94%)";
  })
  formLabel.forEach(label => {
    label.style.color = "hsl(0, 1%, 44%)";
  })
  changeDis();
//year
let year = Math.floor(datedeff / (1000 * 60 * 60 * 24 * 365.25));
resultYear.innerHTML = year;
//month
let month = Math.floor((datedeff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.4375));
resultMonth.innerHTML = month;
//day
let day = Math.floor((datedeff % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
resultDay.innerHTML = day;
inputYear.value = "";
inputMonth.value = "";
inputDay.value = "";
}

//
function changeDis() {
  formPara.forEach(p => {
    p.style.display = "none";
  })
  whole.style.display = "none";
  invaMonth.style.display = "none";
  invaDay.style.display = "none";
}