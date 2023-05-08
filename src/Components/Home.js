import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  let slides = document.getElementsByClassName("mySlides");

useEffect(() => {
  showSlides(1)
}, [slides.length])

const showSlides = (n) => {
  let i;
  if (!slides.length) {
    return;
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  console.log('slides', slides);
}
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  console.log('here', n);
  showSlides(slideIndex += n);

}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

  return (
    <div id="background">
      <div className="cont-1">
        <h1 id="title">Find your Dream Car!</h1>
        <p id="welcome">
           Welcome to our webpage, where you can shop for cars to fulfill your transportation needs. 
           We are thrilled to have you here and are committed to providing you an exeptional shopping experience.
           Where you're looking for a stylish sedan, a practical SUV, or a powerful sports car, we have a wide range of options to suit your preferences and budget.
           Our team of experts is dedicated to helping you find the perfect car that meets your requirements and exceeds your expectations. So, sit back, relax, and enjoy browsing our selection of cars.
        </p>
      <ul>
        <li>
          <p className="checkMark">Low Cost!</p>
          <p className="checkMark">Amazing Customer Service!</p>
          <p className="checkMark">Money-back Guarantee</p>
          <p className="checkMark">Multiple Brands</p>
        </li>
      </ul>
      </div>

      <div className="slideshow-container">
       <div className="mySlides fade">
          <div className="numbertext">1 / 6</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JMjwzimnXSO22nl7fqmXvq5XFBX_89PXEw&usqp=CAU" ></img>
       </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 6</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1H2AVAb9oX8yf23DawGfQv5oDS6utBO7QA&usqp=CAU" ></img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 6</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCFzY_3i_4Pe9ixuIRXcKTkzHqFibqipENg&usqp=CAU" ></img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">4 / 6</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBZcvwo7Qf7Ldb0E5YyRYmFTdhX2aYdDSuA&usqp=CAU" ></img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">5 / 6</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rxyJkJ3c9vdRwdjA7VQlWYI22NvLx1FslQ&usqp=CAU" ></img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">6 / 6</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0DxGvGoAey1UWx88eq9fXKUlP37u1FFKUA&usqp=CAU" ></img>
      </div>

  <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
  <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
</div>
      <div>
        <p className="thankyou">
          Thank you for taking the time to visit our website. 
          We appreciate your interest in our selection of cars and hope that our platform provides you with a seamless shopping experience. 
          If you have any questions or feedback, please don't hesitate to reach out to our friendly and knowledgeable team.
          We look forward to helping you find your perfect car!
        </p>
      </div>
    </div>
  )
};

export default Home;
