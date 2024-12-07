import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{ padding: '10px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', fontFamily: 'Montserrat', color: '#fff' }}>
        <nav>
            <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
        </nav>
    </header>
);

export default Header;
