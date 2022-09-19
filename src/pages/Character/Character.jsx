import { useParams } from "react-router";
import { useCharacter } from "../../hooks/useCharacter";
import "./Character.css"

export const Character = () => {

    // useParams to get the id from the URL
    const { id } = useParams()
    const { error, loading, data } = useCharacter(id)

    if (error) return <h3>something went wrong!</h3>;
    if (loading) return <h2>Loading...</h2>

    return (
        <>
            <h1>Character Details</h1>
            <div className="character">
                <img alt={data.character.name} src={data.character.image} width={350} height={350} />
                <div className="character-content">
                    <h2>{data.character.name}</h2>
                    <p>{data.character.gender}</p>
                    <div className="character-episode">
                        {data.character.episode.map(episode => (<p key={episode.name}>{episode.name}<b> - {episode.episode}</b></p>))}
                    </div>
                </div>
            </div>
        </>
    )
}