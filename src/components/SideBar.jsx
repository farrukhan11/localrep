import { RiTvLine } from 'react-icons/ri'; // Import the icon component
import styles from './SideBar.module.css'; // Import the styles
import { FaFire } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <>
            <div className={`${styles.area1} vh-100 border-end`}>

                <div className="d-flex align-items-center p-5 text-secondary ">
                    <RiTvLine size={30} className="me-2" />
                    <h2>Movie App</h2>
                </div>
                <div className={`ps-5 ${styles.colorWhite}`} >
                    <h4>New Feeds</h4>
                    <ul className='mt-4'>
                        <Link className='d-flex align-items-center  mt-3' to='/trending'>
                            <FaFire className='mx-2 mb-2' />
                            <h5>Trending</h5>
                        </Link>
                        <Link className='d-flex align-items-center  mt-3' to='/popular'>
                            <IoSparklesOutline className='mx-2 mb-2' />
                            <h5>Popular</h5>
                        </Link>
                        <Link className='d-flex align-items-center  mt-3' to='/movies'>
                            <MdOutlineLocalMovies className='mx-2 mb-2' />
                            <h5>Movies</h5>
                        </Link>
                        <Link className='d-flex align-items-center  mt-3' to='/tvshows'>
                            <PiTelevisionSimpleBold className='mx-2 mb-2' />
                            <h5>TV Shows</h5>
                        </Link>
                        <Link className='d-flex align-items-center  mt-3' to='/people'>
                            <IoPeopleSharp className='mx-2 mb-2' />
                            <h5>People</h5>
                        </Link>
                    </ul>
                    <hr />
                    <h4>Website Information</h4>
                    <ul className='mt-4'>
                        <a className='d-flex align-items-center  mt-3' to='/about'>
                            <IoIosInformationCircleOutline className='mx-2 mb-2' />
                            <h5>About Movie App</h5>
                        </a>
                        <a className='d-flex align-items-center  mt-3' to='/contact'>
                            <RiContactsLine className='mx-2 mb-2' />
                            <h5>Contact Us</h5>
                        </a>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default SideBar;
