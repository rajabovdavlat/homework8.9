import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className='home'>
      <div className='home__inner'>
        <h2 className='home__title'>
          <span>Healthy</span> meals, zero fuss
        </h2>
        <p className='home__subtitle'>
          Discover eight quick, whole-food recipes that you can cook tonight —
          no processed junk, no guesswork.
        </p>
        <button className='btn btn--primary'>Start exploring</button>
      </div>

      <div className='home__image-wrapper'>
        <img
          src='/images/home-bg.png'
          alt='Background wave'
          className='home__image-bg'
        />
        <img
          src='/images/home-image.png'
          alt='Healthy cooking'
          className='home__image'
        />
      </div>
    </section>
  );
};

export default Home;
