let myLibrary = [];

const form = document.getElementById("addBook");
const library = document.getElementById("library");
const openModal = document.getElementById("add-book");
const closeModal = document.querySelector(".close")
const modal = document.querySelector(".bg-modal")
let index = 0;

form.addEventListener("submit", () => {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked;

	if (read === true) {
		read = "Not Read";
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
	myLibrary.push({title, author, pages, read, index});
	createCards();
	modal.style.display = "none";
}
	
function createCards() {
	library.innerText = "";
	index = 0;
	for (i = 0; i < myLibrary.length; i++) {
		let card = document.createElement("div");
		card.className = "book";
		card.setAttribute('data-index', index);
		let title = document.createElement("h1");
		let author = document.createElement("h1");
		let pages = document.createElement("h1");
		let read = document.createElement("button")
		let remove = document.createElement("button");
		read.className = "readOrNot";
		remove.className = "remove";
		title.innerText = '"' + myLibrary[i].title + '"';
		author.innerText = myLibrary[i].author;	
		pages.innerText = myLibrary[i].pages + " pages";
		read.innerText = myLibrary[i].read;
		remove.innerText = "Remove";
		if (read.innerText == "Not Read") {
			card.classList.add("book-is-read");
		}
		else {
			card.classList.add("book-is-not-read");
		}
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(read);
		card.appendChild(remove);
		library.appendChild(card);
		index++;
	}

	remove();
	readOrNot();
}

function remove() {
	let removeBtns = document.querySelectorAll(".remove");
	removeBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			let parent = btn.parentElement
			let bookIndex = parseInt(parent.dataset.index);
			myLibrary.splice(bookIndex,1);
			createCards();
		});
	});
}

function readOrNot() {
	let readBtns = document.querySelectorAll(".readOrNot");
	readBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			let currentStatus = btn.innerText;
			let parent = btn.parentElement;
			let bookIndex = parseInt(parent.dataset.index);

			if (currentStatus == "Read") {
				myLibrary[bookIndex].read = "Not Read";
			}
			else if (currentStatus == "Not Read") {
				myLibrary[bookIndex].read = "Read";	
			}
			createCards();
		})
	});
}

openModal.addEventListener("click", () => {
	modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
	modal.style.display = "none";
	form.reset();
});
