import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OutsideClick extends Component {
    constructor(props, context) {
        super(props, context);
        // this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onClickOutsideHandler);
    }

    onClickOutsideHandler = (e) => {
        const {anchor, onClickOutside} = this.props;

        if (anchor && !anchor.contains(e.target)) {
            onClickOutside(e);
        }
    };

    render() {
        const {children} = this.props;
        return React.cloneElement(children, {});
    }
}

OutsideClick.propTypes = {};

export default OutsideClick;
