import { useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-nav__wrapp'>
          {/* logo */}
          <Link to='/' className='header__logo'>
            <img src='/images/logo.svg' alt='HealthyFood Logo' />
          </Link>

          {/* Navigation for large screens */}
          <nav className='header__nav'>
            <Link to='/' className='header__link'>
              Home
            </Link>
            <Link to='/about' className='header__link'>
              About
            </Link>
            <Link to='/recipes' className='header__link'>
              Recipes
            </Link>
          </nav>

          {/* button on the right */}
          <div className='header__actions'>
            <button className='btn'>Browse recipes</button>
          </div>

          {/* Burger mobile*/}
          <button className='header__burger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Modalka mobile */}
        <div
          className={`header__modal ${isOpen ? "header__modal--active" : ""}`}
        >
          <nav className='header__modal-nav'>
            <Link to='/' className='header__modal-link' onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to='/about'
              className='header__modal-link'
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to='/recipes'
              className='header__modal-link'
              onClick={toggleMenu}
            >
              Recipes
            </Link>

            {/* Кнопка Browse recipes */}
            <button className='header__modal-btn' onClick={toggleMenu}>
              Browse recipes
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
