
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const about_text = `
Python and FrontEnd developer . I don’t claim any expertise and may not have all the experience you would
prefer, but I believe that my enthusiasm and willingness to learn make me a strong candidate. I have good
knowledge of Python OOP, GUI framework Tkinter.I can build normal usage websites without any hassle. Skilled
in database like mysql and sqlite,
Comfortable with version control system(VCS) like Git

`
const contact_text = `
Github: <a href="https://github.com/PankajVishw50" 
            target="_blank">
            PankajVishw50
            </a> <br>
Linkedin: <a href="https://www.linkedin.com/in/pankaj-vishw-4802a9232/" 
            target="_blank">
            Pankaj Vishw
            </a> <br>
Email: rajuvishwakarma8607@gmail.com    
`
const paraTempEl = document.querySelector("#para-temp")
const aboutContact_btn = document.querySelector("#aboutContact-btn")
let condition = "contact";

aboutContact_btn.addEventListener("click", function() {
  about_contact(condition)
})


function about_contact(argument) {
  if (argument === "contact") {
      paraTempEl.innerHTML = contact_text
      aboutContact_btn.textContent = "About"
      condition = "about"
      console.log(condition)

  }else if (argument === "about") {
    paraTempEl.innerHTML = about_text
    aboutContact_btn.textContent = "Contact"
    condition = "contact"
  }
}
