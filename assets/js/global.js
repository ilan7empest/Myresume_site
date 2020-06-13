window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var header = document.getElementById("header");
  var main = document.getElementById("nav");
    if (header != null && main != null) {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
            header.classList.add("scrolled");
            main.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            main.classList.remove("scrolled");
        }
    }
}