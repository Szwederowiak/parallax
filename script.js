const elements = [].slice.call(document.getElementsByClassName("rellax"));

const rellaxes = [];

for (let i = 0; i <= elements.length; i++) {
  rellaxes.push(new Rellax(elements[i]));
  elements[i].setAttribute(
    "data-rellax-speed",
    Math.ceil(Math.random() * 6) - 3
  );
  elements[i].setAttribute("data-rellax-percentage", "0.5");
}
