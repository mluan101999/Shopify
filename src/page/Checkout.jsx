import React from "react";
import Header from "../component/Header/Header";
import { Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import empty from "../assets/images/wishlitEmpty.png"
import { useSelector } from "react-redux";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const vouchers = [
  'Oliver Hansen',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Checkout = () => {
  const theme = useTheme();
  const [voucher, setVoucher] = React.useState([]);
  const cart = useSelector((state) => state.cartSlice.cartItem)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVoucher(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  let shipping = 2.00;
  let total = 0;
  const getTotal = cart.map((item) => {
    return (total +=
      (item.price - (item.discountPercentage / 100) * item.price).toFixed(2) *
      item.quantity);
  });

  return (
    <div>
      <Header />
      <div style={{ width: "100%", backgroundColor: "#eaeaea" }}>
        <div className="checkOut">
          <div className="checkOutInfo">

            <div className="infomation">
              <h3 style={{ margin: 0 }}>Personal Infomation</h3>
              <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
              <TextField label="Your Name" id="yourName" size="small" sx={{ width: "95%" }} />
              <div style={{ width: "95%", display: "flex", justifyContent: "space-between" }}>
                <TextField label="Email" id="email" size="small" sx={{ width: "45%" }} />
                <TextField label="Phone Number" id="phone" size="small" sx={{ width: "45%" }} />
              </div>
            </div>

            <div className="shippingAddress">
              <h3 style={{ margin: 0 }}>Shipping Address</h3>
              <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
              <div style={{ width: "95%", display: "flex", justifyContent: "space-between" }}>
                <TextField label="Address" id="address" size="small" sx={{ width: "65%" }} />
                <TextField label="Postal Card" id="postal" size="small" sx={{ width: "30%" }} />
              </div>
              <div style={{ width: "95%", display: "flex", justifyContent: "space-between" }}>
                <TextField label="City" id="city" size="small" sx={{ width: "45%" }} />
                <TextField label="Country" id="country" size="small" sx={{ width: "45%" }} />
              </div>
            </div>

            <div className="voucher">
              <h3 style={{ margin: 0 }}>Voucher</h3>
              <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Select vouchers</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={voucher}
                  onChange={handleChange}
                  input={<OutlinedInput label="Select vouchers" />}
                  MenuProps={MenuProps}
                >
                  {vouchers.map((voucher) => (
                    <MenuItem
                      key={voucher}
                      value={voucher}
                      style={getStyles(voucher, voucher, theme)}
                    >
                      {voucher}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="paymentMethod">
              <h3 style={{ margin: 0 }}>Payment Method</h3>
              <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Cash on delivery - COD" />
            </div>
          </div>

          <div className="checkOutOrder">
            <h3 style={{ margin: 0 }}>Item</h3>
            <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
            {/* div chứa giỏ hàng */}
            {cart.map(item =>
              <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }} key={item.id}>
                <div style={{width:"20%"}}>
                  <img src={item.thumbnail} width={"105px"} height={"83px"} style={{ borderRadius: "10px" }}></img>
                </div>
                <div style={{width:"50%"}}>
                  <div style={{ marginLeft: "20px", marginRight: "200px",width:"100%" }}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
                <div style={{width:"15%",marginLeft:"98px"}}>
                  <p>${parseFloat((item.price - (item.discountPercentage / 100) * item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            )}

            <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Discount</p>
              <p>$00.00</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Shipping</p>
              <p>${shipping}</p>
            </div>
            <Divider style={{ width: "90%", margin: "auto", marginTop: "0px", marginBottom: "0px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Total</h4>
              <h4>${(total + shipping).toFixed(2)}</h4>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <button class="btn"> 
                  PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
