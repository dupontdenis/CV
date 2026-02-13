// Pick a random person number 0-99 and set the profile image

const img = document.querySelector(".resume-photo");

const n = Math.floor(Math.random() * 100); // 0-99

img.src = `https://randomuser.me/api/portraits/men/${n}.jpg`;
console.log(
  `Set profile image to https://randomuser.me/api/portraits/men/${n}.jpg`,
);


// Set all date elements to the current year

const dateElements = document.querySelectorAll("[data-date]");
const currentYear = new Date().getFullYear();

dateElements.forEach((el) => {
  el.textContent = currentYear;
});