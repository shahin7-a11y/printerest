import React from "react";
import "./Usercard.css";

function Usercard({setbackground}) {
  return (
    <div className="stage" aria-hidden="false">
      <div className="card" role="dialog" aria-label="Profile menu">
        <div className="profile-top" style={{ textAlign: "center" }}>
            <i class="bi bi-x-lg" onClick={()=>setbackground("homeview")}></i>
          <div className="avatar" aria-hidden="true">
            A
            <div className="camera" title="Change photo">
              {/* small camera svg */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9 7L10 5H14L15 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H9Z"
                  stroke="#111"
                  strokeWidth="0.6"
                  fill="#ffffff"
                />
                <circle cx="12" cy="13" r="3" fill="#111" />
              </svg>
            </div>
          </div>

          <div className="name">Aneen muhammed</div>
          <div className="email">muhammedaneen@gmail.com</div>

          <button className="btn-profile" id="profileInfoBtn">
            Profile Info
          </button>
        </div>

        <div className="divider" role="separator" aria-hidden="true"></div>

        <div className="actions" aria-hidden="false">
          <div
            className="action switch"
            id="switchAction"
            tabIndex="0"
            role="button"
            aria-pressed="false"
          >
            {/* plus-circle svg */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.16"
              />
            </svg>
            <span>Switch</span>
          </div>

          <div
            className="action logout"
            id="logoutAction"
            tabIndex="0"
            role="button"
            aria-pressed="false"
          >
            {/* logout svg */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16 17L21 12L16 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 19H6C4.89543 19 4 18.1046 4 17V7C4 5.89543 4.89543 5 6 5H13"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            </svg>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Usercard };
