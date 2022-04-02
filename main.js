const downArrow = document.querySelector('.down-arrow');

function titleTransition(){
    downArrow.classList.add('hide');
    document.body.classList.add('darken');
}
function reverseTitleTransition(){
    downArrow.classList.remove("hide");
    document.body.classList.remove("darken");
}

function aboutTransition() {
  document.body.classList.add("lighten");
}
function reverseAboutTransition() {
  document.body.classList.remove("lighten");
}

document.onscroll = e => {
    window.pageYOffset ? titleTransition() : reverseTitleTransition();

    const page = Math.floor((window.pageYOffset+10)/window.innerHeight) + 1;
    page == 5 ? aboutTransition() : reverseAboutTransition();
}


window.addEventListener("wheel", scrollUpdate, { passive: false });

function scrollUpdate(e) {
  if (!e.deltaY) return;
  let scroll = window.pageYOffset;
  let change = e.deltaY >= 0 ? 1 : -1;
  let offset = scroll % window.innerHeight;
  scroll += window.innerHeight * change - offset;
  window.scrollBy(0, window.innerHeight * change - offset);
  e.preventDefault();
}

const form = document.querySelector("form");
form.onsubmit = function () {
  document.querySelector('form button').style.display = "none";
  setTimeout(function () {
    form.innerHTML =
      '<div class="message">Sent!</div>';
  }, 500);
};