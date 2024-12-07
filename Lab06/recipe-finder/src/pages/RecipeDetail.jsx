import { useParams } from 'react-router-dom';
import mockData from '../mockData';
import { useFavorites } from '../context/FavoritesContext';

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = mockData.find((item) => item.id === parseInt(id));
    const { addFavorite } = useFavorites();

    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat' }}>
            <h1>{recipe.name}</h1>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
            <button
                onClick={() => addFavorite(recipe)}
                style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px', background: '#ff7e5f', color: '#fff', border: 'none' }}
            >
                Add to Favorites
            </button>
        </div>
    );
};

export default RecipeDetail;
