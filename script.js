const image=$("#slideImg");
const next=$("#next");
const prev=$("#prev");
const item=$("#one");
const item1=$("#two");
const path="carousel-1.jpg";



prev.on("click", function() {
    image.fadeIn("slow");

    if (image.attr("src")==path) {
        
        image.attr("src","carousel-2.jpg");  
        item.css("display","none");
        item1.css("display","flex");

     
        


          
    } else {
        image.attr("src","carousel-1.jpg");  

        item.css("display","flex");
        item1.css("display","none");

    }
});
next.on("click", function() {
 
    if (image.attr("src")==path) {
        image.attr("src","carousel-2.jpg");  

        item.css("display","none");
        item1.css("display","flex");
           
    } else {
        image.attr("src","carousel-1.jpg");  

        item.css("display","flex");
        item1.css("display","none");

           
    }
});


function showSlides() {

  for (i = 0; i < image.length; i++) {
    image.attr("src","carousel-2.jpg");  
}
  slideIndex++;
  if (slideIndex > image.length) {slideIndex = 1;}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
};