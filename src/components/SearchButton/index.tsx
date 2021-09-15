import { BiSearchAlt } from 'react-icons/bi';

import { Container } from './styles';

import { useSearch } from '../../hooks/useSearch';

function SearchButton() {

    const {  getSearchResults } = useSearch();

    return (
        <Container className="active" onClick={getSearchResults}>
            <BiSearchAlt size={22} />
            <span>consultar</span>
        </Container>
    );
}

export { SearchButton };