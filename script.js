let myLibrary = [];

const form = document.getElementById("addBook");
const library = document.getElementById("library");
let i = 0;

form.addEventListener("submit", () => {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked;

	if (read = "true") {
		read = "Not Read"
	}
	else {
		read = "Read"
	}
	
	Book(title, author, pages, read);

	form.reset();
});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	addBookToLibrary(title, author, pages, read);
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push({title, author, pages, read});
	createCards();
}

function createCards() {
	for (i = i; i < myLibrary.length; i++) {
		let card = document.createElement("div");
		card.className = "book";
		let title = document.createElement("h1");
		let author = document.createElement("h1");
		let pages = document.createElement("h1");
		let read = document.createElement("button");
		let remove = document.createElement("button");
		title.innerText = '"' + myLibrary[i].title + '"';
		author.innerText = myLibrary[i].author;	
		pages.innerText = myLibrary[i].pages + " pages";
		read.innerText = myLibrary[i].read;
		remove.innerText = "Remove";
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(read);
		card.appendChild(remove);
		library.appendChild(card);
	}
}




