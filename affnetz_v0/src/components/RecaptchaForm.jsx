import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
 
} from "@mui/material";


const Form = () => {
  const [verified, setVerified] = useState(false);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const recaptchastyle = { marginTop:"10px" };
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  var expCallback = function() {
    setVerified(false);
 };
  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign up</h2>
        </Grid>
        <TextField
          label="Firstname"
          placeholder="Enter firstname"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Lastname"
          placeholder="Enter lastname"
          variant="outlined"
          fullWidth
          required
        />
       
        
        <ReCAPTCHA
          sitekey="6LfAo-ckAAAAACN2YNppEKemA_QPaMFTF9IDhDA-"
          onChange={onChange}
          data-theme="dark"
          align="right"
          style={recaptchastyle}
          onExpired={expCallback}
          onErrored={expCallback}
          //size="invisible"
          
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          disabled={!verified}
        >
          Sign up
        </Button>
        
      </Paper>
    </Grid>
  );
};

export default Form;
