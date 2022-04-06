const nav = document.querySelector('nav');
const navBtn = document.querySelectorAll('.navbar-link-item');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('section');
const loader = document.getElementById('loader');
let currentScroll = window.scrollY;

setTimeout(() => {
      loader.classList.remove('show');
   }, 10000);


// setTimeout(() => {
//       loader.classList.remove('show');
//    }, 5000);

function active(btn) {
   btn.classList.add('active');
}
function removeC(btn) {
   btn.classList.remove('active');
}
menu.addEventListener('click' , function(){
    menu.classList.toggle('active');
})

window.onscroll = function(){
   if(window.scrollY > 40){
      nav.classList.add('fixed');
   }else {
      nav.classList.remove('fixed');
   }
   navBtn.forEach(btn => {
      const id = '#' + btn.getAttribute('data-content');
      const section = document.querySelector(id);
      let scroll1 = section.offsetTop -100;
      let scroll2 = section.scrollHeight + scroll1;
      if(window.scrollY > scroll1 && window.scrollY < scroll2 ){
         active(btn);
      }else {
         removeC(btn);
      }
   })
}
navBtn.forEach(btn => {
   btn.addEventListener('click' , function(){
       navBtn.forEach( btn => removeC(btn))
       active(btn);
       menu.classList.toggle('active' , false);
       const id = '#' + btn.getAttribute('data-content');
       const e  = document.querySelector(id);
      //  $('html','body').animate({
      //     scrollTop : $(id).offset().top
      //  },800 , function(){
      //     window.location.hash = id;
      //  })
      window.scrollTo(0,e.offsetTop);
      console.log(btn);
   })
})

// projects 
let projects = document.querySelector('.projectsItems');
const projectsItems = [
   {
      id : 1,
      header : ' ',
      catagory : 'Websites',
      img : "./img/burgers set.jpg" ,
      tags : ' ' ,
   } ,
   {
      id : 2,
      header : ' ',
      catagory : 'SocialMedia Designs' ,
      img : './img/cosmetic set.jpg',
      tags : '' ,
   } ,
   {
      id : 3,
      header : ' ',
      catagory : 'Printing Designs' ,
      img : './img/cosmetic set.jpg',
      tags : '' ,
   } ,
   {
      id : 4,
      header : ' ',
      catagory : 'Recent Projects' ,
      img : './img/cosmetic set.jpg',
      tags : '' ,
   } ,
   {
      id : 5,
      header : ' ',
      catagory : 'SocialMedia Designs' ,
      img : './img/cosmetic set.jpg',
      tags : '' ,
   },
   {
      id : 6,
      header : ' ',
      catagory : 'SocialMedia Designs' ,
      img : './img/cosmetic set.jpg',
      tags : '' ,
   }
]
function createProjects(item) {
   return `<div class="projectsItem " data-catagory="${item.catagory}">
      <img src="${item.img}" data-catagory="${item.catagory}">
      <h2>${item.header}</h2>
      <h4 class="tags">
          <li>${item.tags}</li>
      </h4>
  </div>`
}
const projectsBtns = document.querySelectorAll('.projectsBtn');
console.log(projectsBtns);
window.onload = function() {
   let projectsItemsAll = projectsItems.map(item => createProjects(item));
   projectsItemsAll = projectsItemsAll.join('');
   projects.innerHTML = projectsItemsAll;
}
const projectsItemsE = document.querySelectorAll('.projectsItem');
projectsBtns.forEach(btn => {
   btn.addEventListener('click' , function(){
      projectsBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');  
      let btnNow = btn.getAttribute('data-catagory');
      let itemNow;
     let currentItems = projectsItems.filter(item => {
          itemNow = item.catagory;
         if(itemNow == btnNow){
            return item;
         }else if(btnNow == '*'){
            return item;
         }
      })
     console.log(currentItems);
     currentItems = currentItems.map(item => createProjects(item));
     console.log(currentItems);
     currentItems = currentItems.join('');
     projects.innerHTML = currentItems;
   })
   
})