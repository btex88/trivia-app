import React from 'react';
import NOT_FOUND from '../images/not-found.jpg';

class NotFound extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <div className="w-full h-36 flex items-center justify-center">
          <span className="font-bold text-4xl sm:text-5xl z-10">
            Page Not Found!
          </span>
        </div>
        <div className="max-w-3xl max-h-fit flex items-center justify-center">
          <img
            className="max-h-fit object-contain"
            src={ NOT_FOUND }
            alt="not found"
          />
        </div>
      </div>
    );
  }
}

export default NotFound;
