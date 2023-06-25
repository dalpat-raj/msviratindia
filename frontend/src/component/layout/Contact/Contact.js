import React from "react";
import "./Contact.scss";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:dalpatt1212@gmail.com">
        <Button>Contact:  Send Email Click Me</Button>
      </a>
    </div>
  );
};

export default Contact;
