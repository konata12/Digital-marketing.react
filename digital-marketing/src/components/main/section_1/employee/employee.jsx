import React from 'react';
import styles from './employee.module.css';

class Employee extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cls = this.props.class ? this.props.class : ''

        return (
            <div className={styles.employeeBox}>
                <img src={this.props.employee} alt={this.props.employeeName} />
                <div className={styles.employeeInfo}>
                    <p className={styles.text}>
                        {this.props.employeeName}
                    </p>
                    <div className='stars'>
                        <img src={this.props.star} alt={this.props.starAlt} />
                        <img src={this.props.star} alt={this.props.starAlt} />
                        <img src={this.props.star} alt={this.props.starAlt} />
                        <img src={this.props.star} alt={this.props.starAlt} />
                        <img src={this.props.star} alt={this.props.starAlt} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Employee;