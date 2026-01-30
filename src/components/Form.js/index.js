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
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();

  //emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    const sent = (message) => {
      toast.success('Your message was sent!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const notSent = (message) => {
      toast.error('Not sent! - ' + message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    emailjs
      .sendForm(
        "service_6grktup",
        "template_snakpup",
        form.current,
          { publicKey: "dGSRbEuUE8Q6iFm8b" }
      )

      .then(
        (result) => {
          console.log(result.text);
          sent(result.text);
        },
        (error) => {
          console.log(error.text);
          notSent(error.text);
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
          <input type="text" name="user_name" placeholder="name" required />
          <label>What's on your mind?</label>
          <textarea name="message" placeholder="message" required />
          <label>How do I reach you?</label>
          <input type="email" name="user_email" placeholder="email" required />
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </FormContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Form;
