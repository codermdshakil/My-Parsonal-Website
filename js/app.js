
const navSlide=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li");

 
burger.addEventListener('click',()=>{

    //toggle Nav
       nav.classList.toggle('nav-active');

    //animate links 
       navLinks.forEach((link ,index)=>{ 
          if (link.style.animation){
            link.style.animation =""
          }else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 +.5}s`;
          }
    });
    //burger animation
        burger.classList.toggle("toggle");

});
}
 navSlide();
/*=================  home_section stars here =================*/
/* ============== home_section title design starts here ==================== */
// text writing animations
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0008}";
  document.body.appendChild(css);
};
/* ============== home_section title design ends here ==================== */
/*=================  home_section ends here =================*/

