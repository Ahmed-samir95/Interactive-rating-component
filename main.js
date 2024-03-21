
let num = document.querySelectorAll(".num li")
console.log(num);
num.forEach((ele) =>{
  ele.addEventListener("click", function(ele) {
    ele.target.classList.toggle("active")
  })
})






