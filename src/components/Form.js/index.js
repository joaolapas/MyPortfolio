
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoH2,
  LogoP,
  NavBtn,
  NavBtnLink,
  FormContainer,
} from "./FormElements";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6grktup",
        "template_snakpup",
        form.current,
        "dGSRbEuUE8Q6iFm8b"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };
  return (
    <div>
      <div>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <LogoH2>
                <span style={{ color: "#01bf71" }}>MY</span>PORTFOLIO
              </LogoH2>
              <LogoP>JOÃO LAPAS</LogoP>
            </NavLogo>

            <NavBtn>
              <NavBtnLink to="/">Back</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </div>
      <FormContainer>
        <h1>Let me hear from you</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Who are you?</label>
          <input type="text" name="user_name" />
          <label>What's on your mind?</label>
          <textarea name="message" />
          <label>How do I reach you?</label>
          <input type="email" name="user_email" />
          <button type="submit" value="Send">Send</button>
        </form>
      </FormContainer>
    </div>
  );
};

export default Form;
