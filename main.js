let url = "https://api.myjson.com/bins/1h3vb3";
getData();

function getData() {
  fetch(url)
    .then(data => data.json())
    .then(json => {
      books = json.books;
      printBooks(books);
    })
    .catch(error => alert(error));

}

function printBooks(books) {
  let template = "";
  books.forEach(book => {
    template += `
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <img class="portada" src="${book.portada}">
        </div>
        <div class="back">
          <p>${book.titulo}</p>
          <p class="desc">${book.descripcion}</p>
          <a data-fancybox="gallery" href="${book.detalle}"><button>More info</button></a>

        </div>
      </div>
    </div>
    `;
  });

  document.querySelector(".container").innerHTML = template;
}

document.getElementById("input").addEventListener("keyup", () => {
  let string = document.getElementById("input").value;
  searchBook(string);
})

function searchBook(string) {
  let newBooks = books.filter(book => {
    return book.titulo.includes(string) || book.descripcion.includes(string);
  });
  printBooks(newBooks);
}
