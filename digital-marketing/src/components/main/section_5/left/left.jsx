import React from 'react';
import styles from './left.module.css';

// Components
import Title from '../../../common/title';
import TextFill from '../../../common/text_fill';
import StatBar from './stat_bar/stat_bar';

class Left extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const statBarsInfo = [
            {
                name: 'Research',
                percent: 85,
                color: 'blue'
            },
            {
                name: 'Education',
                percent: 65,
                color: 'purple'
            },
            {
                name: 'Strategy Development',
                percent: 72,
                color: 'orange'
            }
        ]
        let lenght = 0 
        statBarsInfo.forEach(() => {
            lenght++
        })
        const statBars = statBarsInfo.map((statBar, i) => {
            return <StatBar
                key={statBar.name}
                name={statBar.name}
                percent={statBar.percent}
                color={statBar.color}
                isLast={(lenght - 1) === i}
            />
        })

        return (
            <div className={styles.left}>
                <div>
                    <Title
                        class={styles.title}
                        reg={2}
                        text='Marketing and digital
                        products that grow
                        businesses!'
                    />
                    <TextFill
                        class={styles.text}
                        text='The first rule of any technology used in a business is that automation applied to
                        an efficient operation will magnify the efficiency.'
                    />
                    {statBars}
                </div>
            </div>
        );
    }
}

export default Left;