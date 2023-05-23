import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const SearchFilter = () => { 
const userData = 
[
  {id: 1, name: 'Nabil', email: 'nabil@hello.com'},
  {id: 2, name: 'Ali', email: 'ali@hello.com'},
  {id: 3, name: 'Hasan', email: 'hasan@hello.com'},
];

const [filteredResults, setFilteredResults] = useState(userData);
const [searchName, setSearchName] = useState('');

const searchItem = (e) => {
  const searchTerm = e.target.value;
  setSearchName(searchTerm);

const filteredData = userData.filter((user) => {
  return user.name.toLowerCase().includes(searchTerm.toLowerCase());
});

  setFilteredResults(filteredData);
};

return (
  <div>
    <input
      type="text"
      placeholder="Search Name"
      value={searchName}
      onChange={searchItem}
    />
    <ul>
      {filteredResults.map((userData) => (
        <li key={userData.id}>
          {userData.name} - {userData.email}
        </li>
      ))}
    </ul>
  </div>
);

};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        You will build an app that allows users to enter search keys and it filters the user list from the hardcode list based on the entered key
        </p>
        <SearchFilter />
      </header>
    </div>
  );
}



export default App;

// dataset, id: name: email: done (1/5)
// e.target.value done (2/5)
// use filter done (3/5)
// .map done (4/5)
// key id to display (5/5)
