import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { propToBeUsedOn } from '../../ducks/reducer'

class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <button value="primaryHome" onClick={ ( e ) => updateProp( e.target.value ) }>Primary Home</button>
                        <button value="rentalProperty" onClick={ ( e ) => updateProp( e.target.value ) }>Rental Property</button>
                        <button value="secondaryHome" onClick={ ( e ) => updateProp( e.target.value ) }>Secondary Home</button>
                    </div>
                </div>           
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    const { propToBeUsedOn } = state;

    return {
        propToBeUsedOn
    };
}

export default connect( mapStateToProps, {updateProps} ) (WizardThree); 
