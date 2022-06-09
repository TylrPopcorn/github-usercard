import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan', "dustinmyers", 'justsml', 'luishrd', "bigknell"];

followersArray.forEach(function (val) {
  getGitCard(val)
}

function getGitCard(username) {
    axios.get(`https://api.github.com/users/${username}`).then(function (value) {// If it does work successfully. 
      document.querySelector('.cards').appendChild(createCard(value.data));
    }).catch(function () { //in case it doesnt work successfully.
      console.error("It didn't work")
    })
  }



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

function createCard(obj) {
    // obj = obj.data;

    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const newImage = document.createElement("img");
    newCard.appendChild(newImage);
    newImage.src = obj["avatar_url"];
    newImage.alt = "github user";

    const cardInfo = document.createElement("div")
    cardInfo.classList.add("card-info");
    newCard.appendChild(cardInfo);
    const Name = document.createElement('h3');
    Name.textContent = obj.name;
    Name.classList.add("name");
    cardInfo.appendChild(Name);
    const userName = document.createElement("p");
    userName.classList.add("username");
    userName.textContent = obj.login;
    cardInfo.appendChild(userName);
    const Location = document.createElement("p");
    Location.textContent = ('Location: ' + obj.location);
    cardInfo.appendChild(Location);

    const Profile = document.createElement("p")
    Profile.textContent = "Profile:"
    cardInfo.appendChild(Profile)
    const address = document.createElement("a");
    address.href = obj.html_url;
    Profile.appendChild(address);

    const followers = document.createElement("p")
    followers.textContent = 'Followers: ' + obj.followers;
    cardInfo.appendChild(followers);
    const following = document.createElement("p")
    following.textContent = 'Following: ' + obj.following;
    cardInfo.appendChild(following);
    const bio = document.createElement("p")
    bio.textContent = 'Bio: ' + obj.bio;
    cardInfo.appendChild(bio);

    return newCard;
  }

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
