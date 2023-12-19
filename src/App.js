import { createBrowserRouter } from "react-router-dom";
import ROOT from "./Router/index.routes";
import { RouterProvider } from "react-router";
import DataContexs from "./Contexts/Contexts";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"




const root = createBrowserRouter(ROOT)
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/Books")
      .then(res => {
        setLoading(false);
        setData(res.data);
        setOriginal(res.data);

      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);


  const values = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    original,
    setOriginal
  };
  return (
    <DataContexs.Provider value={values}>
      <RouterProvider router={root} />
    </DataContexs.Provider>
  );
}

export default App;
