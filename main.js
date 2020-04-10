
// внутренняя высота окна браузера

// alert(window.innerHeight);
const br = '<br>';
// Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему дочернему элементу.

// Примерi ниже последовательно выведет детей document.body:

// between  children and childNodes is the childNodes return empty line but children only the elemnt 
// children – коллекция детей, которые являются элементами.
// firstElementChild, lastElementChild – первый и последний дочерний элемент.
// previousElementSibling, nextElementSibling – соседи-элементы.
// parentElement – родитель-элемент.
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     document.write(document.body.childNodes[i]  );
 
// }


// for (let node of document.body.children) {
//     document.write(node);
// }



// document.write(document.body.childNodes.length);
// document.write(document.body.childNodes[2]);



// alert(document.body.parentNode === document.documentElement ); 

// alert(document.head.nextSibling); //next elemnt
// alert(document.body.previousSibling); // after element

// console.log(document.getElementById('as').parentElement)
// document.write(document.body.children[1].children[1].innreHTML);


// Поиск: getElement*, querySelector*


// let table = document.getElementById("table");
//  table.style.background ='red';
//  table.style.padding = "30px"

// elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.

//  let none = document.querySelectorAll("ul > li:last-child");

//  for (let a of none) {
//     alert(a.innerText)
//  }

// let a = document.querySelectorAll(":hover");
// a.style.background = 'red'



function MyFunction(){
    let div = document.querySelectorAll("ul");
    console.log(div[0].style.color= 'red');
    div[0].style.background='black'
    
};
let t = 0;


// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false.
// for (let elm of document.getElementsByTagName('nav')[1].children) {
//      if(elm.matches("a[class$=red]")){
//          console.log(elm);
//      }
// }

// function MyFunction(){
// let input = document.getElementsByTagName('input');

// for (let am of input){
//     if(am.checked){
//         alert(true)
//     } else {
//         alert("Iam not checked");
//     }
// }
// }


// let a = document.getElementsByClassName('inputs')[0].nodeName;

// console.log(document.querySelector("img"));
//hidden it bajo meknad
//  document.getElementById('selct').hi

// function add() {
//     document.body.style.background = 'blue';
// }



// let as = document.getElementById("as")
// alert(as.outerHTML)

// alert(document.querySelector("a").id


// Element.prototype.SyHi = function() {
//     alert(`Hell ${this.tagName}`)
// }
// document.documentElement.SyHi();



