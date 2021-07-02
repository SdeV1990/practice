const quote = ( quote = "", action ) => {

    // Set quote
    if (action.type === 'FETCH_JOKE_SUCCESS') {

        // Change first letter to upper case
        function ucFirst(str) {
            if (!str) return str;
          
            return str[0].toUpperCase() + str.slice(1);
        }

        // Some quotes has to be changed (on server, but...)
        let text = ucFirst(action.payload)

        // If quote ends not with '.', '!' or '?' - add point
        const lastSymbol = text[text.length - 1]
        if ( lastSymbol !== '.' && lastSymbol !== '!' && lastSymbol !== '?' ) {
            text = text + '.'
        }

        return text
    }

    return quote
}

export default quote 