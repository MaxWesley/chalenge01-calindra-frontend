import { BiSearchAlt } from 'react-icons/bi';

import { Container } from './styles';

import { useSearch } from '../../hooks/useSearch';

function SearchButton() {

    const {  getSearchResults, search } = useSearch();

    return (
        <Container className="active" onClick={getSearchResults} active={search.length > 0}>
            <BiSearchAlt size={22} />
            <span>buscar</span>
        </Container>
    );
}

export { SearchButton };