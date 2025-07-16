/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {



// Introducing JavaScript Object Notation (JSON): https://json.org/
// STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
// STEP 4b: Store the URL of a JSON file in a variable */
let url = "https://harshdeep-singh-dev.github.io/JS-Week10/js/i-scream.json";
// STEP 5: Use the new URL to create a new request object
let request = new Request(url);
console.log(request);
// STEP 6: Make a network request with the fetch() function, which returns a Response object
let Response = await fetch(request)
console.log(Response);
// STEP 7: Capture the returned Response object and covert to a JSON object using json()
let responseJSON = await Response.json();
console.log(responseJSON);
// STEP 8: Output the iScream JSON object to the console

// STEP 9a: Invoke the populateHeader function here, then build it below
populateHeader(responseJSON);
// STEP 10a: Invoke the showTopFlavors function here, then build it below
showTopFlavors(responseJSON);
}
// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(responseJSON) {
    // Create the H1 element
    let h1 = document.createElement("h1");
    let para = document.createElement("p");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = responseJSON.companyName;
    para.textContent = `Head Office: ${responseJSON.headOffice} | Established: ${responseJSON.established} | Active: ${responseJSON.active}`;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
    header.appendChild(para);
}
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(responseJSON) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    let topFlavors = responseJSON.topFlavors;
    console.log(topFlavors);
    // STEP 10d: Loop through the topFlavors object
    for(flavour of topFlavors) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("figure");
        let p1 = document.createElement("p");  
        let p2 = document.createElement("p");
        let list = document.createElement("ul");
        
        h2.textContent = flavour.name;
        image.innerHTML = `<img src="${flavour.image}" alt="${flavour.name}">`;
        p1.textContent = `Calories: ${flavour.calories} | Type: ${flavour.type}`;
        list.textContent = `Ingredients:`;

        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);

        section.appendChild(article);

        for(ingredient of flavour.ingredients) {
            let li = document.createElement("li");
            li.textContent = ingredient;
            list.appendChild(li);
        }

        
        

    }
    // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
    // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
    // STEP 10g: Build a loop for the ingredients array in the JSON
    // add the ingredient to the UL
    // STEP 10h: Append each of the above HTML elements to the ARTICLE element
    // STEP 10i: Append each complete ARTICLE element to the SECTION element
}
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
