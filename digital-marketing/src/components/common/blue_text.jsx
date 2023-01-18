import React from 'react';

class BlueText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <p className={'blue_text ' + this.props.class}>
                {this.props.text}
            </p>
        );
    }
}
 
export default BlueText;