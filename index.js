const charactersurl = 'http://localhost:3000/characters';
      // Fetch character data from server
      fetch(`${charactersurl}/1`)
        .then(response => response.json())
        .then(character=> {
          // Update character details on the page
          document.querySelector('#films').src = character.films;
          document.querySelector('#shortfilms').textContent = character.shortfilms;
          document.querySelector('#tvshows').textContent = character.tvshows;
          document.querySelector('#videoGames').textContent = character.videoGames;
          document.querySelector('#parkAttractions').src = character.parkAttractions;
          document.querySelector('#allies').textContent = character.allies;
          document.querySelector('#enemies').textContent = character.enemies;
          document.querySelector('#name').textContent = character.name;
          document.querySelector('#imageUrl').textContent = character.imageUrl;
          
        });
      // Fetch all characters from server and populate the list
      fetch(charactersurl)
        .then(response => response.json())
        .then(characters => {
          const characterlist = document.querySelector('#name');
          characters.forEach(character => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = characters.title;
            a.addEventListener('click', () => {
              // Fetch charachter data from server and update movie details on the page
              fetch(`${charactersUrl}/${character.id}`)
                .then(response => response.json())
                .then(character=> {
                  document.querySelector('#films').textContent = character.films;
                  document.querySelector('#shortfilms').textContent = character.shortfilms;
                  document.querySelector('#tvshows').textContent = character.tvshows;
                  document.querySelector('#videoGames').textContent = character.videoGames;
                  document.querySelector('#parkAttractions').textContent = character.parkAttractions;
                  document.querySelector('#allies').textContent = character.allies;
                  document.querySelector('#enemies').textContent = character.enemies;
                  document.querySelector('#name').textContent = character.name;
                  document.querySelector('#imageUrl').src= character.imageUrl;
                  
                });
            });
            li.appendChild(a);
            characterlist.appendChild(li);
          });
        });