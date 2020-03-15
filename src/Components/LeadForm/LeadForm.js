import React from "react";
import { TextInput, Button, Select, CardPanel } from "react-materialize";

import "./leadForm.css";

const LeadsForm = props => {
    return (
    
    <div id="form">
    <CardPanel className="formCard">
    <form>
      <div>
        <div className="halves">
          <TextInput 
            id="first_name"
            type="text" 
            className="validate"
            // placeholder="John"
            label="First Name"
            error="First Name Needed!"
          />
        </div>
        <div className="halves">
        <TextInput 
            id="last_name"
            type="text" 
            className="validate"
            // placeholder="Smith"
            label="Last Name"
            error="Last Name Needed!"
          />
        </div>
      </div>
      <div>
        <div className="halves">
        <TextInput 
            id="email"
            email 
            className="validate"
            // placeholder="test@test.com"
            label="Email"
            error="Email Needed!"
          />
        </div>
        <div className="halves">
            <div id="demoText">
           <h7>Would you like a free demo?</h7>
            </div>
           <div id="radios">
            <p>
                <label>
                <input className="with-gap radiobttn" name="demo" type="radio" checked />
                <span className="checkmark">Yes</span>
                </label>
            </p>
            <p>
                 <label>
                <input className="with-gap radiobttn" name="demo" type="radio" />
                <span className="checkmark">No</span>
                </label>
            </p>
            </div>
            </div>
      </div>

      <div >
        <div className="thirds">
          <TextInput 
            id="city"
            type="text" 
            className="validate"
            // placeholder="Seattle"
            label="City"
            error="City Needed!"
          />
        </div>
        <div className="thirds" id="dropdown">
            <Select
                // label="State"
                options={{
                    classes: "validate",
                    dropdownOptions: {
                        alignment: "right",
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        required: true
                    }
                }}
            >
                <option value="select">State</option>
                <option value="Alabama">AL</option>
                <option value="Alaska">AK</option>
                <option value="Arizona">AZ</option>
                <option value="Arkansas">AR</option>
                <option value="California">CA</option>
                <option value="Colorado">CO</option>
                <option value="Connecticut">CT</option>
                <option value="Deleware">DE</option>
                <option value="Florida">FL</option>
                <option value="Georgia">GA</option>
                <option value="Hawaii">HI</option>
                <option value="Idaho">ID</option>
                <option value="Illinois">IL</option>
                <option value="Indiana">IN</option>
                <option value="Iowa">IA</option>
                <option value="Kansas">KS</option>
                <option value="Kentucky">KY</option>
                <option value="Louisiana">LA</option>
                <option value="Maine">ME</option>
                <option value="Maryland">MD</option>
                <option value="Massachusetts">MA</option>
                <option value="Michigan">MI</option>
                <option value="Minnesota">MN</option>
                <option value="Mississippi">MS</option>
                <option value="Missouri ">MO</option>
                <option value="Montana">MT</option>
                <option value="Nebraska">NE</option>
                <option value="Nevada">NV</option>
                <option value="New Hampshire">NH</option>
                <option value="New Jersey">NJ</option>
                <option value="New Mexico">NM</option>
                <option value="New York">NY</option>
                <option value="North Carolina">NC</option>
                <option value="North Dakota">ND</option>
                <option value="Ohio">OH</option>
                <option value="Oklahoma">OK</option>
                <option value="Oregon">OR</option>
                <option value="Pennsylvania">PA</option>
                <option value="Rhode Island">RI</option>
                <option value="South Carolina">SC</option>
                <option value="South Dakota">SD</option>
                <option value="Tennessee">TN</option>
                <option value="Texas">TX</option>
                <option value="Utah">UT</option>
                <option value="Vermont">VT</option>
                <option value="Virginia">VA</option>
                <option value="Washington">WA</option>
                <option value="West Virginia">WV</option>
                <option value="Wisconsin">WI</option>
                <option value="Wyoming">WY</option>
            </Select>
         </div>
 
      <Button 
        id="submitButton"
        node="button"
        type="submit"
        waves="light"
        >Submit
        </Button>
      </div>
      
    </form>
        </CardPanel>
    </div>
    )
};

export default LeadsForm;