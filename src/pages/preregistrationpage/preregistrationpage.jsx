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
            "title": "Player's First Name:",
            "isRequired": true,
            "size": 50
          },
          {
            "type": "text",
            "name": "last",
            "title": "Player's Last Name:",
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
            // "visible": false,
            // "visibleIf": "{Years of Travel Softball Experience:} >= 1",
            "title": "Previous Travel Teams:",
            // "enableIf": "{Years of Travel Softball Experience:} >= 1",
            "defaultValue": "  ",
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
            "name": "DOB",
            "title": "Date of Birth",
            "isRequired": true,
            "requiredErrorText": "Please enter a valid Date of Birth.",
            "inputType": "date",
            "min": "2003-01-01",
            "max": "2013-01-01",
            "placeHolder": "mm/dd/yyyy"
          },
          // {
          //   "type": "html",
          //   "name": "question10"
          // },
          {
            "type": "text",
            "name": "email",
            "title": "Player Email Address:",
            "requiredErrorText": "Please enter a valid email address.",
            "validators": [
              {
                "type": "email"
              }
            ],
            "inputType": "email",
            "size": 50,
            "placeHolder": "player email is optional"
          },
          {
            "type": "text",
            "name": "phone",
            "title": "Player Phone number:",
            "requiredErrorText": "Please enter a valid phone number.",
            "validators": [
              {
                "type": "numeric"
              }
            ],
            "inputType": "tel",
            "maxLength": 10,
            "size": 50,
            "placeHolder": "player phone number is optional"

          },
          {
            "type": "text",
            "name": "parent1",
            "title": "Parent/Guardian name -1",
            "size": 50,
          },
          {
            "type": "text",
            "name": "parent1phone",
            "title": "Parent/Guardian Phone number:",
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
          },
          {
            "type": "text",
            "name": "parent1email",
            "title": "Parent/Guardian Email Address:",
            "isRequired": true,
            "requiredErrorText": "Please enter a valid email address.",
            "validators": [
              {
                "type": "email"
              }
            ],
            "inputType": "email",
            "size": 50,
          },
          {
            "type": "text",
            "name": "parent2",
            "title": "Parent/Guardian name -2",
            "placeHolder": "optional",
            "size": 50,
          },
          {
            "type": "text",
            "name": "parent2phone",
            "title": "Parent/Guardian Phone number:",
            "requiredErrorText": "Please enter a valid phone number.",
            "validators": [
              {
                "type": "numeric"
              }
            ],
            "inputType": "tel",
            "maxLength": 10,
            "size": 50,
            "placeHolder": "optional"

          },
          {
            "type": "text",
            "name": "parent2email",
            "title": "Parent/Guardian Email Address:",
            "requiredErrorText": "Please enter a valid email address.",
            "validators": [
              {
                "type": "email"
              }
            ],
            "inputType": "email",
            "size": 50,
            "placeHolder": "optional"
          },
          {
            "type": "radiogroup",
            "name": "session",
            "title": "Which tryout session will you be attending",
            "choices": [
              {
                "value": "August 5th",
                "text": "August 5th  6-8 PM"
              },
              {
                "value": "August 15th",
                "text": "August 15th  10-12 AM"
              },
              {
                "value": "TBD",
                
                "text": "Private, you will be contacted to schedule"
              }
            ]
          }
        ],
        "title": "Fire Fastpitch Tryout Preregistration Form"
      }
    ]
  };

  onComplete = (survey, options) => {
    //Write survey results into database
    let player = survey.data;
    player.onTeam = '';
    player.tryout = '';
    let division = player.division;
    console.log(player)

    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Please check your answers and click OK to proceed or Cancel to start over! \n name: ${player.name} ${player.last} \n travel experience: ${player.experience} years \n ${player.previous ? `previous teams: ${player.previous} \n` : ""} positions: ${player.positions} \n throws: ${player.throws} handed \n bats: ${player.bats} handed \n division: ${player.division} \n DOB: ${player.DOB} \n email: ${player.email} \n phone: ${player.phone} /n parent/guardians: ${player.parent1} ${player.parent2} /n tryout session: ${player.session}`)) {
      let newplayers = [
        player,
        ...this.props.registrationData[division].players
      ];
      console.log(this.props.registrationData[division].players)

      const divisionId = this.props.registrationData[division].id;
      firestore.collection("preregistration").doc(divisionId).update({
        players: newplayers,
      })
        .then(response => {
          alert(`Your registration has been submitted `)
          window.location = '/Tryouts'
        })

    } else {
      window.location = '/Preregistration'
    }
  }
  render() {
    var model = new Survey.Model(this.json);
    console.log(model)
    return (
      <div className='survey'>
        <Survey.Survey model={model} onComplete={this.onComplete} />
        <span> * idicates required field</span>
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData
})

export default connect(mapStateToProps)(PreregistrationPage);