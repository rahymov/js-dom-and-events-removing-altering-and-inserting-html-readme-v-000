//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var el = document.createElement('div');
el.innerHTML =  'Hello, DOM!';
el.style.backgroundColor = '#f4f4f4';

document.body.appendChild(el);
el.style.textAlign = 'center';

var ul = document.createElement('ul');

for(let i=0; i<5; i++){
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

el.appendChild(ul);
ul.style.textAlign = 'left';
