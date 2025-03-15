function init() {
    renderBooks();
}

function renderBooks() {
document.getElementById("main").innerHTML = "";
for (let i = 0; i < books.length; i++) {
    main.innerHTML += getBookTemplate(i);
    }
}

function getBookTemplate(i) {
    return ` 
    <div class="book-box">
        <div class="data-block"></div>
        <div class="like-row"></div>
        <div class="comment-box"></div>
    </div>
    `
}

function addComment(i) {

}