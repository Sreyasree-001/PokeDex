import React, {useState, useEffect} from 'react';

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading && <Loading />}
      <div>
        <Header />
        <Body />
        {/* <Loader/> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
