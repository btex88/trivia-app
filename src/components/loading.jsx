import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

class Loading extends React.Component {
  render() {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <AiOutlineLoading3Quarters
          className="animate-spin text-8xl text-blue-600 opacity-50"
        />
        <span className="text-3xl pt-10 animate-pulse text-blue-600">Loading...</span>
      </div>
    );
  }
}

export default Loading;
