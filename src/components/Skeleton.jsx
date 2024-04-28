import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader() {
    return (
        <>
            <div className="ml-4">
                <Skeleton count={1} width={220} height={150} />
                <Skeleton count={1} width={220} height={40} />
                <Skeleton count={1} width={220} height={20} />
            </div>
        </>
    )
}

export default SkeletonLoader
