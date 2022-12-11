
//fetch("https://www.omdbapi.com/?s=Harry+Potter&apikey=4bd6c391")



function createNode(element) {
    return document.createElement(element);
}

  function append(parent, el) {
    return parent.appendChild(el);
}
  
  
  
//const movieContainer = document.getElementById("Movie");
//const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4bd6c391';
  
  

  
  
  
  
//const numberOfUsers = 10;
const MovieCollection = document.getElementById('Movie');
const url = 'https://www.omdbapi.com/?s=Star+Wars&apikey=4bd6c391';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Movie = data.Search;
    return Movie.map(function(Movie){

         
         
        var img = createNode('img');
        var h5 = createNode('h5');
        var p = createNode('p')
        var column = createNode("div");
        var card = createNode('div');
        var cardBody = createNode('div');
        var button = createNode('div');


            

            
        button.classList.add('btn');
        button.classList.add('btn-primary');
        cardBody.classList.add('card-body');
        card.classList.add('card');
        column.classList.add("col-3");
        img.classList.add("card-img-top");
        h5.classList.add("card-title");

        p.classList.add('card-title');
        p.classList.add('card-text');
            
            
             
        p.innerHTML = Movie.Year;
        img.src = Movie.Poster;
        h5.innerHTML = Movie.Title;
        button.innerHTML = "Furhter Deatils";


        append(card , img);
        append(cardBody,h5);
        append(cardBody, p);
        append(card, cardBody);
        append(card, button)
        append(column, card);
        append(MovieCollection, column);

    })

  })
  .catch(function(error){

    console.log(error);
  });

 


  /**  const MovieCollection = document.getElementById('Movie');
  const url = 'https://www.omdbapi.com/?s=Harry+Potter&apikey=4bd6c391';
  
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data)
    {
  
  console.log(data);
  
      var Movie = data.Search;
      return Movie.map(function(Movie){
  
  
          var img = createNode('img');
  
          img.src = Movie.Poster;
  
          append(MovieCollection , img);
      })
  
    })
    .catch(function(error){
  
      console.log(error);
    });
*/ 