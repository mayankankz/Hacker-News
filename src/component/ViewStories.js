import React from 'react';
import Story from './Story';

import useData from '../hooks/useData';

const ViewStories = (props) => {
  const { type } = props.match.params;
  const { isLoading, stories } = useData(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ViewStories;