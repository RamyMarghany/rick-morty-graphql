import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import "./CharactersList.css";

export const CharactersList = () => {
    // path the query to the useQuery hook and return (error, loading, and data)
    const { error, loading, data } = useCharacters();
    if (error) return <h3>something went wrong!</h3>;
    if (loading) return <h2>Loading...</h2>

    return (
        <>
            <h1>Characters List</h1>
            <div className="character-list">
                {data.characters.results.map(character => (
                    <Link to={`/${character.id}`} key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </Link>
                ))}
            </div>
        </>
    )
}