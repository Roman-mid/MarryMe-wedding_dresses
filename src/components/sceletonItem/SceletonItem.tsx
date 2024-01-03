import React from 'react';
import ContentLoader from "react-content-loader";

const ScepetonItem: React.FC = () => (
    <ContentLoader className="sceleton"
      speed={2}
      width={350}
      height={600}
      viewBox="0 0 350 600"
      backgroundColor="#ebebeb"
      foregroundColor="#dedede"
    >
      <rect x="0" y="0" rx="8" ry="8" width="350" height="600" />
    </ContentLoader>
  )
  
  export default ScepetonItem;