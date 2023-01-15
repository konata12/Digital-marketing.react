import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className='employee'>
                <img src={this.props.employee} alt={this.props.employeeName} />
                <div>
                    <p>{this.props.employeeName}</p>
                    <div>
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