const contactsLink = document.querySelector(".contacts-link");
const mailLink = document.querySelector(".pop-up");
const popupClose = mailLink.querySelector(".button-close");
const contactForm = mailLink.querySelector("form");
const loginField = mailLink.querySelector("#meeting-name");
const mailField = mailLink.querySelector("#email-login");

contactForm.addEventListener("submit", function(evt) {
  if (!loginField.value || !mailField.value) {
    evt.preventDefault();
    mailLink.classList.add("modal-error");
    console.log("error");
  }
})
contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailLink.classList.add("pop-up-show")
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailLink.classList.remove("pop-up-show");
    mailLink.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mailLink.classList.contains("pop-up-show")) {
        evt.preventDefault();
        mailLink.classList.remove("pop-up-show");
      }
    }
  });