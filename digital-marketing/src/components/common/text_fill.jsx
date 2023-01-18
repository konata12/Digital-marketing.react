import React from 'react';

class TextFill extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <p className={`text_fill ` + this.props.class}>
                {this.props.text}
            </p>
        );
    }
}
 
export default TextFill;