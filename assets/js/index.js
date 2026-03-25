// ^ Write your JavaScript code here
var allSection = document.querySelectorAll("about");
var aboutSection = document.getElementById("about");
var heroLink = document.querySelector("[href='#hero-section']");
var aboutLink = document.querySelector("[href='#about']");
var bodySection = document.querySelector("body");

document.addEventListener("scroll", () => {
  let sectionTop = aboutSection.offsetTop;
  if (window.scrollY >= sectionTop - 100) {
    document.querySelector("[href='#about']").classList.add("active");
    document.querySelector("[href='#hero-section']").classList.remove("active");
  }
});



// function activeLink() {
//   let sectionTop = aboutSection.offsetTop;
//   if (window.scrollY >= sectionTop - 100) {
//     document.querySelector("[href='#about']").classList.add("active");
//     document.querySelector("[href='#hero-section']").classList.remove("active");
//   }
// }
