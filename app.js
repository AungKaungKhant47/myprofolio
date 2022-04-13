const nav = document.querySelector('nav');
const navBtn = document.querySelectorAll('.navbar-link-item');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('section');
const home = document.getElementById('home');
const loader = document.getElementById('loader');
let currentScroll = window.scrollY;

setTimeout(() => {
      loader.classList.remove('show');
   }, 5000);
setTimeout(() => {
   home.classList.remove('hidden');
   home.classList.add('showed');
}, 7000);

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

const project = document.getElementById('projects');
const skills = document.getElementById('skills');
const skilledShowed = document.querySelectorAll('.skilled-show');
window.onscroll = function(){
   if(window.scrollY > 40){
      nav.classList.add('fixed');
   }else {
      nav.classList.remove('fixed');
   }
   navBtn.forEach(btn => {
      const id = '#' + btn.getAttribute('data-content');
      const section = document.querySelector(id);
      let scroll1 = section.offsetTop ;
      let scroll2 = section.scrollHeight + scroll1;
      if(window.scrollY > scroll1 && window.scrollY < scroll2 -170 ){
         active(btn);
      }else {
         removeC(btn);
      }
      if(window.scrollY > scroll1-250 && window.scrollY < scroll2-250 ){
         active(btn);
         section.classList.add('showed');
         section.classList.remove('hidden');
      }
   })
   const skillsTop = project.offsetTop -600;
   console.log(skillsTop, window.scrollY);
   if(window.scrollY > skillsTop ){
      skilledShowed.forEach(skill => skill.classList.add('showed'));
   }
   
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
      header : ' Bugers SM Ads',
      catagory : 'SocialMedia Designs',
      img : "./img/burgers set.jpg" ,
      text : "Something is about to show.",
      tags : '  ' ,
   } ,
   {
      id : 2,
      header : ' Cosmetic SM Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/cosmetic set.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 3,
      header : 'Potato Chips Packaging',
      catagory : 'Printing Designs' ,
      img : './img/POTATO.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 4,
      header : 'School Admission Flyer ',
      catagory : 'Printing Designs' ,
      img : './img/flyer.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 5,
      header : 'Grab SM Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/grab 1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 6,
      header : 'WaterMelon Key Visual',
      catagory : 'SocialMedia Designs' ,
      img : './img/watermelon.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 7,
      header : 'Watermelon Drink Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/water melon.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 8,
      header : 'Redmi K30 Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/phone1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 8,
      header : 'Kaw Pyant SM Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/kaw pyant.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 9,
      header : 'Logitech Speaker Ads',
      catagory : 'SocialMedia Designs' ,
      img : './img/logitech speaker.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 10,
      header : 'WildRift Match Result',
      catagory : 'Esports' ,
      img : './img/wr 1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 11,
      header : 'WildRift MatchDay Post',
      catagory : 'Esports' ,
      img : './img/wr 2.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 12,
      header : 'Billboard For Royal Beer',
      catagory : 'Printing Designs' ,
      img : './img/royal billboard.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 13,
      header : 'Billboard For Car Showroom',
      catagory : 'Printing Designs' ,
      img : './img/golden life billboard.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 14,
      header : 'Billboard For Car Showroom',
      catagory : 'Printing Designs' ,
      img : './img/car billboard.jpg',
      text : "Something is about to show.",
      tags : '' ,
   } ,
   {
      id : 15,
      header : 'Valorant Result Post',
      catagory : 'Esports' ,
      img : './img/valorant 1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 16,
      header : 'Valorant Result Post',
      catagory : 'Esports' ,
      img : './img/valorant 2.1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 17,
      header : 'Valorant Result Post',
      catagory : 'Esports' ,
      img : './img/valorant 3.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 18,
      header : 'Marjin Jersey Ads',
      catagory : 'Esports' ,
      img : './img/marjin jersey ads.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
   {
      id : 19,
      header : 'Marjin Day1 Result',
      catagory : 'Esports' ,
      img : './img/Pubg 1.jpg',
      text : "Something is about to show.",
      tags : '' ,
   },
]
function createProjects(item) {
   return `<div class="projectsItem " data-catagory="${item.catagory}">
      <img src="${item.img}" data-catagory="${item.catagory}">
      <div>
      <h2>${item.header}</h2>
      <p>${item.text}</p>
      <h4 class="tags">
          <b>${item.tags}</b>
      </h4>
      </div>
  </div>`
}
// const projectsI = [...document.querySelectorAll('.projectsItem')];
const projectsBtns = document.querySelectorAll('.projectsBtn');
const loadMoreBtn = document.getElementById('loadMore');
console.log(projectsBtns);

let noOfItems = 4;
   loadMore(projectsItems);

   function loadMore(items){
        let items0 = items.map(item => createProjects(item));
         let Items1 = [...items0];
         console.log(Items1);
         let Items =[];
         if(Items1.length > noOfItems){
            Items = [...Items1].slice(0,noOfItems);
            console.log(Items)
         }else {
            Items = [...Items1];
         }
         console.log(Items);
         let JoinedItems = Items.join('');
         
         projects.innerHTML = JoinedItems;
         if(Items1.length < 4 || Items1.length < noOfItems) {
         loadMoreBtn.style.display = 'none';
         }else{
         loadMoreBtn.style.display = 'block';
         }
         loadMoreBtn.addEventListener('click' , function (e) {
         e.preventDefault();
         noOfItems += 4;
         loadMore(items);
         popUp();
   })
}

const projectsItemsE = document.querySelectorAll('.projectsItem');
projectsBtns.forEach(btn => {
   btn.addEventListener('click' , function(){
      noOfItems = 4;
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
     loadMore(currentItems);
     popUp();
   })
   
})

// click images
function popUp(){
const images = [...document.querySelectorAll('.projectsItem img')];
console.log(images);
images.forEach((image) => {
   image.addEventListener('click' , function(e){
      e.preventDefault();
      let src = image.getAttribute('src');
      console.log(src);
      modalImage(src);
   })
});

const modal_wrapper = document.getElementById('modal-wrapper');
const closeBtn = document.getElementById('closeBtn');
const image = document.getElementById('popupImage');
function modalImage(src){
   image.setAttribute('src' , src);
   modal_wrapper.style.display = "flex";
   closeBtn.addEventListener('click' , function(){
      modal_wrapper.style.display = 'none';
   })
}
}
popUp();