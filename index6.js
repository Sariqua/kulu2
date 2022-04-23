//EXAMINE THE DOCUMENT OBJECT//

//Console.dir(document);
//console.log(document.domain);
//console.groupCollapsed(document.title);
//console.log(document.URL);
// //document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//  //document.all[10].textContent="HELLO";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementByid('headre-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.textContent='Goodbye';
// console.log(headerTitle.innerText);
//headerTittle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';

//GETELEMENTSBYCLASSNAME //
//var items=document.gwtElementBYClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello 3';
//items[1].style.fontweight ='bold';
//items[1].style.backgroundcolor='green';

// Gives error
//items.style.backgroundColor='#f4f4f4';


//for(var i=0; i<items.length; i++){
   // items[i].style.backgroundcolor='#f4f4f4';
//}

// GETELEMENTSBYTAGNAME//
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='Hello 2';
//li[1].style.fontweight='bold';
//li[1].style.backgroundcolor='yellow';

//Gives error 
// items.style.backgroundcolor='#f4f4f4';

//for(var i=o; i<li.length; i++){
  //  li[i].style.backgroundColor='#f4f4f4';
//}



//var header= document.querySelector('#man-header');
//header.getElementsByClassName.borderBootom='solid 4px #ccc';

//var input=document.querySelector('input');
//SubmitEvent.value="SEND";

//var item=document.querySelector('.list-group-item');
//item.getElementsByClassName.color='red';

//var lastitem=document.querySelector('.list-group-item:last-child');
//lastitem.getElementsByClassName.color='blue';

//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.getElementsByClassName.color='green';


//QUERYSELECTORALL//
var title=document.querySelectorAll('.title');

console.log(titles);
titles[0].textcontent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var odd=Document.queryselectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
    odd[i].getElementsByClassName.backgroundcolor='f4f4f4';
    even[i].style.backgroundColor='#ccc';
}

