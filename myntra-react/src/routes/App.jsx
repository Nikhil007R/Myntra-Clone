import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from "../components/fetchItems"
import { useSelector } from "react-redux"
import Loader from "../components/Loader"
// import HomeItem from "../components/HomeItem"

function App() {

  const fetchStatus = useSelector((store)=> store.fetchStatus)

  return (
    <>
      <div>
        <Header/>
        <FetchItems/>
        {fetchStatus.currentlyFetching ? <Loader/> : <Outlet/> }
        <Footer/>
      </div>
    </>
  )
}

export default App
