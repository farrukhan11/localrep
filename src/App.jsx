import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./utils/Routing";
import Loader from './components/Loader';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
    return (
        <>
            <SkeletonTheme baseColor="#e7eaf6" highlightColor="#a7bcb9">
                <Routing />
            </SkeletonTheme>
        </>
    )
}

export default App
