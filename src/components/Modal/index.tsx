import { useSearch } from '../../hooks/useSearch';

import { Viewer } from './styles';

import Modal from 'react-modal';

import { ProductProp } from '../../contexts/search';

Modal.setAppElement('#root');

function ModalResult() {
    const { products, cleanProducts } = useSearch();

    const closeModal = () => cleanProducts();

    return (
        <Modal
            isOpen={products.length > 0}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal result product">
            <Viewer>
                {products.map((product: ProductProp) => (
                    <a href={`https://www.americanas.com.br/produto/${product.id}`} target="_blank">
                        <span>
                            #{product.id}
                        </span>

                        <div>
                            <h2>{product.name}</h2>
                            <p>
                                <strong>{product._meta?.visitsClickCount} visitas</strong>
                            </p>
                        </div>
                    </a>
                ))}
                <br />
            </Viewer>
        </Modal>
    );
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


export { ModalResult };