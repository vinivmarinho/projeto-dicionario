import "./meaning.css"
export default function Meaning({ entry }) {
    return(
        <div id="meaning-container">
            <h2 className="meaning">Meaning</h2>
            
            <ul>
                {entry.senses.map((sense, index) => (
                    <li key={index}>
                        <p>{sense.definition}</p>

                        {sense.synonyms && sense.synonyms.length > 0 && (
                            <div className="synonyms">
                                <p>Synonyms:</p>
                                <span>{sense.synonyms.join(" , ")}</span>
                            </div>
                        )}
                    </li>
                ))}
                
            </ul>
        </div>
    )
}


/* <li>(etc.) A set of keys used to operate a typewriter, computer etc./</li>
                <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li> */


/*  */