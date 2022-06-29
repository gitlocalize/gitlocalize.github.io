import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectItem extends Component {
  handleOnClick = (e) => {
    const { title, value, onSelectItem, onSelectClose } = this.props
    e.preventDefault();
    e.stopPropagation();
    onSelectItem && onSelectItem(title, value)
    onSelectClose();
  }

  render() {
    const { title } = this.props
    return (
      <div
        className='select-item'
        onMouseDown={this.handleOnClick}
      >
        {title}
      </div>
    )
  }
}

SelectItem.propTypes = {}

export default SelectItem
