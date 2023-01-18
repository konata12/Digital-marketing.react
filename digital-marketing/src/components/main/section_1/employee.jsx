import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className={`employee ` + this.props.class}>
                <img src={this.props.employee} alt={this.props.employeeName} />
                <div className='employee_info'>
                    <p>{this.props.employeeName}</p>
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