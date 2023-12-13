const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");
const thfname = document.createElement("th");
thfname.innerText = "First Name";
const thlname = document.createElement("th");
thlname.innerText = "Last Name";
const thadd = document.createElement("th");
thadd.innerText = "Address";
const thadd2 = document.createElement("th");
thadd2.innerText = "Pincode";
const thgender = document.createElement("th");
thgender.innerText = "Gender";
const thfood = document.createElement("th");
thfood.innerText = "Food";
const thstate = document.createElement("th");
thstate.innerText = "State";
const thcountry = document.createElement("th");
thcountry.innerText = "Country";
const trHead = document.createElement("tr");
trHead.append(
  thfname,
  thlname,
  thadd,
  thadd2,
  thgender,
  thfood,
  thstate,
  thcountry
);
tHead.appendChild(trHead);
table.append(tHead, tBody);
document.body.append(table);

let form = document.getElementById("form");
let datatable = document.querySelector("#dataTable tbody");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  var firstname = document.getElementById("first-name").value;
  var lastname = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector("input[name = gender]:checked").value;
  var foodchoice = document.getElementById("food choice").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  const newrow = document.createElement("tr");

  const newdata1 = document.createElement("td");
  newdata1.innerText = firstname;
  const newdata2 = document.createElement("td");
  newdata2.innerText = lastname;
  const newdata3 = document.createElement("td");
  newdata3.innerText = address;
  const newdata4 = document.createElement("td");
  newdata4.innerText = pincode;
  const newdata5 = document.createElement("td");
  newdata5.innerText = gender;
  const newdata6 = document.createElement("td");
  newdata6.innerText = foodchoice;
  const newdata7 = document.createElement("td");
  newdata7.innerText = state;
  const newdata8 = document.createElement("td");
  newdata8.innerText = country;

  newrow.append(
    newdata1,
    newdata2,
    newdata3,
    newdata4,
    newdata5,
    newdata6,
    newdata7,
    newdata8
  );

  tBody.append(newrow);
  form.reset();
});
