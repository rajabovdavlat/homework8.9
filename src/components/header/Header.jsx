import { Link } from "react-router-dom";
import "../header/Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className="header-nav__wrapp">
          {/* Лого */}
          <Link to='/' className='header__logo'>
            <img src='/images/logo.svg' alt='HealthyFood Logo' />
          </Link>

          {/* Навигация по центру */}
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

          {/* Кнопка справа */}
          <div className='header__actions'>
            <button className='btn'>Browse recipes</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
