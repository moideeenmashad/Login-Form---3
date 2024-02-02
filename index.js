let counterArea = document.getElementById("counterArea");
let incBtn = document.getElementById("incBtn");
let subBtn = document.getElementById("decBtn");
let saveBtn = document.getElementById("saveBtn");
let tlPeople = document.getElementById("totalPeople");
let clrBtn = document.getElementById("clrBtn");

let count = 0;
counterArea.textContent = 0;
incBtn.addEventListener("click", () => {
  count = count + 1;
  counterArea.textContent = count;
  getColor();
});

decBtn.addEventListener("click", () => {
  count = count - 1;
  counterArea.textContent = count;
  getColor();
});

clrBtn.addEventListener("click", () => {
  count = 0;
  counterArea.textContent = count;
  getColor();
});

saveBtn.addEventListener("click", () => {
  let savedValue = count + " < ";
  tlPeople.textContent += savedValue;
  counterArea.textContent = 0;
  count = 0;
});

const getColor = () => {
  if (count > 0) {
    counterArea.style.color = "green";
  } else if (count == 0) {
    counterArea.style.color = "black";
  } else {
    counterArea.style.color = "red";
  }
};

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
