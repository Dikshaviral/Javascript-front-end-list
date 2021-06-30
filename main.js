var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);

function addItem(e) 
{
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'd-inline-flex justify-content-between list-group-item';
    var h4 = document.createElement('h4');
    li.appendChild(h4);
    h4.appendChild(document.createTextNode(newItem));
    var but = document.createElement('button')
    but.className = "btn bg-success btn-md";
    but.appendChild(document.createTextNode("Done"));
    li.appendChild(but)
    itemList.appendChild(li);

}
function removeItem(e)
{
    if(e.target.classList.contains("btn"))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
   
}