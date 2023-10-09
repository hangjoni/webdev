let count = 0;
const addBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const countElem = document.getElementById("count");

addBtn.addEventListener("click", () => {
  count++;
  countElem.innerText = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  countElem.innerText = count;
});
