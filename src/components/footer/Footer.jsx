import "./Footer.css"; // <- обязательно подключаем

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapp'>
          
          <img
            src='/images/pattern-fork.svg'
            alt='Left decoration'
            className='footer__icon footer__icon--left'
          />

          <div className='footer__content'>
            <h2 className='footer__title'>Ready to cook smarter?</h2>
            <p className='footer__desc'>
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button className='btn'>Browse recipes</button>
          </div>

          <img
            src='/images/pattern-knife.svg'
            alt='Right decoration'
            className='footer__icon footer__icon--right'
          />
        </div>

        <div className='footer__nav'>
          <p className='footer__made'>Made with ❤️ and 🥑</p>
          <div className='footer__social'>
            <a href='#'>
              <img src='/images/icon-instagram.svg' alt='Instagram' />
            </a>
            <a href='#'>
              <img src='/images/icon-bluesky.svg' alt='Babushka' />
            </a>
            <a href='#'>
              <img src='/images/icon-tiktok.svg' alt='TikTok' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
