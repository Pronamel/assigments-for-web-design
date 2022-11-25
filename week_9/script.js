




fetch("https://www.omdbapi.com/?s=Harry+Potter&apikey=4bd6c391")
  .then((resp) => resp.json())
  .then(function(data) {
    // Here you get the data to modify as you please
    })

    .catch(function(error) {
        // If there is any error you will catch them here
      }); 
  


      function createNode(element) {
        return document.createElement(element);
      }
    
      function append(parent, el) {
        return parent.appendChild(el);
      }
      const numberOfUsers = 1;
      const ul = document.getElementById('authors');
      const url = 'https://randomuser.me/api/?results=' + numberOfUsers;
      fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
          let authors = data.results;
          return authors.map(function(author) {
            let li = createNode('li'),
              img = createNode('img'),
              span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
          })
        })
        .catch(function(error) {
          console.log(error); // If there is any error you will catch them here
        });     