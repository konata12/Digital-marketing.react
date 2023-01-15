import React from 'react';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.openPurchasePage = this.openPurchasePage.bind(this);
    }

    openPurchasePage(e) {
        this.props.handlerFunc(e)
    }

    render() {
        const name = this.props.name;
        const color = this.props.color;

        return (
            <button onClick={this.openPurchasePage} className={color ? ('btn_' + color) : ''}>
                {name}
            </button>
        );
    }
}
 
export default Btn;