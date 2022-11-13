import React, { useState } from "react";
import { gql, request } from "graphql-request";
import { Box, FormControl, TextField, Button } from "@mui/material";

const onSubmit = (email, firstName, lastName, phone) => {
  const createContact = async (email, firstName, lastName, phone) => {
    const result = await request({
      url: process.env.REACT_APP_HYGRAPH_URL,
      document: gql`
          mutation ContactMutation {
            createContact(data: {email: "${email}", firstName: "${firstName}", lastName: "${lastName}", phone: "${phone}"}) {
              id
              email
              phone
              firstName
              lastName
            }
          }
          `,
      requestHeaders: {
        Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
      },
    });

    console.log(result);
  };

  createContact(email, firstName, lastName, phone);
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <Box>
      <FormControl>
        <TextField
          label={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={"Phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label={"First Name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label={"Last Name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button onClick={() => onSubmit(email, firstName, lastName, phone)}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
