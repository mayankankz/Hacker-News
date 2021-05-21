
import React from 'react';

const Link = ({ url, title }) => (
  <a href={url}>
    {title}
  </a>
);

const Story = ({ story: { id,url,title } }) => {
  return (
    <div className="story">
      <div className="story-title">
        <Link url={url} title={title} />
      </div>
      
    </div>
  );
};

export default Story;