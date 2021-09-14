import "./app.css";

import { useState, FormEvent } from "react";

import { BiSearchAlt } from 'react-icons/bi';

import axios from 'axios';

import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log()
    openModal();
  }

  const getListProduct = async (search: string) => {
    const baseUrl = ` https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${search}&source=nanook`;

    await axios.get(baseUrl).then(response => {
      setProducts(response.data?.products);
    }).catch(err => {
      console.error(err);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Buscar produto </span>
          <input
            type="text"
            placeholder="O que você deseja?"
            value={searchInput}
            onChange={(text) => setSearchInput(text.target.value)}
          />
        </label>
        <button className="active">
          <BiSearchAlt size={22} />
          <span>consultar</span>
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        onAfterOpen={() => getListProduct(searchInput)}
      >
        <h2>MODAL</h2>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Produto</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr>
                <td>{product?.id}</td>
                <td>{product?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>
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

export default App;
