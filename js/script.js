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