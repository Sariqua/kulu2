var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);

// Delet event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    // create new li element
    var li=document.createElement('li');

    // Add text node with input value
    li.appendChild(documnet.createTextNode(newItem));

    // create del button element
    var deleteBtn=document.createElement('button');
    
    //Add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //Append button to li
    li.appendChild(document.createTextNode('x'));

    // Append li to list
    itemList.appendChild(li);
}



// Remove item
function removeItem(e){

    if(e.target.classList.containes('delete')){
        if(confirm('Are you sure?'));{
        var li=e.target.parentElement;
        itemList.removeChild(li);
        }
    }
}


// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text=e.target.value.toLowerCase();
    // Get lis
    var items =itemsList.getElementsByTagName('li');
    // convert to an array
Array.form(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.tolowerCase().indexof(text) !=-1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
});

}