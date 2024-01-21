/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Laura M. Coxson";
let currentYear = 2024;
let profilePicture = "images/headshot.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of ${fullName}");

/* Step 5 - Array */
const favoriteFoods = ["Brownies", "Chicken Parmesan", "Feijoada", "Pecan Pie", "French Toast"];
foodElement.innerHTML = `${favoriteFoods}`;
const newFood = "Peanut Butter and Banana Sandwich";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;





