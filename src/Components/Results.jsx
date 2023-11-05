import React from 'react'
import "./Results.css"

const Results = ({ result }) => {
    return (
        <div className='result-items'>
            <a href=''>
                {result.name.english}
            </a>
        </div>
    )
}

export default Results
