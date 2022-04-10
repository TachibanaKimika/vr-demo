import React, { useEffect, useRef } from 'react';
import start from 'core/vrcontent';
const VRDemo = () => {
  const vrRef = useRef(null);
  useEffect(() => {
    // console.log(vrRef)
    if(vrRef) {
      start(vrRef.current);
    }
  }, []);

  return (
    <div ref={vrRef}></div>
  );
}

export default VRDemo;