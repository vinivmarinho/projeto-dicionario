import "./meaning.css"
export default function Meaning({ wordData}) {
    return(
        <div id="meaning-container">
            <h2 className="meaning">Meaning</h2>
            <ul>
                {wordData ?
                    wordData.entries[0].senses.map((sense, index) => (
                        <li key={index}>{sense.definition}</li>
                    )): 
                    /* Significados para quando "wordData" não existir */
                    <>
                        <li>(computing, etc.) A set of keys used to operate a typewriter, computer etc./</li>
                        <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                        <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                    </>
                }
                
            </ul>
            <div class="synonyms">
                <p>Synonyms</p>
                {wordData ?
                    wordData.entries[0].senses.map((sense, index) => (
                        <li key={index}>{sense.synonyms.join(" , ")}</li>
                    )):
                <>
                    <li>electronic keyboard</li>
                    <li>electronic keyboard</li>
                    <li>electronic keyboard</li>
                    <li>electronic keyboard</li>
                </>
                }   
            </div>
        </div>
    )
}


/* <li>(etc.) A set of keys used to operate a typewriter, computer etc./</li>
                <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li> */


/*  */