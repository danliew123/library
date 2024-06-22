const library = document.querySelector('.library');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');

const myLibrary = [
    {title: 'Mario', author: 'goofy', pages: 100, read: 'read'},
    {title: 'Luigi', author: 'quirky', pages: 323, read: 'not read'},
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get('title');
    console.log(title);
    const author = data.get('author');
    console.log(author);
    const pages = data.get('pages');
    console.log(pages);
    const read = data.get('read');
    console.log(read);
    const newBook = new Book(title, author, pages, read);
    console.log(newBook);
    addBookToLibrary(newBook);
    
    const index = myLibrary.indexOf(newBook)
    const divTitle = document.createElement("div")
    divTitle.textContent = newBook.title
    const divAuthor = document.createElement('div')
    divAuthor.textContent = `By ${newBook.author}`
    const divPages = document.createElement('div')
    divPages.textContent = `${newBook.pages} pages`
    const divRead = document.createElement('div')
    divRead.textContent = newBook.read
    const divBook = document.createElement('div')
    const delet = document.createElement('button')
    delet.textContent = 'Delete'
    delet.addEventListener('click', () => {
        library.removeChild(divBook);
        const index = divBook.getAttribute('index')
        myLibrary.splice(index, 1)
        for (let i = 0; i < myLibrary.length; i++) {
            const booklist = library.querySelectorAll('div.book')
            booklist[i].setAttribute('index', i);
        }
    })
    const toggle = document.createElement('button');
    toggle.textContent = 'Read?'
    toggle.addEventListener('click', () => {
        if (divRead.textContent === 'read') {
            divRead.textContent = 'not read'
        } else if (divRead.textContent === 'not read') {
            divRead.textContent = 'read'
        }
    })
    divBook.append(divTitle, divAuthor, divPages, divRead, toggle, delet)
    divBook.setAttribute('index', (myLibrary.length - 1));
    divBook.classList.add('book')
    library.appendChild(divBook)
    for (let i = 0; i < myLibrary.length; i++) {
        const booklist = library.querySelectorAll('div.book')
        booklist[i].setAttribute('index', i);
    }
})



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

for (let i = 0; i < myLibrary.length; i++) {
    const divTitle = document.createElement("div")
    divTitle.textContent = myLibrary[i].title
    const divAuthor = document.createElement('div')
    divAuthor.textContent = `By ${myLibrary[i].author}`
    const divPages = document.createElement('div')
    divPages.textContent = `${myLibrary[i].pages} pages`
    const divRead = document.createElement('div')
    divRead.textContent = myLibrary[i].read
    const divBook = document.createElement('div')
    divBook.setAttribute('index', i);
    const delet = document.createElement('button')
    delet.textContent = 'Delete'
    delet.addEventListener('click', () => {
        library.removeChild(divBook);
        const index = divBook.getAttribute('index')
        myLibrary.splice(index, 1)
        for (let i = 0; i < myLibrary.length; i++) {
            const booklist = library.querySelectorAll('div.book')
            booklist[i].setAttribute('index', i);
        }
    })
    const toggle = document.createElement('button');
    toggle.textContent = 'Read?'
    toggle.addEventListener('click', () => {
        if (divRead.textContent === 'read') {
            divRead.textContent = 'not read'
        } else if (divRead.textContent === 'not read') {
            divRead.textContent = 'read'
        }
    })
    divBook.append(divTitle, divAuthor, divPages, divRead, toggle, delet);
    
    divBook.classList.add('book');
    library.appendChild(divBook);
}


