import { Routes, Route } from "react-router-dom";
import './App.css';
import { CharactersList } from "./pages/CharactersList/CharactersList";
import { Character } from "./pages/Character/Character";
import { NotFound } from "./pages/NotFound/NotFound";
import { Search } from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route exact path="/:id" element={<Character />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
