import React from 'react';
import * as COMP from '.';

class Header extends React.Component {
  render() {
    return (
      <div
        className="w-full h-20 flex flex-row flex-nowrap justify-evenly items-center
        bg-blue-300"
      >
        <COMP.HeaderAvatar />
        <COMP.HeaderPlayerInfo />
      </div>
    );
  }
}

export default Header;
