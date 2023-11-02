import React from 'react';
import './Loading.css'; 

const Loading = () => {
    return (
      <div className="loading-screen bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <div className="loading-spinner"></div>
      </div>
    );
};

export default Loading;