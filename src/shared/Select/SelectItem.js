import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectItem extends Component {
  handleOnClick = (e) => {
    const { title, onSelectItem, onSelectClose } = this.props
    // e.preventDefault();
    // e.stopPropagation();
    onSelectItem && onSelectItem(title)
    onSelectClose();
  }

  render() {
    const { title, href } = this.props
    return (
      <a
        className='select-item'
        href={href}
        onMouseDown={this.handleOnClick}
      >
        {title}
      </a>
    )
  }
}

SelectItem.propTypes = {}

export default SelectItem
