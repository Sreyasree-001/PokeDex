import React from "react";
import "./SearchbarResults.css"
import Results from "./Results";


const SearchbarResults = ({ results }) => {
    return (
        <div className="results absolute translate-y-10 w-60 font-mono z-10">
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


