axios.get('https://colegio.jhoan-sebastia5.repl.co/celulares')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// get table

let thetable = document
  .getElementById("table")
  .getElementsByTagName("tbody")[0];
let popup = document.getElementById("popup");
let popUpBg = document.querySelector(".popup-bg");
let closePopupBtn = document.querySelector(".close-popup");
let popupContent = document.querySelector(".popup-content");
let nameContent = document.querySelector(".name");
let ageContent = document.querySelector(".age");
let breedContent = document.querySelector(".breed");
let colorContent = document.querySelector(".color");
let goodContent = document.querySelector(".good");
let imgContent = document.querySelector(".img");

// go through the table rows & add a click on each row
for (let i = 0; i < thetable.rows.length; i++) {
  let tableRows = thetable.rows[i];
  tableRows.addEventListener("click", TableRowClick);
}
// add event on x button inside popup
closePopupBtn.addEventListener("click", closePopup);

function TableRowClick() {
  // get data attribute from table row & assign the same attr to the popup
  let dataIndex = this.getAttribute("data-index");
  popup.setAttribute("data-index", dataIndex);
  // get popup new attr
  let popupIndex = popup.getAttribute("data-index");
  // compare attributes & if they match call open popup function
  if (dataIndex == popupIndex) {
    let tableRowInfoTd = this.children;
    nameContent.innerHTML = `<span>nombre:</span> ${tableRowInfoTd[0].innerHTML}`;
    ageContent.innerHTML = `<span>Almacenamiento:</span> ${tableRowInfoTd[1].innerHTML}`;
    breedContent.innerHTML = `<span>Sistema:</span> ${tableRowInfoTd[2].innerHTML}`;
    colorContent.innerHTML = `<span>Color:</span> ${tableRowInfoTd[3].innerHTML}`;
    goodContent.innerHTML = `<span>Actualizar:</span> ${tableRowInfoTd[4].innerHTML}`;
    imgContent.innerHTML = tableRowInfoTd[5].innerHTML;
    // popupContent.innerHTML = tableRowInfo;
    openPopup();
  } else {
    console.log("Something is wrong...");
  }
}
// open popup by adding active id to the bg of popup
function openPopup() {
  popUpBg.classList.add("active");
}
// close popup
function closePopup() {
  if (popUpBg.classList.contains("active")) {
    popUpBg.classList.remove("active");
  }
}
