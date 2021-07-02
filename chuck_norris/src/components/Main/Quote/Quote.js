import React from 'react'
import { useSelector } from 'react-redux'

// Components

const Quote = () => {

    // Get quote from Redux
    const quote = useSelector( (state) => state.quote)

    return(
        <div className='quote-wrapper'>
            <img className='quote-logo' alt="chuck_norris_great" src="/img/chuck_norris_great.png"/>
            <div className='quote-text'>
                {quote}
                {/* Quote for pixel perfect */}
                {/* The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?” */}

                {/* The biggest quote I saw */}
                {/* A meme ( /&#712;mi&#720;m/; MEEM) is "an idea, behavior or style that spreads from person to person within a culture." A meme acts as a unit for carrying cultural ideas, symbols or practices, which can be transmitted from one mind to another through writing, speech, gestures, rituals or other imitable phenomena. Supporters of the concept regard memes as cultural analogues to genes in that they self-replicate, mutate and respond to selective pressures. The word meme is a shortening (modeled on gene) of mimeme (from Ancient Greek m&#299;m&#275;ma, "something imitated", from mimeisthai, "to imitate", from mimos "mime") and it was coined by the British evolutionary biologist Richard Dawkins in The Selfish Gene (1976) as a concept for discussion of evolutionary principles in explaining the spread of ideas and cultural phenomena. Examples of memes given in the book included melodies, catch-phrases, fashion and the Chuck Norris. */}
            </div>
        </div>
    );
}

export default Quote