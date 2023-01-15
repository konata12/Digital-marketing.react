import React from 'react';
import './main.css'

// Components
import Section1 from './section_1/section_1';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <main>
                <Section1 />
            </main>
        );
    }
}
 
export default Main;