import React, {useCallback, useState} from 'react';
import {TextField, Button} from '@shopify/polaris';

export default function SearchBar() {
  const [value, setValue] = useState('Jaded Pixel');

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const searchButton = useCallback((searchKey) => console.log(searchKey), []);

  return (
      <div id="search">
          <TextField id="searchBar" value={value} onChange={handleChange} clearButton/>
          <Button id="submitSearch" onClick={searchButton(value)}>Search</Button>
      </div>
  ); 
}