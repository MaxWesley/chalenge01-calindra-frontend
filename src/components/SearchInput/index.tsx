import {
    Container,
    ContainerSuggestions,
    InputSearch
} from './styles';

import { useSearch } from '../../hooks/useSearch';
import { useState } from 'react';
import { useEffect } from 'react';

function SearchInput() {
    const { setSearch, suggestions, getSuggestions } = useSearch();
    const [input, setInput] = useState('');

    const handleInput = (text: any) => {
        setSearch(text.target.value);
        setInput(text.target.value);
    }

    const handleClickSuggestion = (text: string) => {
        setSearch(text);
        setInput(text);
    }

    useEffect(() => {
        getSuggestions();
    }, [input]);

    return (
        <Container>
            <span>Buscar produto </span>
            <InputSearch
                type="text"
                placeholder="O que você deseja?"
                value={input}
                onChange={handleInput}
                reactBottom={input.length > 0 ? true : false}
            />
            <ContainerSuggestions show={input.length > 0 ? true : false}>
                {
                    suggestions.map((suggestion, key) => {
                        const suggestionText = suggestion.term;

                        return <p
                            key={key}
                            onClick={() => handleClickSuggestion(suggestions[key].term)}
                        >
                            {suggestionText}
                        </p>
                    })
                }
            </ContainerSuggestions>
        </Container>
    )
}

export { SearchInput };