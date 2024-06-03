let loader = document.getElementById("preloader");
let body = document.getElementById("")
window.addEventListener("load",function(){
    
    loader.style.display = "none";
})



const slides = document.querySelectorAll('.slides img');
const slideCount = slides.length;
const slideWidth = slides[0].clientWidth;
let index = 0;

function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -index * slideWidth;
  document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

//animation 0
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el=>observer.observe(el)));

//analytics

var xhr = new XMLHttpRequest();
xhr.open( 'https://pxxl.space/tracker/', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('AJAX response:', xhr.responseText);
    }
};
xhr.send('data=' + encodeURIComponent(JSON.stringify({ pagePath: window.location.pathname, filePath: window.location.href })));



