import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const register = this.props.reg;
        const text = this.props.text;

        if (register === 1) {
            return (
                <h1 className={`title ` + this.props.class}>
                    {text}
                </h1>
            )
        } else if (register === 2) {
            return (
                <h2 className={`title ` + this.props.class}>
                    {text}
                </h2>
            )
        } else if (register === 3) {
            return (
                <h3 className={`title ` + this.props.class}>
                    {text}
                </h3>
            )
        }
    }
}
 
export default Title;