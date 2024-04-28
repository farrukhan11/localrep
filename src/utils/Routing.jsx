import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Popular from "../components/Popular"
import Loader from "../components/Loader"
function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/popular' element={<Popular />} />
                <Route path='/l' element={<Loader />} />
            </Routes>
        </>
    )
}

export default Routing
