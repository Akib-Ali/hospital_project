import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Navbar } from "./navbar"

export const AllRoutes=()=>{
    return(
        <>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
              </Routes>


        </>
    )
}