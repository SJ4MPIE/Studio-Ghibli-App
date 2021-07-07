/*
Author: Samuel W.R. Tieman: https://github.com/SJ4MPIE
Credits: Tania Rascia: https://github.com/taniarascia
Tutorial: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

Loading in JSON (Javascript object notation) through API (Application programming interface)

Note: This repo is based of a tutorial written by Tania Rascia. 
However, in the tutorial they still make use of XHR objects(XMLHttpRequest JavaScript ES5) 
So I decided to update the code using the fetch() API (JavaScript ES6)

Version: 1.0 
*/

//Get element with the id of 'root'
const app = document.getElementById('root');

//Create a new image element and stores it in variable named logo
const logo = document.createElement('img');

//Set source attribute of logo 
logo.src = 'img/logo.png';

//Create a new divison element and stores it in variable named container
const container =  document.createElement('div');

//Set class (class="container") attribute of container
container.setAttribute('class', 'container');

//Add the created elements inside the root div
app.appendChild(logo)
app.appendChild(container)

async function catchJson(){
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const movies = await response.json();
    
    movies.forEach(movie => {
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        //Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        //Create a p and set the text content to the film's description
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300) //Limit to 300 chars
        p.textContent = `${movie.description}...` //End with Ellipses

        //Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p element
        card.appendChild(h1);
        card.appendChild(p)
        });


}

catchJson();