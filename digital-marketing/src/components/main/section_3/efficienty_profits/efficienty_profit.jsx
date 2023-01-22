import React from 'react';
import '../efficienty_profits/efficienty_profit.css'

// Components
import Title from '../../../common/title';
import TextFill from '../../../common/text_fill';

class EfficientyProfit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cls = 'profit_box';
        const img = this.props.img;
        const alt = this.props.alt;
        const title = this.props.title;
        const text = this.props.text;

        return (
            <div className={cls}>
                <img src={img} alt={alt} />
                <Title
                    class={cls}
                    reg={3}
                    text={title}
                />
                <TextFill
                    class={cls}
                    text={text}
                />
            </div>
        );
    }
}
 
export default EfficientyProfit;