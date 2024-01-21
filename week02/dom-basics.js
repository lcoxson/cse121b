const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of Image")
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);