class Book {
  constructor(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }
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

        const readToggle = document.createElement('button');
        readToggle.textContent = readStatus ? 'Read' : 'Not Read'
        
        readToggle.style.backgroundColor = readStatus ? 'green' : 'red';

        readToggle.addEventListener('click', function() {
          changeReadStatus(i);
        })
        readStatusCell.appendChild(readToggle);
        row.appendChild(readStatusCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'x';
        button.addEventListener('click', function() {
            removeBook(i);
            console.log('Button clicked for book:', library[i]);
        });
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
      }
    }
    
    
    printLibrary(myLibrary);
    
//modal

let modal = document.getElementById("modal");
let modalForm = document.getElementById("modal-form");
let btn = document.getElementById("add");
let span = document.getElementsByClassName("close")[0];

let submit = document.getElementById('submit');


function addBookToLibrary(event) {
  event.preventDefault();
  
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let readStatus = document.getElementById('read-status').value;
  let newBook = new Book(author, title, pages, readStatus)
  
  myLibrary.push(newBook);

  printLibrary(myLibrary);  
  modal.style.display = "none";
  return false;
}


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
function removeBook(index) {
  //verify parameters
  if (index >= 0 && index < myLibrary.length) {
      //remove row
      myLibrary.splice(index, 1);
      //print new
      printLibrary(myLibrary);
  }
}
function changeReadStatus(i) {
    //verify parameters
  if (i >= 0 && i < myLibrary.length) {

    myLibrary[i].readStatus = !myLibrary[i].readStatus;
    //print new
    printLibrary(myLibrary);
}
}
