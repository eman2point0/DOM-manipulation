console.log("Hello World!");

const container = document.querySelector("#container");

const content = document.querySelector(".content");

const p = document.createElement("p");
p.style.color = "red";
p.innerHTML = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerHTML = "I'm a blue h3!";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "solid 2px black";

const h1 = document.createElement("h1");
h1.innerHTML = "I'm in a div";

const p2 = document.createElement("p");
p2.innerHTML = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

content.append(p);
content.append(h3);
content.append(div);
