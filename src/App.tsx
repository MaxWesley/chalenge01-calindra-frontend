import "./app.css";

import { FormEvent } from "react";

import { SearchInput } from "./components/SearchInput";
import { SearchButton } from "./components/SearchButton";

import { SearchProvider } from './contexts/search';
import { ModalResult } from "./components/Modal";

function App() {
  const handleSubmit = (event: FormEvent) => event.preventDefault();

  return (
    <SearchProvider>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <SearchInput />
          <SearchButton />
        </form>
        <ModalResult />
      </div>
    </SearchProvider>
  );
}

export default App;
