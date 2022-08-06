var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//add submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//edit event


//add item
function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';
  console.log(li);

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create del button element
  var deleteBtn = document.createElement('button');

  //add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
  //Append text node
  deleteBtn.appendChild(document.createTextNode('x'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  
}


//Remove item

function removeItem(e){
  
  if(e.target.classList.contains('delete')){
    if(confirm('Are You sure?')){
      var li=e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}