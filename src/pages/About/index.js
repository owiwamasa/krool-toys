import { Box, Button, Link, Typography, Modal, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../assets/KT_ContactForm.svg";
import ContactFormSmall from "../../assets/KT_ContactForm_small.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { gql, request } from "graphql-request";
import AOS from "aos";
import "aos/dist/aos.css";
import { theme } from "../../MuiStyling";
import "./about.css";

const AboutPage = ({ aboutUs }) => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = (email, phone) => {
    if (!email && !phone) return;
    const createContact = async (email, phone) => {
      await request({
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
    };

    createContact(email, phone);
  };

  return (
    <Box
      sx={{
        padding: "2vw 4vw 4vw 6vw",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          padding: "4vw 1vw 3vw 6vw",
        },
      }}
    >
      <Button
        disableRipple
        onClick={() => goToHome()}
        sx={{
          alignSelf: "flex-end",
          color: "black",
          fontSize: "5.5vw",
          height: "4vw",
          fontFamily: "PixelTimesNewRoman",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        X
      </Button>
      <Typography
        sx={{
          fontFamily: "PixelTimesNewRoman",
          fontSize: "5vw",
          lineHeight: "5.5vw",
          width: "85%",
          marginBottom: "5%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "32px",
            lineHeight: "32px",
          },
        }}
      >
        {aboutUs?.description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <img class="about-us-image" src={aboutUs?.media.url} alt="about us" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
            [theme.breakpoints.down("sm")]: {
              marginTop: "10%",
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-around",
            },
          }}
        >
          <Button
            data-aos="flip-right"
            disableRipple
            onClick={() => setOpen(true)}
            sx={{
              alignSelf: "flex-start",
              marginLeft: "10%",
              fontFamily: "PixelTimesNewRoman",
              fontSize: "3vw",
              lineHeight: "3vw",
              color: "black",
              width: "60%",
              textAlign: "left",
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: "red",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                lineHeight: "14px",
                width: "50%",
              },
            }}
          >
            Notify Me of Future Krool Toys Releases
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "10%",
            }}
          >
            <Link
              sx={{
                fontFamily: "PixelTimesNewRoman",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              sx={{
                fontFamily: "PixelTimesNewRoman",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setEmail("");
            setPhone("");
          }}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${ContactForm})`,
              height: "680px",
              width: "530px",
              [theme.breakpoints.down("sm")]: {
                backgroundImage: `url(${ContactFormSmall})`,
                height: "480px",
                width: "380px",
              },
            }}
          >
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                position: "relative",
                top: "425px",
                left: "20px",
                width: "490px",
                [theme.breakpoints.down("sm")]: {
                  top: "296px",
                  left: "15px",
                  width: "350px",
                  "& input": {
                    padding: "10px",
                  },
                },
              }}
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                position: "relative",
                top: "490px",
                left: "20px",
                width: "490px",
                [theme.breakpoints.down("sm")]: {
                  top: "336px",
                  left: "15px",
                  width: "350px",
                  "& input": {
                    padding: "10px",
                  },
                },
              }}
            />
            <Button
              disableRipple
              onClick={() => {
                setOpen(false);
                onSubmit(email, phone);
              }}
              sx={{
                position: "relative",
                top: "506px",
                left: "20px",
                width: "490px",
                textAlign: "left",
                color: "black",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                [theme.breakpoints.down("sm")]: {
                  top: "347px",
                  left: "2px",
                  width: "380px",
                  fontSize: "12px",
                },
              }}
            >
              Notify Me of Future Krool Toys Releases
              <ArrowRightAltIcon
                sx={{
                  marginLeft: "20px",
                  fontSize: "40px",
                  lineHeight: "40px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "30px",
                  },
                }}
              />
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default AboutPage;
