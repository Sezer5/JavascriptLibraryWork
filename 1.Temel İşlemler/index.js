/* Index Of Kullanımı Index Of Kullanımı Index Of Kullanımı Index Of Kullanımı Index Of Kullanımı Index Of Kullanımı Index Of Kullanımı */

let adsoy = 'Sezer Ünalmış';

let index = adsoy.indexOf('S');

console.log(index);

let yerDegistir=adsoy.replace("n","s");
console.log(yerDegistir);

/* Template String Yapısı Template String Yapısı Template String Yapısı Template String Yapısı Template String Yapısı Template String Yapısı */

let variable1 = 'PHP';
let variable2 = 'Codeigniter';
let variable3 = 'Laravel';

let htmlVariable = `Bilinen Programlama Dilleri
1 ${variable1}
2 ${variable2}
3 ${variable3}`;

console.log(htmlVariable);

/* Includes İşlemi  Includes İşlemi  Includes İşlemi  Includes İşlemi  Includes İşlemi  Includes İşlemi  Includes İşlemi  Includes İşlemi */

let dizi1 = ['Sezer','Seda','Sacit','Sadettin','Sevinç'];

let check1 = dizi1.includes('Sevinç');
console.log(check1);
console.log('Uzunluk Kontrolü: ',dizi1.length);

/* Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri  Tip İşlemleri */

let variable4 = '19';

console.log(typeof variable4);

variable4 = Number(variable4);

console.log(typeof variable4);

variable4 = Boolean(variable4);

console.log(typeof variable4);

variable4 = String(variable4);

console.log(typeof variable4);

/* Klasik Javascript Fonksiyon İşlemleri Klasik Javascript Fonksiyon İşlemleri Klasik Javascript Fonksiyon İşlemleri Klasik Javascript Fonksiyon İşlemleri  */

fonksiyon1();

function fonksiyon1(){
    console.log('Deneme Fonksiyonu Çalıştı');
};

const variable5 = function(){
    console.log('Deneme 2 Fonksiyonu Çalıştı');
};

variable5();

/* Parametreli Fonksiyon Örneği Parametreli Fonksiyon Örneği Parametreli Fonksiyon Örneği Parametreli Fonksiyon Örneği Parametreli Fonksiyon Örneği  */

function parametred(ad,soyad){
    console.log(ad,soyad);
};

parametred('Sezer','Ünalmış');

/* Geri Dönüş Değerli Fonksiyon Geri Dönüş Değerli Fonksiyon Geri Dönüş Değerli Fonksiyon Geri Dönüş Değerli Fonksiyon Geri Dönüş Değerli Fonksiyon */

function GeriDonuslu(a){
    return a*a;
};

let donusluDegisken = GeriDonuslu(3);
console.log(donusluDegisken);

/* Arrow Function Örneği Arrow Function Örneği Arrow Function Örneği Arrow Function Örneği Arrow Function Örneği Arrow Function Örneği Arrow Function Örneği  */

let arrow = (kisakenar,uzunkenar) => {
    return kisakenar*uzunkenar;
};

console.log(arrow(3,5));

/* Foreach Kullanımı Örneği  Foreach Kullanımı Örneği  Foreach Kullanımı Örneği  Foreach Kullanımı Örneği  Foreach Kullanımı Örneği  Foreach Kullanımı Örneği */

let yemekler = ['İskender','Adana','Beyti','Döner','Etli Ekmek'];

yemekler.forEach((yemek,index) => {
    console.log(index,yemek);
});

yemekler.forEach(yemek => {
    console.log(yemek);
});

/* Javascript Object Usage  Javascript Object Usage  Javascript Object Usage  Javascript Object Usage  Javascript Object Usage  Javascript Object Usage */

let denemeObje1 = {
    ad:'Sezer',
    soyad:'Ünalmış',
    email:'unalmissezer@gmail.com',
    dersler:[
        {isim:'Matematik',puan:90},
        {isim:'Fizik',puan:80},
        {isim:'Kimya',puan:85},],
    login(){
        console.log('logged in')
    },
    printLessons(){
        console.log(this.dersler);
        console.log(this);

        this.dersler.forEach(ders=>{
            console.log(ders.isim,ders.puan);
        })
    }
};
/* OBJELER İÇİNDE KULLANILAN FONKSİYONLARDA ARROW FUNCTİON KULLANILAMAZ AMA BURADA BİZ FOREACH İÇİNDE KULLANDIK */
console.log(denemeObje1.ad);
console.log(denemeObje1.dersler[1]);
denemeObje1.login();
denemeObje1.printLessons();

/* RANDOM SAYI ÜRETME ÖRNEĞİ RANDOM SAYI ÜRETME ÖRNEĞİ RANDOM SAYI ÜRETME ÖRNEĞİ RANDOM SAYI ÜRETME ÖRNEĞİ RANDOM SAYI ÜRETME ÖRNEĞİ */

let variable6 = Math.random();
console.log(variable6);


/* Elemenetlere Get-Set Attribute işlemleri  Elemenetlere Get-Set Attribute işlemleri  Elementlere Get-Set Attribute işlemleri  */

const link1 = document.querySelector('#ozellikEkleCikar1');
console.log(link1.getAttribute('href'));

link1.setAttribute('href','https://www.mynet.com');
link1.textContent = 'Mynet';
link1.setAttribute('class','denemeClass1');
link1.setAttribute('style','text-decoration:none');

/* Class Ekleme Çıkarma İşlemi Class Ekleme Çıkarma İşlemi Class Ekleme Çıkarma İşlemi Class Ekleme Çıkarma İşlemi Class Ekleme Çıkarma İşlemi */

denemeParagraf1 = document.getElementById('denemeParagraf1');

denemeParagraf1.classList.add('kirmizi');
denemeParagraf1.classList.remove('kirmizi');
denemeParagraf1.classList.add('turuncu');


/* Element Child Ve Sibling İşlemleri Element Child Ve Sibling İşlemleri Element Child Ve Sibling İşlemleri Element Child Ve Sibling İşlemleri  */

const section = document.querySelector('section');
console.log(section.children)
//HTML collection etiketi içerisinde foreach kullanılmaz

console.log(Array.from(section.children));

Array.from(section.children).forEach(child => {

    child.classList.add('section-element');

});

const baslik = document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling);
console.log(baslik.previousElementSibling);

console.log(baslik.nextElementSibling.parentElement.children);

/* Event Listener Örneği  Event Listener Örneği  Event Listener Örneği  Event Listener Örneği  Event Listener Örneği  Event Listener Örneği  */

const EventButton = document.querySelector('#EventButton');
const EventLiS = document.querySelectorAll('.EventLiS');

EventButton.addEventListener('click',()=>{
    alert('Butona Tıklandı');
});

EventLiS.forEach(element => {
    element.addEventListener('click',e=>{
        e.target.remove();
    });
});

/* Event Listener Örneği 2  Event Listener Örneği 2  Event Listener Örneği 2 */

const EventButton2 = document.querySelector('#EventButton2');
const EventInput = document.querySelector('#EventInput');
const EventLiS2 = document.querySelectorAll('.EventLiS2');
const listenerUl2 = document.querySelector('#listenerUl2');



EventButton2.addEventListener('click',()=>{
    let temp = EventInput.value;
    let li = document.createElement('li');
    li.classList.add('EventLiS2');
    li.textContent = temp;
    listenerUl2.append(li);
    // listenerUl2.prepend(li); Listenin sonuna ekleme yapar
});

EventLiS2.forEach(eleman=>{
    eleman.addEventListener('click',e=>{
        e.target.style.color='red';
    });
});

/* Mouse Hareketleri İşlemleri Mouse Hareketleri İşlemleri Mouse Hareketleri İşlemleri Mouse Hareketleri İşlemleri Mouse Hareketleri İşlemleri */

const kutu = document.querySelector('.kutu');

kutu.addEventListener('mousemove',e=>{
    kutu.textContent = `x koordinatı ${e.offsetX} , y koordinatı ${e.offsetY} `;
});

document.addEventListener('wheel',e=>{
    console.log(e.pageX,e.pageY);
});