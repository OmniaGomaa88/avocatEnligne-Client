import React from "react";

import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import "./style/footer.scss"
const Footer = (props) => {
 
  

  return (
    <footer className="footer">
       
    <Facebook className="footerIcon"></Facebook>
    <Instagram className="footerIcon"></Instagram>
    <Twitter className="footerIcon"></Twitter>
    </footer>
  );
};

export default Footer;