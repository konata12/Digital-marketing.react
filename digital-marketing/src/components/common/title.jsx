import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const register = this.props.reg;
        const titleText = this.props.text;

        if (register === 1) {
            return (
                <h1 className='title'>
                    {titleText}
                </h1>
            )
        } else if (register === 2) {
            return (
                <h2 className='title'>
                    {titleText}
                </h2>
            )
        } else if (register === 3) {
            return (
                <h3 className='title'>
                    {titleText}
                </h3>
            )
        }
    }
}
 
export default Title;