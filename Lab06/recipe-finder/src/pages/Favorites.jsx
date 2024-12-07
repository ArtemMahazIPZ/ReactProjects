import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat' }}>
            <h1>Your Favorites</h1>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.name}</h3>
                            <button
                                onClick={() => removeFavorite(recipe.id)}
                                style={{ padding: '5px 10px', fontSize: '14px', marginTop: '10px', background: '#feb47b', color: '#fff', border: 'none' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites added yet!</p>
            )}
        </div>
    );
};

export default Favorites;
