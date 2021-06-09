// Book Constructor
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


// UI Constructor
function UI(){}

// Add book to list prototype/function
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');

    // create tr element
    const row=document.createElement('tr');

    // insert cols
    row.innerHTML=`<td>${book.title}</td>
                   <td>${book.author}</td>
                   <td>${book.isbn}</td>
                   <td><a href="#" class="delete">X</a></td>`;

    // append tr to book list(table)
    list.appendChild(row);
}

// showAlert() prototype
UI.prototype.showAlert=function(message,className){
    // create alert div
    const div=document.createElement('div');
    // add class
    div.className=`alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // insert it before
    // Get parent
    const parentContainer=document.querySelector('.container');
    // insert before element
    const form=document.querySelector('#book-form');
    // insert
    parentContainer.insertBefore(div,form);

    // SetTimeout
    window.setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

// Delete Book
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}


// Clear feilds prototype
UI.prototype.clearfields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',function(e){

    // Get form values
    const  UItitle=document.getElementById('title').value,
           UIauthor=document.getElementById('author').value,
           UIisbn=document.getElementById('isbn').value;

    // (Instantiate) Creating obj for book constructor
    const book=new Book(UItitle,UIauthor,UIisbn);

    // Instantiate UI constructor
    const ui=new UI();

    // Validate
    if(UItitle==='' || UIauthor==='' || UIisbn===''){
        // error alert
        ui.showAlert('Please fill in all fields','error');
    }else{
        // Add book to list
        ui.addBookToList(book);

        // success alert
        ui.showAlert('Book Added!','success');

        // clear all inputs
        ui.clearfields();
    }

    e.preventDefault();
});


// Event Listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

    // Instantiate UI con
    const ui=new UI();

    // calling deleteBook func
    ui.deleteBook(e.target);

    // Show alert
    ui.showAlert('Book Removed!','success');

    e.preventDefault();
});
