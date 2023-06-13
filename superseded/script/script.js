/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const cards = document.querySelectorAll('.card');

const callback = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('show')){
            ele.target.classList.add('show')
        }else{
            ele.target.classList.remove('show')
        }
    })
}

const observer = new IntersectionObserver(callback);
cards.forEach(card => observer.observe(card))