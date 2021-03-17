const contactsLink = document.querySelector(".contacts-link");
const mailLink = document.querySelector(".pop-up");
const popupClose = mailLink.querySelector(".button-close");


contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailLink.classList.add("pop-up-show")
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailLink.classList.remove("pop-up-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mailLink.classList.contains("pop-up-show")) {
        evt.preventDefault();
        mailLink.classList.remove("pop-up-show");
      }
    }
  });