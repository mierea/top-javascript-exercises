// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement("p");
para.textContent = 'Hey I\'m red!';
para.style.cssText = 'color: red';

container.appendChild(para);


const headerText = document.createElement("h3");
headerText.textContent = 'Hey I\'m  blue h3!';
headerText.style.cssText = 'color: blue';

container.appendChild(headerText);


const divContainer = document.createElement("div");
divContainer.style.cssText = 'border: 1px black solid; background-color: pink;';
divContainer.innerHTML = "<h1>I'm in a div</h1><p>ME TOO!</p>"
container.appendChild(divContainer);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("2nd button");

const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', () => {
    alert('3rd button');
});


// <!-- the HTML file -->
// <!-- METHOD 1 -->
// <button onclick="alertFunction()">CLICK ME BABY</button>
// the JavaScript file
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
  
//   // METHOD 2
//   btn.onclick = alertFunction;
  
//   // METHOD 3
//   btn.addEventListener('click', alertFunction);