import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import { FadeLoader } from 'react-spinners'
import "../components/CSS/style.css"
import Cards from "../components/Cards"



const Layout = () => {

  const [data, setData] = useState([]);


  const [isLoading, setLoading] = useState(false);
  const [yearFilter, setFilter] = useState("");



  const handleValue = (e) => {
    setFilter(e.target.value)

  }




  const fetchApi = async () => {

    try {
      setLoading(true)
      const url = "https://movie-task.vercel.app/api/popular?page=1";

      const res = await fetch(url);

      const response = await res.json();

      setData(response.data.results)

      setLoading(false)
  
    }
    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    fetchApi();


  }, [])



  const searchProduct = async (key) => {


    if (key) {

      let res = await fetch(`https://movie-task.vercel.app/api/search?page=1&query=${key}`);
      let response = await res.json();
      setTimeout(() => {
        if (response) {
          setData(response.data.results);
        }
      }, 1400)
    }
    else {
      fetchApi();
    }


  }



  if (isLoading) {
    return <div style={{
      margin: "40rem auto", width: "50%",
      display: "grid", placeItems: "center"
    }}>

      <FadeLoader color="#041c2c" loading
        cssOverride={{ fontSize: "9rem" }}
        speedMultiplier={0} width={10} height={15} margin={9}
      />
    </div>
  }

  return (
    <>
      <Navbar searchProduct={searchProduct} />
      <div className="container">
        <div className="filters_class">

        </div>

        <Cards data={data} />

      </div>
    </>
  )
}

export default Layout
