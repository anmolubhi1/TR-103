// let h1 = document.getElementById("heading1")
// console.log(h1)
// h1.innerText = 'Welcome to Ludhiana'

// let div = document.getElementsByTagName("div")[0]
// div.innerHTML = `<h1>Hi Numitech SOLUTIONS</h1>`

// div.style.color = "red"
// div.style.background = "yellow"

let body = document.getElementsByTagName("body")[0];
// body.classList.add("dark")
// body.classList.remove("dark")
let button = document.getElementById("dark-btn");
let new_box_btn = document.getElementById("new_box_btn");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
});

new_box_btn.addEventListener("click", () => {
  let new_div = document.createElement("div");
  new_div.style.height = "200px";
  new_div.style.width = "200px";
  new_div.style.border = "1px solid red";
  new_div.innerText = `I am a new box`;
  body.appendChild(new_div);
  let remove_btn = document.getElementById("remove_btn");
  remove_btn.addEventListener("click", () => {
    new_div.remove()
  });
});
