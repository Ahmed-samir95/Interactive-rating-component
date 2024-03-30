
let num = document.querySelectorAll(".num li")
let numArr = Array.from(num)

let numLen = num.length

let btn = document.querySelector(".btn")

let rat = document.querySelector(".rat")

let ratNum = document.querySelector("h5")
console.log(numLen);

console.log(num);
numArr.forEach((li) =>{
  li.addEventListener("click", function(ele) {
    numArr.forEach(ele => {
      ele.classList.remove("active")
    });
    ele.target.classList.add("active")
    ratNum.innerHTML = `You selected ${ele.target.innerHTML} out of ${numLen}`
  })
})

btn.addEventListener("click", () =>{
  rat.style.display = "block"
})






