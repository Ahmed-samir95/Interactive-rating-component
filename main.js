
let num = document.querySelectorAll(".num li")
let numArr = Array.from(num)

let btn = document.querySelector(".btn")

let rat = document.querySelector(".rat")

let ratNum = document.querySelector("h5")
console.log(ratNum);

console.log(num);
numArr.forEach((li) =>{
  li.addEventListener("click", function(ele) {
    numArr.forEach(ele => {
      ele.classList.remove("active")
    });
    ele.target.classList.add("active")
  })
})

btn.addEventListener("click", (e) =>{
  rat.style.display = "block"
})






