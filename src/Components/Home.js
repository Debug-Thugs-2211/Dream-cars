import React from "react";
import "./Home.css";

const Home = () => {

  // const displaySlides = (nums) => {

  //   const currentIndex = 1;
  //   displaySlides(currentIndex);
  //   console.log('df',currentIndex);

  //   let i;

  //   const slides = document.getElementsByClassName('imageSlides');
  //   if (nums > slides.length) { currentIndex }
  //   if (nums < 1) {
  //      currentIndex = slides.length;
  //   }
  //   for ( i = 0; i < slides.length; x++) {
  //     slides[x].style.display = "none";
  //   }
  //   slides[currentIndex -  1].style.display = 'block';
  // }
  // const setSlides = (num) => {
  //   displaySlides(currentIndex += num);
  // }

  return (
    <>
      <div className="cont-1">
        <h1 id="title">Find your Dream Car!</h1>
        <p>
           Welcome to our webpage, where you can shop for cars to fulfill your transportation needs. 
           We are thrilled to have you here and are committed to providing you an exeptional shopping experience.
           Where you're looking for a stylish sedan, a practical SUV, or a powerful sports car, we have a wide range of options to suit your preferences and budget.
           Our team of experts is dedicated to helping you find the perfect car that meets your requirements and exceeds your expectations. So, sit back, relax, and enjoy browsing our selection of cars.
        </p>
      <ul>
        <li>
          <p>Low Cost!</p>
          <p>Amazing Customer Service!</p>
          <p>Money-back Guarantee</p>
          <p>Multiple Brands</p>
        </li>
      </ul>
      </div>
    <body>
    <div className="images-slidshow">
      <div className="imageSlides fade">
           <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JMjwzimnXSO22nl7fqmXvq5XFBX_89PXEw&usqp=CAU"></img>
      </div>

      <div className="imageSlides fade">
           <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1H2AVAb9oX8yf23DawGfQv5oDS6utBO7QA&usqp=CAU"></img>
      </div>

      <div className="imageSlides fade">
           <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCFzY_3i_4Pe9ixuIRXcKTkzHqFibqipENg&usqp=CAU"></img>
        </div>

        <div className="imageSlides fade">
          <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAjD8pEom0w1T3MPSxjr_QvzY13_NWP2uBw&usqp=CAU"></img>
        </div>

        <div className="imageSlides fade">
          <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNQiGgqFIjAyidDUUr76qdbhosjHsN6QUvg&usqp=CAU"></img>
        </div>

        <div className="imageSlides fade">
          <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyv8pm4JGBKurSARgoaR6jmbsSR0pxB83kA&usqp=CAU"></img>
        </div>

        <div className="imageSlides fade">
          <img href src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncFou1O5mb0xKQcpXVlkATY9vgSbjnTA3qg&usqp=CAU"></img>
        </div>
        {/* <a class="slider-btn previous" onClick={setSlides(-1)}></a>
        <a class="slider-btn next" onClick={setSlides(1)}></a> */}
    </div>
    </body>
    <body>
      <div>
        <p>
          Thank you for taking the time to visit our website. 
          We appreciate your interest in our selection of cars and hope that our platform provides you with a seamless shopping experience. 
          If you have any questions or feedback, please don't hesitate to reach out to our friendly and knowledgeable team.
          We look forward to helping you find your perfect car!
        </p>
      </div>
      <div>
        <h1>Website Developers</h1>

        <img href src=""></img>
        <h2>Abed Jamous</h2>
        <a href='https://github.com/AbedJ2023'>GitHub</a>

        <img href src=""></img>
        <h2>Christine Dickens</h2>
        <a href="https://github.com/cdickens14">GitHub</a>

        <img href src=""></img>
        <h2>Emily Cooke</h2>
        <a href="https://github.com/EmSabineCooke">GitHub</a>

        <img href src=""></img>
        <h2>Gitonga Nyaga</h2>
        <a href="https://github.com/Richierichman15">GitHub</a>
      </div>
    </body>
    </>
  )
};

export default Home;
