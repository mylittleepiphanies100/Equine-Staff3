let container = document.querySelector(".date-show");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 16
    ? "Good Afternoon"
    : "Good evening";
container.innerHTML = `<h4>${greeting}</h4>`;
