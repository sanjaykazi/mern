// outerHTML
// use innerHTML when modifying only the inner content, and outerHTML when you need to replace or retrieve the element as a whole.
// textContent: returns entire content of that particular tag, class or id.
// innerText: returns just the rendered part of the particular tag, class or id.

let mydiv = document.querySelector("#parent")
let newElement = document.createElement('span')
newElement.textContent = 'Hello'
mydiv.insertAdjacentElement('afterend', newElement)

// let parent = child.parentElement
let child = document.getElementById("child1")
let parent = child.parentElement
parent.removeChild(child)