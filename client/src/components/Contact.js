// src/components/Contact.js
import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

// Styled components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color:#8006e3;
  height:90vh;
  color:white;
`;

const ContactHeader = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormLabel = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  height: 40px;
  padding: 8px;
  font-size: 17px;
  margin-bottom: 10px;
  border-radius:5px;
  border-width:0px;
`;

const FormTextarea = styled.textarea`
  height: 100px;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius:5px;
  border-width:0px;
`;

const FormSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #14A44D;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <>   <Navbar />
      <ContactContainer>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactForm>
          <FormLabel>Name :</FormLabel>
          <FormInput type="text" placeholder="Enter your name" required />

          <FormLabel>Email :</FormLabel>
          <FormInput type="email" placeholder="Enter your email" required />

          <FormLabel>Message :</FormLabel>
          <FormTextarea placeholder="Enter your message" required />

          <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
