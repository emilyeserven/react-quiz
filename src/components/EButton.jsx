import React from 'react';

class EButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <button
                    onClick={this.props.onClick}
                    className="ebutton-render btn btn-secondary"
                    disabled={this.props.disabled}>
                {this.props.children}
                </button>
        )
    }
}

export default EButton;