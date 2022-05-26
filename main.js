const form = document.querySelector("form");
const personName = document.querySelector("#name");
const mass = document.querySelector("#mass");
const hieght = document.querySelector("#hieght");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const n = personName.value;
  const x = Number(mass.value);
  const y = Number(hieght.value);
  const z = parseInt(x / y ** 2);

  result.innerHTML = `<p>Name: <span>${n}</span> <br/> BMI: <span>${z}</span></p>`;
  console.log(`Name: ${n} BMI: ${z}`);
  personName.value = "";
  mass.value = "";
  hieght.value = "";
});
