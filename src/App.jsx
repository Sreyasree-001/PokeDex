import React , {useState, useEffect} from 'react';

import Header from "./Components/Header";

import Footer from "./Components/Footer";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import { Content } from './Components/Content';
import Searchbar from './Components/Searchbar';
import SearchbarResults from './Components/SearchbarResults';


function App() {
  const [loading, setLoading] = useState(true)

  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading && <Loading />}
      <div className="bg-gray-500">
        <Header />
        <div className="pt-5  w-40 m-auto flex flex-col items-center min-w-20">
          <Searchbar setResults={setResults} />
          <SearchbarResults results={results}/>
        </div>
        <Content/>
        {/* <Body /> */}
        <Footer />
      </div>
      
    </>
  );
}

export default App;
