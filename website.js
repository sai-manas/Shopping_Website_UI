/*login button*/
let lgPage = document.querySelector(".login_modal"),
  lgCancelBtn = document.querySelector("#login_cancel"),
  lgBtn = document.querySelector("#login");

lgBtn.addEventListener("click", () => {
  lgPage.style.display = 'flex'
})
lgCancelBtn.addEventListener("click", () => {
  lgPage.style.display = 'none'
})

/*signup button*/
let sgPage = document.querySelector(".sign_modal"),
  sgCancelBtn = document.querySelector("#sign_cancel"),
  sgBtn = document.querySelector("#sign_up");

sgBtn.addEventListener("click", () => {
  sgPage.style.display = 'flex'
})
sgCancelBtn.addEventListener("click", () => {
  sgPage.style.display = 'none'
})