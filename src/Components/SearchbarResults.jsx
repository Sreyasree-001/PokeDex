import React from "react";
import "./SearchbarResults.css"
import Results from "./Results";


const SearchbarResults = ({ results }) => {
    return (
        <div className="results">
            {
                results.map((result, id) => {
                    return (
                        <Results result={result}  key={id}/>
                    )
                })
            }

        </div>
    )
}

export default SearchbarResults


