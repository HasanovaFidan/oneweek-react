import React, { useState, useContext } from 'react';
import DataContexs from '../../../Contexts/Contexts';

function Search() {
  const { setData, original } = useContext(DataContexs);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataNotFound, setDataNotFound] = useState(false);

  const handleSearch = () => {
    const filteredData = original.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDataNotFound(filteredData.length === 0);
    setData(filteredData);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDataNotFound(false);
    handleSearch();
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div>
      <div className="search">
        <input
          className='inp'
          type="text"
          placeholder='search entire store here'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick} className='btn-search'>
          Search
        </button>
      </div>
      {
        dataNotFound && <p style={{ fontSize: "30px", fontWeight: "bold" }}>Data not found</p>
      }
    </div>
  );
}

export default Search;
