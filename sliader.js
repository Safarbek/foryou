
function toggle(){
    var header = document.getElementById('header');
    header.classList.toggle('active')
}

function ShowMalumot(){
    var malumot = document.getElementsByClassName('icon')[0];
    malumot.style.display='block'
}

let imgs = [
    'img/ime1 (1).jpg',
    'img/ime1 (2).jpg',
    'img/ime1 (3).jpg',
  
];

let leng = imgs.length - 1;
let next = 0;
function test(a) {
    if(a == 1) {
        next++
        if(next > imgs.length - 1) next =  0;
        document.getElementsByClassName('contant')[0].style.backgroundImage = `url('${imgs[next]}')`
        console.log('next ' +  next)
    }
    else if(a == 0) {
        if(next == 0){
            next = imgs.length;
        }
        next--;
        document.getElementsByClassName('contant')[0].style.backgroundImage = `url('${imgs[next]}')`
        console.log("last " + next)
    }

}


let myIntText = setInterval(writeText, 800);

let text = 'Хуш омадед ба сайти хонандагони мактаби раками 3 Нохияи Вахш <p> Дар ин чо  ' +
'маълумот танхо дар бораи синфи 11 риёзии хатм кардагони соли 2018  мебошад</p>';
text = text.split(' ');
let j = 0;
function writeText(){
    document.getElementById('text').innerHTML += ' ' + text[j]
    j++
    if(j > text.length ){
        j = 0;
        document.getElementById('text').innerHTML = '';
    }
}

let myInt = setInterval(writeName, 2900);

let imgAll = ['odnoklassnik/all4.jpg' , 'odnoklassnik/all.jpg', 'odnoklassnik/all2.jpg'];
let img = imgAll.length - 1;

let i = 0;
function writeName() {
    i++;
    document.getElementsByClassName('sec1')[0].style.backgroundImage = `url('${imgAll[i]}')`
    if(i == img ) i = -1;
}   
