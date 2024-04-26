import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header1">
        {/* Logo and search */}
        <div>
          <h1>Shopify</h1>
          <div className="input">
            <input placeholder="Search for a product ..."></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginLeft: "5px", color: "white" }}
            />
          </div>
        </div>
        {/* Logo and search */}

        {/* Icon */}
        <div className="user">
          <h4>Product</h4>
          <FontAwesomeIcon
            icon={faUser}
            style={{ marginLeft: "20px", marginRight: "5px", color: "gray" }}
          />
          <h4>Login</h4>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ marginLeft: "20px", marginRight: "5px", color: "gray" }}
          />
        </div>
        {/* Icon */}
      </div>
    </div>
  );
};

export default Header;
