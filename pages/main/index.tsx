import React, { useEffect, useRef } from 'react';
import start from 'core/vrcontent';
const VRDemo = () => {
  const vrRef = useRef(null);
  useEffect(() => {
    (async () => {
      if (vrRef) {
        const render = await start(vrRef.current);
        render();
      }
    })()
  }, []);

  return (
    <div className="main">
      <div className="vr-content">
        <div ref={vrRef}></div>
      </div>
    </div>
  );
}

export default VRDemo;