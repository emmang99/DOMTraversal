/*

query selector and query selector all are flexible but not live.  They are great for finding
elements that are on the page by default.  Lets try them out!

*/
/*
--------------------TO DO-------------
Question 1: selecting and console logging with querySelector

select the title of the landing section with a query selector and display it in console.log
eg.  const landingTitle = document.querySelector('#foo > div.bar')
*/
const landingTitle = document.querySelector('#landing > h1');
console.log(landingTitle);

/*
     what is the different between #foo > div.bar  #foo div.bar?
     the  > sign, which makes reference to a direct descendent, div.bar would have to be the direct
     child of #foo
*/

/*
--------------------TO DO-------------
Question 2: selecting elements with querySelectorAll

select all li elements that give the purchaser double_fleeb and display them with console.log
eg.  const myElements = document.querySelectorAll('.bar')
*/
const myElements = document.querySelectorAll('li.double_fleeb');
console.log(myElements);


/*
--------------------TO DO-------------
Question 3: using array.from with forEach

    we can use array methods for the results of querySelectorAll, because they come back as a
    node list, but that doesn't mean that we are stuck!  We can convert the list to an array with
    the array.from()

    Array.from(myElements).forEach(doSomethingWithEachElement)

     console.log each element using array.from remember your fat arrow for this one!
*/


/*This makes a new array from the node list, forEach logs each of the elements*/
let doubleFleeb = Array.from(myElements).forEach(double_fleeb => console.log(double_fleeb));

/*
     we also have access to a number of methods in each of these elements like:
      myElement.children
      myElement.firstElementChild
      myElement.lastElementChild
      myElement.previousElementSibling
      myElement.nextElementSibling

      myElement.childNodes
      myElement.firstChild
      myElement.lastChild
      myElement.previousSibling
      myElement.nextSibling
      myElement.parentNode
      myElement.parentElement


     --------------------TO DO-------------
     Question 4:  Using selection methods to walk the dom using the methods above!

     for the first element in the double fleeb array, console log the following:
     -parent node
     -next element sibling
     -first element child

*/

let parent = doubleFleeb.parentNode;
console.log(parent);

let next_sibling = doubleFleeb.nextElementSibling;
console.log(next_sibling);

let first_element_child = doubleFleeb.firstElementChild;
console.log(first_element_child);

/*
     We also have the ability to modify the classes attached to any element with:
      myElement.classList.add('foo')
      myElement.classList.remove('bar')
      myElement.classList.toggle('baz')


      --------------------TO DO-------------
      Question 5:  make a class in the css section and link it in the javascript!


      create a class that would make the background colour green, call it martianSkin
      add the class to the figcaption in the first child of fleebs
*/

let figcaption = doubleFleeb.getElementsByTagName("figure");
figcaption.classList.add('martianSkin');

figcaption.style.marginLeft = '2em';

/*
     don't want to add a class?  Perhaps you just want to change the style?  eg.
     myElement.style.marginLeft = '2em'

     --------------------TO DO-------------
     Question 6: changing a style in javascript

     now lets change the top padding of the figcaption to 10px;
*/

figcaption.style.paddingTop = '10px';

/*
      We can also change the text or html of elements with:
      .innerHTML
      .innerText

      --------------------TO DO-------------
      Question 7:  use the properties shown above to change the page text

      change the figcaption to say "My tentacles are dayglow green!"
*/

figcaption.innerHTML = "My tentacles are dayglow green!";

/*
      we can even create elements:
      const myNewElement = document.createElement('div')

      once we have an element we can also append new elements onto it or before it with:
      // Append element2 as the last child of element1
      element2 = document.createElement("p");
      p.innerText = "I don't like food anymore";
      element1.appendChild(element2)

      // Insert element2 as child of element 1, right before element3
      element1.insertBefore(element2, element3)

      //element1.innerHTML += `bork bork!`

      --------------------TO DO-------------
      Question 8:  putting it together, find a list element and add a new product to it

      find the specials list, create a new product, and append your new product to the end of the list
*/

const newProduct = document.createElement("li");
let specialList = document.querySelector("#specials > ul");
specialList.appendChild(newProduct);

/*
      or destroy elements with:
      myParentElement.removeChild(myElement)
      myElement.parentNode.removeChild(myElement)

      --------------------TO DO-------------
      Question 9:  using the methods shown above remove an h6 tag from the landing

      lets remove the h6 in the landing!

*/

let heading6 = document.querySelector("#landing > h6");
let theLanding = document.querySelector("#landing");
theLanding.removeChild(heading6);
