import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";

const Search = ({ setSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [value] = useDebounce(searchQuery, 500);
  
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
		  setSearch(value);
	  }, [value]);
  
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  };
  
export default Search;