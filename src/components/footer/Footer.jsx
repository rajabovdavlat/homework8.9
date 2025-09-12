import './Footer.css'; // <- обязательно подключаем

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="footer__wrapp">
          <h2 className='footer__title'>Ready to cook smarter?</h2>
          <p className='footer__desc'>
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className='btn'>Browse recipes</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
