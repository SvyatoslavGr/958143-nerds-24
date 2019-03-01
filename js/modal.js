var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var username = document.querySelector("[name=username]");
var form = document.querySelector(".feedback-form");
var email = document.querySelector("[name=email]");
var text = document.querySelector("textarea[name=feedback-text]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch(err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();
})

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function(evt){
  if(!username.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if(isStorageSupport){
    localStorage.setItem("email", email.value);
    }
  }
})

email.addEventListener("focus", function(evt){
  if (!email.value) {
    if (storage) {
    email.value = storage;
    }
  }
})

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})
