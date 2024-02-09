/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Laura M. Coxson",
    photo: "images/headshot.jpg",
    favoriteFoods: [
        "French Toast", 
        "Potatoes",
        "Feijoada", 
        "Orange Chicken"],
    hobbies: [
        "Piano",
        "Crochet",
        "Reading",
        "Gardening"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Kanab, UT",
        length: "3 years"
    },
    {
        place: "Salem, UT",
        length: "4 years"
    },
    {
        place: "Spanish Fork, UT",
        length: "19 years"
    },
    {
        place: "Provo, UT",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo)

document.querySelector("#photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    document.querySelector("#favorite-foods").appendChild(newLi);
});

/* Hobbies List */

myProfile.hobbies.forEach(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    document.querySelector("#hobbies").appendChild(newLi);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(item => {
    const newDt = document.createElement("dt");
    newDt.innerHTML = item.place;
    const newDd = document.createElement("dd");
    newDd.innerHTML = item.length;

    document.querySelector("#places-lived").appendChild(newDt);
    document.querySelector("#places-lived").appendChild(newDd);
});

