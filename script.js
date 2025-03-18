function init() {
    renderBooks();
}

function renderBooks() {
    document.getElementById("main").innerHTML = "";
    for (let i = 0; i < books.length; i++) {
    main.innerHTML += getBookTemplate(i);


    for (let j = 0; j < books[i].comments.length; j++) {
    `comments${i}`.innerHTML += getCommentsTemplate(i, j);
    };
    }
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
        
        <div class="like-row">
        <p>${books[i].likes}</p> 
        <img class="heart" src="./assets/icons/heart.png" alt="Like" onclick="addLike(i)">
        </div>
        
        <div class="comment-box">
            <h3>Kommentare</h3>
            <div class="input-field">
                <p>Name:</p>    
                <input id="name-input${i}" class="text-input" type="text"></input> 
                <p>Kommentar:</p>    
                <input id="comment-input${i}" class="text-input" type="text"></input> 
                <button class="button" onclick="addComment()">Kommentar absenden</button>
            </div>
            <div class="comments" id="comments${i}"></div>
        </div>
    </div>
    `
}

function addLike(i) {
let likesNumber = document.getElementById(`${books[i].likes}`);
likesNumber.value = `${books[i].likes + 1}`;
addClass="liked-status";
}

function getCommentsTemplate(i, j) {
    return `
    <p>${books[i].comments[j].name}: ${books[i].comments[j].comment}</p>
    `
}

function addComment(i, j) {
    let nameInput = document.getElementById("name-input${i}");
    let commentInput = document.getElementById("comment-input${i}");
    if (nameInput.value != "" && commentInput.value != "") {
        books[i].comments[j].name.push(nameInput.value);
        books[i].comments[j].comment.push(commentInput.value);
    }
    renderBooks();
    nameInput.value = "";
    commentInput.value = "";
}