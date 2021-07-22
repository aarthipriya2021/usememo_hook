import React, { useState, useMemo} from 'react';
import './App.css';

const skills = [ "HTML", "CSS", "JavaScript", "...1000 more"]
function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useMemo(() =>{ 
    return skills.filter(s => s.includes(searchTerm))},
   [searchTerm])

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="App">
      <h2>Search searchResults</h2>
      <input onChange={handleSearchInput} />
      <ul>
        {searchResults.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
