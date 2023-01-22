import React from 'react';
import './main.css'

// Components
import Section1 from './section_1/section_1';
import Section2 from './section_2/section_2';
import Section3 from './section_3/section_3';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
        );
    }
}
 
export default Main;