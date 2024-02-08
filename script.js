//book constructor
function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

//library array
let myLibrary = [
    new Book("F. Scott Fitzgerald", "The Great Gatsby", 180, true),
    new Book("Harper Lee", "To Kill a Mockingbird", 320, false),
    new Book("George Orwell", "1984", 301, true),
    new Book("JRR Tolkien", "LOTR", 499, false)
];

function printLibrary(library) {
    const tableBody = document.getElementById('bookTableBody');

    // Clear existing rows
    tableBody.innerHTML = '';

    for (let i = 0; i < library.length; i++) {
        const { author, title, pages, readStatus } = library[i];

        const row = document.createElement('tr');

        const authorCell = document.createElement('td');
        authorCell.textContent = author;
        row.appendChild(authorCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = title;
        row.appendChild(titleCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = pages;
        row.appendChild(pagesCell);

        const readStatusCell = document.createElement('td');
        readStatusCell.textContent = readStatus ? 'Read' : 'Not Read';
        row.appendChild(readStatusCell);

        tableBody.appendChild(row);
    }
}




function addBookToLibrary() {
  // do stuff here
}

printLibrary(myLibrary);


//modal
let submit = document.getElementById('submit');

let modalForm = document.getElementById("modal-form");
modalForm.addEventListener('submit', submitForm)
let btn = document.getElementById("add");
let span = document.getElementsByClassName("close")[0];


function submitForm(event) {
  event.preventDefault();
  
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let readStatus = document.getElementById('status').value;

  
  let newBook = new Book(author, title, pages, readStatus)
  
  myLibrary.push(newBook);
  console.log(newBook);
  modal.style.display = "none";
  printLibrary(myLibrary); 
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}