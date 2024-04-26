import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import { Alert } from '@mui/material';

function App() {

  return (
    <>
      <div className="header">
        <div className="header1">

          {/* Logo and seach */}
          <div>
            <h1>Shopify</h1>
            <div className='input'>
              <input placeholder='Search for a product ...'></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: "5px", color: 'white' }} />
            </div>
          </div>
          {/* Logo and seach */}

          {/* Icon */}
          <div className='user'>
              <h4>Product</h4>
              <FontAwesomeIcon icon={faUser} style={{ marginLeft: "20px", marginRight:"5px", color: 'gray' }}  />
              <h4>Login</h4>
              <FontAwesomeIcon icon={faCartShopping} style={{ marginLeft: "20px", marginRight:"5px", color: 'gray' }} />
          </div>
          {/* Icon */}
        </div>
      </div>
    </>
  )
}

export default App
