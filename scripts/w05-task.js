/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")

templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const newArticle = document.createElement("article");
        
        const newH3 = document.createElement("h3");
        newH3.textContent = temple.templeName;

        const newImg = document.createElement("img");
        newImg.setAttribute("src", temple.imageUrl);
        newImg.setAttribute("alt", temple.location);

        newArticle.appendChild(newH3);
        newArticle.appendChild(newImg);

        templesElement.appendChild(newArticle);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templeList = await response.json();
    }

    displayTemples(templeList)
} 

/* reset Function */
const reset = () => {
    templesElement.
}

/* filterTemples Function */


getTemples();

/* Event Listener */


console.log(templeList);