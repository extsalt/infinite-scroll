// install a intersection observer api
// step 1: define a sentinel
// step 2: define a target, here it will be viewport

var options = {
  threshold: 0.1,
};

// quote template
var template = document.querySelector(".js-template-quote");
var contents = document.querySelector("#contents");

//define callback
function intersectionCallback(entries, k) {
  entries.forEach((element, e) => {
    if (element.isIntersecting) {
      console.log("Fetching content");
      contents.appendChild(getQuoteElement());
    }
  });
}

// setup observer
var observer = new IntersectionObserver(intersectionCallback, options);

// setup sentinel
var sentinel = document.getElementById("sentinel");

// install observer
observer.observe(sentinel);

// create quote element
function getQuoteElement() {
  var t = template.cloneNode();
  t.classList = "quote";
  t.style.display = "block";
  t.src = "https://place.dog/300/200";
  return t;
}
