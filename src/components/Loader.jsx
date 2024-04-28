
import loader from "../assets/loader.gif"
function Loader() {
    return (
        <>
            <div className="d-flex justify-content-center align-content-center bg-dark">
                <img src={loader} />
            </div>
        </>
    )
}

export default Loader
