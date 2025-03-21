function init() {
  renderBooks();
}

function renderBooks() {
  let booksRef = document.getElementById("main");
  booksRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    booksRef.innerHTML += getBookTemplate(i);
    heartShadow(i);
    let commentsRef = document.getElementById(`comments${i}`);
    commentsRef.innerHTML = "";
    for (let j = 0; j < books[i].comments.length; j++) {
      commentsRef.innerHTML += getCommentsTemplate(i, j);
    }
  }
}

function heartShadow(i) {
  let heartRef = document.getElementById(`hearticon${i}`);
  if (books[i].liked == true) {
    heartRef.classList.add("liked-shadow");
  } else {
    heartRef.classList.remove("liked-shadow");
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
        <img class="heart" src="./assets/icons/heart.png" id="hearticon${i}" alt="Like" onclick="addLike(${i})">
        </div>
        
        <div class="comment-box">
            <h3>Kommentare</h3>
            <div class="input-field">
                <p>Name:</p>    
                <input id="name-input${i}" class="text-input" type="text"></input> 
                <p>Kommentar:</p>    
                <input id="comment-input${i}" class="text-input" type="text"></input> 
                <button class="button" onclick="addComment(${i})">Kommentar absenden</button>
            </div>
            <div class="comments" id="comments${i}"></div>
        </div>
    </div>
    `;
}

function addLike(i) {
  if (books[i].liked == false) {
    let likesNumber = books[i].likes + 1;
    books[i].likes = likesNumber;
    books[i].liked = true;
    renderBooks();
  } else {
    let likesNumber = books[i].likes - 1;
    books[i].likes = likesNumber;
    books[i].liked = false;
    renderBooks();
  }
}

function getCommentsTemplate(i, j) {
  return `
    <p>${books[i].comments[j].name}: ${books[i].comments[j].comment}</p>
    `;
}

function addComment(i) {
  let nameInput = document.getElementById(`name-input${i}`);
  let commentInput = document.getElementById(`comment-input${i}`);
  if (nameInput.value != "" && commentInput.value != "") {
    let newComment = { name: nameInput.value, comment: commentInput.value };
    books[i].comments.push(newComment);
    renderBooks();
    nameInput.value = "";
    commentInput.value = "";
  }
}
