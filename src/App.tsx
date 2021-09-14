import "./app.css";

import { useState, FormEvent } from "react";

import { BiSearchAlt } from 'react-icons/bi';

import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    openModal();
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
      >
        <h2>MODAL</h2>
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
