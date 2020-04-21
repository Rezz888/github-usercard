/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardsL = document.querySelector('.cards');

axios.get("https://api.github.com/users/Rezz888")

.then((response)=>{
  console.log(response);
  
  cardsL.appendChild(componentFunction(response.data))

})
.catch((err)=>{
  
})

// console.log(axios);


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  tetondan,
  dustinmyers,
  justsml,
  luishrd,
  bigknell
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function componentFunction(dataP){

const cardContainer = document.createElement('div');
cardContainer.classList.add('card');

const image = document.createElement('img');
image.src = dataP.avatar_url;
cardContainer.appendChild(image);

const cardInfo = document.createElement('div');
cardInfo.classList.add('card-info');
cardContainer.appendChild(cardInfo);

let userName = document.createElement('h3');
userName.classList.add('name');
userName.textContent = dataP.name;
cardInfo.appendChild(userName);

const p1 = document.createElement('p');
p1.classList.add('username');
p1.textContent = dataP.login;
cardInfo.appendChild(p1);

const p2 = document.createElement('p'); 
p2.textContent = dataP.location;
cardInfo.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Profile: ';
cardInfo.appendChild(p3);


const anchorT = document.createElement('a');
anchorT.href = dataP.html_url;
anchorT.textContent = dataP.html_url;
p3.appendChild(anchorT);

const p4 = document.createElement('p');
p4.textContent = `Followers: ${dataP.followers}`;
cardInfo.appendChild(p4);

const p5 = document.createElement('p');
p5.textContent = `Following: ${dataP.following}`;
cardInfo.appendChild(p5);

const p6 = document.createElement('p');
p6.textContent = `Bio: ${dataP.bio}`;
cardInfo.appendChild(p6);

return cardContainer;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

