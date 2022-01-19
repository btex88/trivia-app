import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from '@headlessui/react';
import * as COMP from './index';

class Dropdown extends React.Component {
  render() {
    const { valuesArr, label, handleClick, id } = this.props;
    return (
      <Menu>
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <Menu.Button
            className="w-56 h-12 bg-blue-300 flex flex-col items-center justify-center
            rounded text-lg"
          >
            <span className="font-semibold tracking-wider">
              { label }
            </span>
          </Menu.Button>
          <Menu.Items
            className="w-72 max-h-96 bg-blue-100 border rounded overflow-auto"
          >
            {valuesArr.map((value, index) => (
              <COMP.DropdownItem
                key={ index }
                label={ value.name || value }
                handleClick={ handleClick }
                id={ id }
              />
            ))}
          </Menu.Items>
        </div>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => state;

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valuesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Dropdown);
