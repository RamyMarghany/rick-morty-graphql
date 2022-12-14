import { useQuery, gql } from '@apollo/client';

// create the query and should be capitalize
// Note: we are using (results) in the query when we return an array of object
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

export const useCharacters = () => {
    // path the query to the useQuery hook and return (error, loading, and data)
    const { error, loading, data } = useQuery(GET_CHARACTERS);

    return { error, loading, data }
}