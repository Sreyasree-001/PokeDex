import React, {useState, useEffect} from 'react';

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import { Content } from './Components/Content';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading && <Loading />}
      <div className="bg-gray-500">
        <Header />
        <Content/>
        {/* <Body /> */}
        <Footer />
      </div>
      
    </>
  );
}

export default App;
