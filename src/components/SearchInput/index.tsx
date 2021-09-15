import {
    Container
} from './styles';

import { useSearch } from '../../hooks/useSearch';

function SearchInput() {
    const { setSearch } = useSearch();

    const handleInput = (text: any) => {
        setSearch(text.target.value);
    }

    return (
        <Container>
            <span>Buscar produto </span>
            <input
                type="text"
                placeholder="O que você deseja?"
                onChange={handleInput}
            />
        </Container>
    )
}

export { SearchInput };