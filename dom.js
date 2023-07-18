const container=document.querySelector('#container');

//creating an element div, with a class 'content' and appending to container id
const content=document.createElement('div');
content.classList.add('content');
content.textContent='This is a sentence which goes inside content';
container.appendChild(content);

//creating an element p and appending to container id
const p=document.createElement('p');
p.style.color='red';
p.textContent='Hey I’m red!';
container.appendChild(p);

//creating an element h3 and appending to container id
const h3 = document.createElement('h3');
h3.style.color='blue';
h3.textContent='I’m a blue h3';
container.appendChild(h3);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”*/
const newDiv=document.createElement('div');
newDiv.setAttribute('style','border-color:black; background:pink');
//line break
const h1 =document.createElement('h1');
h1.textContent="I'm in a div";
const paragraph = document.createElement('p');
paragraph.textContent='ME TOO!';
//line break
newDiv.appendChild(h1);
newDiv.appendChild(paragraph);
container.appendChild(newDiv);
