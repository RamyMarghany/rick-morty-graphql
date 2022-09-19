import { useQuery, gql } from '@apollo/client';

import "./style.css";

// create the query and should be capitalize
const GET_CHARACTERS = gql`
query{
    characters{
        results{
            name
            image
            id
        }
    }
}
`

export const CharactersList = () => {
    // path the query to the useQuery hook and return (error, loading, and data)
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    if (error) return <h3>something went wrong!</h3>;
    if (loading) return <h2>Loading...</h2>

    return (
        <>
            <h1>Characters List</h1>
            <div className="character-list">
                {data.characters.results.map(character => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}