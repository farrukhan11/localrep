import styles from './Main.module.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Input() {
    return (
        <>
            <div className={`${styles.area2}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mt-5 d-flex align-items-center w-75 mx-auto">
                                <span className="align-middle"><FaSearch className='text-secondary' /></span>
                                <input className={`${styles.inputArea} ${styles.inputAreaNoBorder} form-control`} type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Search Anything' />
                            </div>
                        </div>
                        <div className={`col-9 ${styles.customHeight} mx-auto `}>
                            {/* <Link className='bg-white text-dark d-flex align-items-center justify-content-between py-4 border-bottom' to='/product/1'>
                                <img src="" alt="" />
                                <h5>Movie 1</h5>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input
