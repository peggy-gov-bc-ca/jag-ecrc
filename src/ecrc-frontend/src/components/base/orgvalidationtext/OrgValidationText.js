import React from "react";

import "./OrgValidationText.css";

export default function OrgValidationText() {
  return (
    <div>
      <h1 className="red">THIS IS NOT THE FINAL TEXT</h1>
      <span>This is just a place holder for the page.</span>
      <div>
        <br />
        <div>
          <h3>PLEASE DO NOT USE YOUR BACK BUTTON ON YOUR INTERNET BROWSER</h3>
        </div>

        <div>
          <h3>
            ALWAYS USE THE NAVIGATION BUTTONS AS INDICATED IN THE APPLICATION
          </h3>
        </div>
        <br />

        <div>
          <h3>
            Internet Explorer 11 or later is required, other types of browsers
            or older versions may experience problems
          </h3>
        </div>
        <br />

        <div>
          <b>Option 1: Request a New Criminal Record Check</b>
        </div>

        <div>
          <p>
            To Submit an online request for a criminal record check, you must:
          </p>
          <ul>
            <li>Be at least 12 years of age as of today&apos;s date.</li>
            <li>
              Have your identity verified through the Electronic Identity
              Verification
              <b>(EIV)</b>
              process.
              <br />
              <span className="red">Please Note:</span>
              Not all individuals will be able to use the EIV process and may be
              required to submit the request for a criminal record check through
              the manual paper process.
            </li>
            <li>
              Please use a laptop or desktop computer, some applicants have
              experienced difficulties using a mobile device.
            </li>
          </ul>

          <p>To use the EIV:</p>
          <ul>
            <li>
              Failure to pass the EIV twice will lock the user out for up to 72
              hours.
            </li>
            <li>
              Individuals must have a minimum Canadian credit history of at
              least six months.
            </li>
            <li>
              Individuals must have been residing in Canada for two years or
              longer.
            </li>
            <li>
              Individuals must correctly answer a set of security questions
              unique to their personal credit history.
            </li>
            <li>
              Must have a current Canadian address. (You cannot enter a foreign
              address through the online service)
            </li>
          </ul>
        </div>

        <br />

        <div>
          <b>Option 2: Share the Result of a Completed Criminal Record Check</b>
        </div>

        <div>
          <p>
            To Submit an online request to share the result of a completed
            criminal record check:
          </p>
          <ul>
            <li>
              The criminal record check must have been completed within the last
              5 years through the Ministry of Public Safety and Solicitor
              General Criminal Records Review Program. Note: A criminal record
              check is considered complete once the result of the check has been
              issued to an organization
            </li>
            <li>
              The request must be for the same type of check as previously
              completed, either for children, vulnerable adults, or both
              children and vulnerable adults
            </li>
            <li>
              Have your identity verified through the Electronic Identity
              Verification (EIV) process.
              <br />
              <span className="red">Please Note:</span>
              Not all individuals will be able to use the EIV process and may be
              required to submit the request for a criminal record check through
              the manual paper process.
            </li>
          </ul>

          <p>
            To use the EIV:
            <b>Please see requirements outlined above.</b>
          </p>
        </div>
      </div>
    </div>
  );
}
