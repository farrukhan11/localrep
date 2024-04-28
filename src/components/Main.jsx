import Header from './Header';
import Input from './Input';
import styles from './Main.module.css';

function Main() {
    return (
        <>
            <div className={`${styles.area2} vh-100`}>
                <Input />
                <Header />
            </div>
        </>
    );
}

export default Main;
