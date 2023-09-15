import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const RulesPage = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="btn">
          RULES
        </button>
      }
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rule-pic"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default RulesPage
