$(document).ready(function () {
  $(".carousel").carousel({
    interval: false,
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".whatsapp-float").style.display = "block";
  } else {
    document.querySelector(".whatsapp-float").style.display = "none";
  }
}
