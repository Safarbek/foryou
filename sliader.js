
function toggle(){
    var header = document.getElementById('header');
    header.classList.toggle('active')
}

function ShowMalumot(){
    var malumot = document.getElementsByClassName('icon')[0];
    malumot.style.display='block'
}

let imgs = [
    'odnoklassnik/all.jpg',
    'odnoklassnik/all2.jpg',
    'odnoklassnik/довуд_тохир.jpg',
    'odnoklassnik/all4.jpg',
    'odnoklassnik/илхом1.jpg',
    'odnoklassnik/farukh1.jpg',
    'odnoklassnik/довуд1..jpg',
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


let myIntText = setInterval(writeText, 500);

let textTj = 'Хуш омадед ба сайти хонандагони мактаби №3 Нохияи Вахш <p> Дар ин чо  ' +
'маълумот танхо дар бораи синфи <spam>11 риёзии</spam> хатм кардагони соли 2018  мебошад</p>';
let textEn = "Welcome to the website of the students of school №3 in District Vakhsh. In this website  informations are only  about  11 riyozy.  Those, who graduated in 2018"
text = textTj.split(' ');
textEn = textEn.split(' ');
let j = 0;
let jen = 0;
function writeText(){
    document.getElementById('text').innerHTML += ' ' + text[j]
    j++;
    if(j > text.length ){
        document.getElementById('text').innerHTML = '';
        document.getElementById('text2').innerHTML += ' ' + textEn[jen];
        jen++;
        
        if(jen > textEn.length){
        document.getElementById('text2').innerHTML = '';
        jen = 0;
        j = 0;
        }
    } 
}



let myInt = setInterval(writeName, 3900);

let imgAll = ['odnoklassnik/all4.jpg' , 'odnoklassnik/all.jpg', 'odnoklassnik/all2.jpg'];
let img = imgAll.length - 1;

let i = 0;
function writeName() {
    i++;
    document.getElementsByClassName('sec1')[0].style.backgroundImage = `url('${imgAll[i]}')`
    if(i == img ) i = -1;
}   


setInterval(changeName, 1900);
let name = 0;
function changeName(){
    name++
    document.getElementsByClassName('log')[0].innerText = '11Риёзи'
    if(name == 1){
    document.getElementsByClassName('log')[0].innerText = '11Riyozy';
    name = -1
    }
}


setInterval(myFun, 300);
let samText = '11-Риёзи-Мактаби-№3-н.-Вахш-2018';
let letter = samText.split('');
t = 0;
function myFun(){
    if(letter[t] == '-' ){
        letter[t] = letter[t].replace('-', ' ')
    }
    document.getElementsByClassName('bg-text')[0].innerHTML += letter[t];
    t++;
    if(t > letter.length ) {
        t = 0;
         document.getElementsByClassName('bg-text')[0].innerHTML = '';
 }
   
}

