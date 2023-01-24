import React from 'react';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.openPurchasePage = this.openPurchasePage.bind(this);
    }

    openPurchasePage(e) {
        if (this.props.handlerFunc) {
            this.props.handlerFunc(e)
        }
    }

    render() {
        const name = this.props.name;
        const color = this.props.color;
        const cls = this.props.class ? this.props.class : ''

        return (
            <button onClick={this.openPurchasePage} className={'btn ' + color + ' ' + cls}>
                {name}
            </button>
        );
    }
}
 
export default Btn;