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
var items=document.gwtElementBYClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontweight ='bold';
items[1].style.backgroundcolor='yellow';