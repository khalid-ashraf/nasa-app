import { useEffect, useState, useRef } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);
  const controllerRef = useRef(null);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setContent(apiData);
        console.log("Fetched from cache");
        return;
      }

      localStorage.clear();

      try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(localKey, JSON.stringify(data));
        console.log("Fetched from api");
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPIData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {content ? (
        <Main imgURL={content?.url} title={content?.title} />
      ) : (
        <div className='loadingState'>
          <i className='fa-solid fa-gear'></i>
        </div>
      )}
      {showModal && (
        <Sidebar
          handleShowModal={handleShowModal}
          title={content?.title}
          description={content?.explanation}
        />
      )}
      {content && (
        <Footer
          handleShowModal={handleShowModal}
          title={content?.title}
          by={content?.copyright}
        />
      )}
    </>
  );
}

export default App;

