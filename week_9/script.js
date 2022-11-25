
//fetch("https://www.omdbapi.com/?s=Harry+Potter&apikey=4bd6c391")



function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
  const numberOfUsers = 10;
  const Auth = document.getElementById('authors');
  const url = 'https://randomuser.me/api/?results=' + numberOfUsers;
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
console.log(data);
      let authors = data.results;
      return authors.map(function(author) {
        
            var img = createNode('img');
            var h5 = createNode('h5');
            var p = createNode('p')
            var column = createNode("div");
            var card = createNode('div');
            var cardBody = createNode('div');


            

            

            cardBody.classList.add('card-body');
            card.classList.add('card');
            column.classList.add("col-3");
            img.classList.add("card-img-top");
            h5.classList.add("card-title");

            p.classList.add('card-title');
            p.classList.add('card-text');
            
            
             
        p.innerHTML = author.email;
        img.src = author.picture.large;
        h5.innerHTML = author.name.first + " " + author.name.last;


        append(card , img);
        append(cardBody,h5);
        append(cardBody, p);
        append(card, cardBody);
        append(column, card);
        append(Auth, column);


        //append(column, img);
        //append(column, h5);
        //append(Auth, column);
        
      })
    })
    .catch(function(error) {
      console.log(error);
    });