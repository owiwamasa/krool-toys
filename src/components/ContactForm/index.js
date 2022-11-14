import React, { useState } from "react";
import { gql, request } from "graphql-request";
import { Box, FormControl, TextField, Button } from "@mui/material";

const onSubmit = (email, phone) => {
  const createContact = async (email, phone) => {
    const result = await request({
      url: process.env.REACT_APP_HYGRAPH_URL,
      document: gql`
          mutation ContactMutation {
            createContact(data: {email: "${email}", phone: "${phone}"}) {
              id
              email
              phone
            }
          }
          `,
      requestHeaders: {
        Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
      },
    });

    console.log(result);
  };

  createContact(email, phone);
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
        <Button onClick={() => onSubmit(email, phone)}>Submit</Button>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
