import React from 'react';
import { connect } from "react-redux";

import * as Survey from "survey-react";
import { firestore } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors"

import './preregistrationpage.scss'

class PreregistrationPage extends React.Component {

  json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "title": "Player's Name:",
            "isRequired": true,
            "size": 50
          },
          {
            "type": "text",
            "name": "experience",
            "title": "Years of Travel Softball Experience:",
            "isRequired": true
          },
          {
            "type": "comment",
            "name": "previous",
            "title": "Previous Travel Teams:",
            "cols": 50
          },
          {
            "type": "checkbox",
            "name": "positions",
            "title": "Positions:",
            "isRequired": true,
            "choices": [
              {
                "value": "P, ",
                "text": "Pitcher"
              },
              {
                "value": "C, ",
                "text": "Catcher"
              },
              {
                "value": "1B, ",
                "text": "1st Base"
              },
              {
                "value": "2B, ",
                "text": "2cnd Base"
              },
              {
                "value": "3B, ",
                "text": "3rd Base"
              },
              {
                "value": "SS, ",
                "text": "Shortstop"
              },
              {
                "value": "LF, ",
                "text": "Left field"
              },
              {
                "value": "CF, ",
                "text": "Center field"
              },
              {
                "value": "RF, ",
                "text": "Right field"
              }
            ],
            "colCount": 3
          },
          {
            "type": "radiogroup",
            "name": "throws",
            "title": "Throws:",
            "isRequired": true,
            "choices": [
              {
                "value": "Right",
                "text": "Right handed"
              },
              {
                "value": "Left",
                "text": "Left handed"
              },
              {
                "value": "Both",
                "text": "Both"
              }
            ],
            "colCount": 3
          },
          {
            "type": "radiogroup",
            "name": "bats",
            "title": "Bats:",
            "isRequired": true,
            "choices": [
              {
                "value": "Right",
                "text": "Right handed"
              },
              {
                "value": "Left",
                "text": "Left handed"
              },
              {
                "value": "Both",
                "text": "Both"
              }
            ],
            "colCount": 3
          },
          {
            "type": "radiogroup",
            "name": "division",
            "title": "Division age group:",
            "isRequired": true,
            "choices": [
              {
                "value": "10U",
                "text": "10U"
              },
              {
                "value": "12U",
                "text": "12U"
              },
              {
                "value": "14U",
                "text": "14U"
              },
              {
                "value": "16U",
                "text": "16U"
              }
            ],
            "colCount": 4
          },
          {
            "type": "text",
            "name": "DOB:",
            "title": "Date of Birth:",
            "isRequired": true,
            "requiredErrorText": "Please enter a valid Date of Birth.",
            "inputType": "date",
            "min": "2004-01-01",
            "max": "2010-01-01",
            "placeHolder": "mm/dd/yyyy"
          },
          // {
          //   "type": "html",
          //   "name": "question10"
          // },
          {
            "type": "text",
            "name": "email",
            "title": "Email Address:",
            "isRequired": true,
            "requiredErrorText": "Please enter a valid email address.",
            "validators": [
              {
                "type": "email"
              }
            ],
            "inputType": "email",
            "size": 50,
            "placeHolder": "player or parent/guardian email is acceptable"
          },
          {
            "type": "text",
            "name": "phone:",
            "title": "Phone number:",
            "isRequired": true,
            "requiredErrorText": "Please enter a valid phone number.",
            "validators": [
              {
                "type": "numeric"
              }
            ],
            "inputType": "tel",
            "maxLength": 10,
            "size": 50,
            "placeHolder": "player or parent/guardian email is acceptable"

          }
        ],
        "title": "Fire Fastpitch Tryout Preregistration Form"
      }
    ]
  };

  onComplete = (survey, options) => {
    //Write survey results into database
    let player = survey.data;
    let division = player.division;
    
    let newplayers = [
      player,
      ...this.props.registrationData[division].players
    ];
    console.log(this.props.registrationData[division].players)

    const divisionId = this.props.registrationData[division].id;
    firestore.collection("preregistration").doc(divisionId).update({
      players: newplayers,
    });
    
    // console.log("Survey results: " + JSON.stringify(survey.data));
  }
  render() {
    // const { registrationData } = this.props;
    // console.log(this.props.registrationData)
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return (
      <div className='survey'>
        <Survey.Survey model={model} onComplete={this.onComplete} />
        <span> * idicates required field</span>
      </div>
    )
    /*
    //The alternative way. react Survey component will create survey model internally
    return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
    */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or 
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function. 
    //If needed react Survey Component will change its behavior and change UI.
  }
};

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData
})

export default connect(mapStateToProps)(PreregistrationPage);