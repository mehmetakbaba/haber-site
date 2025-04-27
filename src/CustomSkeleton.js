
import Skeleton from '@mui/material/Skeleton';

function CustomSkeleton({skeletonCount}) {

    const skeletonElements = Array.from({ length: skeletonCount }, (_, index) => (
      <div className="skeleton" key={index}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="rectangular" width={200} height={80} />
        <Skeleton variant="rounded" width={200} height={80} />
      </div>
    ));
  
    return <div className="skeleton-flex">{skeletonElements}</div>;
}

export default CustomSkeleton;