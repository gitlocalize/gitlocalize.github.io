import React, {Component} from "react";
import ReactDOM from "react-dom";
import cs from "classnames";

class SelectList extends Component {

    componentDidMount() {
        this.setPositionByAnchor();
    }

    setPositionByAnchor = () => {
        const {anchor} = this.props;

        if (anchor && this.selectListRef) {
            const selectListElement = ReactDOM.findDOMNode(this.selectListRef);
            const selectListElementRect = selectListElement.getBoundingClientRect();
            const anchorElement = ReactDOM.findDOMNode(anchor);
            const anchorElementRect = anchorElement.getBoundingClientRect();
            const {width: anchorWidth, height, top, left} = anchorElementRect;
            const {width: listWidth} = selectListElementRect;

            selectListElement.style.cssText = `top: ${top + height}px; left: ${left - (listWidth - anchorWidth)}px;`;
        }
    }

    render() {
        const {className, children} = this.props;
        const listClassnames = cs(className, 'select-list')
        return (
            <div className={listClassnames} ref={selectListRef => this.selectListRef = selectListRef}>
                {children}
            </div>
        )
    }
}

SelectList.propTypes = {}

export default SelectList
