// Users should be able to:
//- View the optimal layout for the app depending on their device's screen size
//- See hover states for all interactive elements on the page
//- Calculate the correct tip and total cost of the bill per person

const container = document.querySelector(".container");
const billInput = document.querySelector("#billInput");
const numberPeopleInput = document.querySelector("#numberPeopleInput");
const tipsContainer = document.querySelector(".tips-container");
const customInput = document.querySelector("#custom");
const bills = { bill: "", people: "", tip: "" };
const tips = ["5%", "10%", "15%", "25%", "50%"];

//assign value to the bills object
const assignValue = (e) => {
  e.target.classList.contains("radio-input") && (customInput.value = "");
  Object.assign(bills, { [e.target.name]: e.target.value });
  console.log(bills);
  if (!bills.bill || !bills.people || !bills.tip)
    return console.log(`values cannot be 0`);
};

//creating the radio input for the tips
tips.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("radio-container");
  const radioInput = document.createElement("input");
  radioInput.setAttribute("type", "radio");
  radioInput.setAttribute("id", item);
  radioInput.setAttribute("name", "tip");
  radioInput.setAttribute("value", item);
  radioInput.classList.add("radio-input");
  radioInput.addEventListener("change", assignValue);
  const label = document.createElement("label");
  label.innerHTML = item;
  label.setAttribute("for", item);
  div.appendChild(radioInput);
  div.appendChild(label);
  tipsContainer.appendChild(div);
});

const radioInput = document.querySelectorAll(".radio-input");
customInput.addEventListener("focus", (e) => {
  radioInput.forEach((item) => {
    item.checked = false;
  });
  Object.assign(bills, { tip: "" });
  return console.log(bills);
});

customInput.addEventListener("change", assignValue);
billInput.addEventListener("change", assignValue);
numberPeopleInput.addEventListener("change", assignValue);
