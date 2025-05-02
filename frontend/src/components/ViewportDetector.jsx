import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '@features/viewport/viewportSlice';

const ViewportDetector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkMobile = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [dispatch]);

  return null; 
}

export default ViewportDetector