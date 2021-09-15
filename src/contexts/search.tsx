import 'react-toastify/dist/ReactToastify.css';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { api } from '../services/api';

export interface ProductProp {
    id: Number;
    name: string;
    type: string;
    _meta: {
        visitsClickCount: string;
    }
}

interface ContextProps {
    products: ProductProp[];
    getSearchResults(): Promise<void>;
    cleanProducts(): void;
    setSearch: Dispatch<SetStateAction<string>>;
    search: string;
}

const Context = createContext({} as ContextProps);

interface Props {
    children: React.ReactChild;
}

function SearchProvider({ children }: Props) {
    const [products, setProducts] = useState<ProductProp[]>([]);

    const [search, setSearch] = useState('');

    const getSearchResults = async () => {
        await api.get(`autocomplete?content=${search}&source=nanook`)
            .then(response => {
                setProducts(response.data?.products);
                
                if(response.data?.products.length === 0) {
                    toast.warning('Nenhum produto encontrado.');                    
                }
            }).catch(error => {
                toast.error(error);
            });
    }

    const cleanProducts = () => setProducts([]);

    return (
        <Context.Provider value={{ products, getSearchResults, cleanProducts, setSearch, search }}>
            {children}
            <ToastContainer />
        </Context.Provider>
    );
}

export { SearchProvider, Context };