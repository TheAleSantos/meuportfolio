var btn = document.querySelector('#show');
var section = document.querySelector('.skills')
var containe = document.querySelector('.skills');

btn.addEventListener('click', function(){
    if(section.style.display === 'block'){
        section.style.display = 'none';
    }else{
        section.style.display = 'block';
    }

});


var btn = document.querySelector('.hide');
var section = document.querySelector('.skills')
var containe = document.querySelector('.skills');

btn.addEventListener('click', function(){
    if(section.style.display === 'block'){
        section.style.display = 'none';
    }else{
        section.style.display = 'block';
    }

});


// Menu Mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
