document.addEventListener("DOMContentLoaded", () => {
  const charactersUrl = 'https://api.disneyapi.dev/characters';
  const dataContainer = document.getElementsByClassName('data-container')
  // Fetch character data from server
  fetch(charactersUrl)
    .then(response => response.json())
    .then(characters => {
      // Update character details on the page
      const character = characters.data[0];
      document.querySelector('#films').src = character.films[0];
      document.querySelector('#shortfilms').textContent = character.shortFilms;
      document.querySelector('#tvshows').textContent = character.tvShows;
      document.querySelector('#videoGames').textContent = character.videoGames;
      document.querySelector('#parkAttractions').textContent = character.parkAttractions;
      document.querySelector('#allies').textContent = character.allies;
      document.querySelector('#enemies').textContent = character.enemies;
      document.querySelector('#name').textContent = character.name;
      document.querySelector('#imageUrl').src = character.imageUrl;
      
      // Fetch all characters from server and populate the list
      const characterlist = document.querySelector('#character-list');
      characters.data.forEach(character => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = character.name;
        a.addEventListener('click', () => {
          // Check if character object has a valid id property
          if (character._id) {
            // Fetch character data from server and update character details on the page
            fetch(`${charactersUrl}/${character._id}`)
              .then(response => response.json())
              .then(character => {
                document.querySelector('#films').textContent= character.films[0];
                document.querySelector('#shortfilms').textContent = character.shortFilms;
                document.querySelector('#tvshows').textContent = character.tvShows;
                document.querySelector('#videoGames').textContent = character.videoGames;
                document.querySelector('#parkAttractions').textContent = character.parkAttractions;
                document.querySelector('#allies').textContent = character.allies;
                document.querySelector('#enemies').textContent = character.enemies;
                document.querySelector('#name').textContent = character.name;
                document.querySelector('#imageUrl').src= character.imageUrl;
                document.querySelector('#likes').textContent=character.likes;
                //Uovote and Downvote button
                const upvoteButton = document.createElement('button');
                upvoteButton.textContent = 'like';
                dataContainer.appendChild(upvoteButton)
                

              })
              .catch(error => {
                console.error(error);
              });
          } else {
            console.error('Character does not have a valid id property');
          }
        });
        li.appendChild(a);
        characterlist.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
    });
  });
