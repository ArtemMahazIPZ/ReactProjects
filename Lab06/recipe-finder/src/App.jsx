import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
    return (
        <FavoritesProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
}

export default App;
