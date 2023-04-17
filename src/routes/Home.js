import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="main-container">
    <h1>List of pokemon types</h1>
    <NavLink to="category/1">Type 1</NavLink>
  </div>
);

export default Home;
