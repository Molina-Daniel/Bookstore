let url = "https://api.myjson.com/bins/1h3vb3";
let books;
console.log("HOLA");

fetch(url)
  .then(data => data.json())
  .then(json => {
    books = json.books;
    printBooks();
  })
  .catch(error => alert(error));


function printBooks() {
  let template = "";
  books.forEach(book => {
    template += `
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <img class="portada" src="${ book.portada}">
        </div>
        <div class="back">
          <p>${ book.titulo}</p>
          <p class="desc">${ book.descripcion}</p>
          <button>More info</button>

        </div>
      </div>
    </div>
    `;
  });

  document.querySelector(".container").innerHTML = template;
}

