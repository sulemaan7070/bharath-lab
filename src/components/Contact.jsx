import React from "react";
import WhatsappImg from "../images/whatsapp (2).png";

function Contact() {
  return (
    <div>
      <a
        className="z-50 fixed opacity-80 right-2.5 bottom-7"
        href="https://wa.me/8519903096"
        target="_blank"
      >
        <img className="h-14" src={WhatsappImg} alt="" />
      </a>
    </div>
  );
}

export default Contact;
