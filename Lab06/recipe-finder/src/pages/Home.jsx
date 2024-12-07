import { useState } from 'react';
import mockData from '../mockData';

const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        if (!query.trim()) return alert('Please enter a valid search query.');
        const filteredResults = mockData.filter(recipe =>
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filteredResults);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat' }}>
            <h1>Recipe Finder</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter an ingredient"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px', width: '300px', marginRight: '10px' }}
                />
                <button onClick={handleSearch} style={{ padding: '10px 20px', fontSize: '16px' }}>Search</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {results.length > 0 ? (
                    <ul>
                        {results.map(recipe => (
                            <li key={recipe.id}>
                                <a href={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#ff7e5f' }}>
                                    {recipe.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recipes found. Try a different ingredient!</p>
                )}
            </div>
        </div>
    );
};

export default Home;
