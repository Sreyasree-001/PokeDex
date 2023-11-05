import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';



const Searchbar = ({ setResults, setValue }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((id) => {
                    return value && id.name && id.name.english.toLowerCase().includes(value);
                });

                setResults(results);
                setValue(value);
            });

    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div>
            <div className='flex flex-row bg-white border-8 border-transparent  rounded-lg h-8 pt-0 pl-5 shadow-white space-x-2'>
                <FaSearch />
                <input placeholder='Search The Pokemon'
                    className='border-none max-h-full max-w-full focus:outline-none '
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Searchbar

Searchbar.proptypes = {
    setResults: PropTypes.string
}