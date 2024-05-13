import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../redux/feature/authentSlice";
import { NavLink } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImProfile } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";

export default function LoginPopup() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.authentSlice.username);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        // id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "black", padding: "0px" }}
      >
        <p style={{ textTransform: "lowercase", padding: "0" }}>{userName}</p>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <ImProfile style={{ marginRight: "7px" }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FontAwesomeIcon icon={faHeart} style={{ marginRight: "7px" }} />
          <NavLink
            to="/wishlist"
            style={{ color: "black", textDecoration: "none" }}
          >
            Wishlist
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => dispatch(isLogout())}>
          <IoIosLogOut style={{ marginRight: "7px" }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
