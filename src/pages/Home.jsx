import { Link } from "react-router-dom";
import Filter from "../components/Filter"; 

const Home = () => {
  return (
    <div>
      <Link className='btn'>Start exploring</Link>

      <div style={{ marginTop: "2rem" }}>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
