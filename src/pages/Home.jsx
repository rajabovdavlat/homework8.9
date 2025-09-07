import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link className='btn' to='/recipes'>
        Explore
      </Link>
    </div>
  );
};

export default Home;
