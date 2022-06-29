import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import './select.css'
import OutsideClick from "@site/src/shared/OutsideClick";
import SelectList from "@site/src/shared/Select/SelectList";

const CLOSE_SELECT_EVENTS = ['resize', 'scroll'];

class Select extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        CLOSE_SELECT_EVENTS.forEach((eventType) => window.addEventListener(eventType, this.onSelectClose));
    }

    componentWillUnmount() {
        CLOSE_SELECT_EVENTS.forEach((eventType) => window.removeEventListener(eventType, this.onSelectClose));
    }

    onSelectOpen = () => {
        const {open} = this.state;
        !open && this.setState({open: true})
    };

    onSelectClose = (e) => {
        const {open} = this.state;
        open && this.setState({open: false})
    };

    onSelectToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState((prevState) => ({open: !prevState.open}));
    };

    render() {
        const {open} = this.state;
        const {className, listClassName, title, children} = this.props

        const selectClassnames = cs(className, 'select', {
            'select-open' : open
        })
        const listClassnames = cs(listClassName, 'select-list')

        return (
            <div className={selectClassnames}
                 ref={selectRef => this.selectRef = selectRef}
                 onMouseDown={this.onSelectToggle}>
                <div className='select-title'>{title}</div>
                {open && (
                    <OutsideClick anchor={this.selectRef} onClickOutside={this.onSelectClose}>
                        <SelectList className={listClassnames} anchor={this.selectRef}>
                            {
                                React.Children.map(children, (child) => (
                                    React.cloneElement(child, {
                                        onSelectClose: this.onSelectClose
                                    })
                                ))
                            }
                        </SelectList>
                    </OutsideClick>
                )}
            </div>
        );
    }
}

Select.propTypes = {}

export default Select
