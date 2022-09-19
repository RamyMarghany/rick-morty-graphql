import { useState } from "react"
import { useLazyQuery, gql } from '@apollo/client'

const GET_USER_LOCATION = gql`
query GetCharacterLocation($name:String!){
    characters(filter:{name:$name}){
        results{
            location{
                name
            }
        }
    }
}
`

export const Search = () => {
    const [name, setName] = useState("")

    // LazyQuery is returning the normal object of {error, loading, and data} plus return a function that must be called first to connect to the server and start to return the data, so it's recommended to use it when you need to make a certain action before you returning the data 
    const [getLocations, { error, loading, data }] = useLazyQuery(GET_USER_LOCATION, { variables: { name } })
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {error && <p>something went wrong!</p>}
            {loading && <p>Loading...</p>}
            {data && (
                <ul>
                    {data.characters.results.map(character => (
                        <li key={character.location.name} style={{ textAlign: 'left' }}>{character.location.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}