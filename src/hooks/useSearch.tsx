import { useContext } from 'react';

import { Context as SearchContext } from '../contexts/search';

export function useSearch() {
    const context = useContext(SearchContext);

    return context;
}