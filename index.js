const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept')

function myFunction() {
  var shouldChangePage = prompt(
    "To proceed, type Marco's favorite band below"
  );
  if (shouldChangePage === 'wanderer' || shouldChangePage === 'Wanderer') {
    location.href='main.html'
  }
  else {
    alert('WRONG ANSWER')
  }
};

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
