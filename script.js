function init() {
    renderBooks();
}

function renderBooks() {
document.getElementById("main").innerHTML = "";
for (let i = 0; i < books.length; i++) {
    main.innerHTML += getBookTemplate(i);
};
    for (let j = 0; j < books[i].comments.length; j++) {
        `comments${j}`.innerHTML += getCommentsTemplate(i, j);
    };
    }


function getBookTemplate(i) {
    return ` 
    <div class="book-box">
        <div class="data-block">
            <h2>${books[i].title}</h2>
            <p>${books[i].author}</p>
            <p>${books[i].price.toFixed(2)} €</p>
            <p>${books[i].publishedYear}</p>
            <p>${books[i].genre}</p>
        </div>
        <div class="like-row"></div>
        <div class="comment-box">
            <h3>Kommentare</h3>
            <div class="input-field">
                <p>Name:</p>    
                <input id="name-input" class="text-input" type="text"></input> 
                <p>Kommentar:</p>    
                <input id="comment-input" class="text-input" type="text"></input> 
                <button class="button" onclick="addComment()">Kommentar absenden</button>
            </div>
        </div>
    </div>
    `
}

function getCommentsTemplate(i, j) {

}

function addComment(i, j) {

}