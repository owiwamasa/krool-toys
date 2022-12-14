import { Box, Button, Link, Typography, Modal, TextField } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../assets/KT_ContactForm.svg";
import ContactFormSmall from "../../assets/KT_ContactForm_small.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { gql, request } from "graphql-request";
import AOS from "aos";
import "aos/dist/aos.css";
import { theme } from "../../MuiStyling";
import "./about.css";
import MickeyCursor from "../../assets/NormalSelect.cur";
import Image from "mui-image";
import { KroolContext } from "../../context";

const AboutPage = () => {
  const { aboutUs } = useContext(KroolContext);
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
        display: "flex",
        flexDirection: "column",
        padding: "2vw 4vw 4vw 6vw",
        [theme.breakpoints.down("sm")]: {
          padding: "4vw 3vw 3vw 3vw",
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
          fontFamily: "Inter",
          fontSize: "3.5vw",
          lineHeight: "4vw",
          width: "85%",
          marginBottom: "2%",
          marginTop: "-2%",
          [theme.breakpoints.down("sm")]: {
            marginTop: "5%",
            paddingLeft: "3%",
            fontSize: "32px",
            lineHeight: "32px",
          },
          [theme.breakpoints.up("lg")]: {
            width: "70%",
            paddingLeft: "3%",
            fontSize: "40px",
            lineHeight: "45px",
          },
        }}
      >
        {aboutUs?.description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
          [theme.breakpoints.up(1380)]: {
            justifyContent: "center",
          },
        }}
      >
        <Box
          data-aos="fade-in"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            [theme.breakpoints.down("md")]: {
              width: "70%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              marginTop: "5%",
            },
          }}
        >
          <Image
            showLoading={true}
            duration={500}
            class="about-us-image"
            src={aboutUs?.media.url}
            alt="about us"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
            marginLeft: "5%",
            [theme.breakpoints.up(1380)]: {
              marginLeft: "60px",
            },
            [theme.breakpoints.down("md")]: {
              marginTop: "5%",
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-around",
            },
            [theme.breakpoints.down("sm")]: {
              marginTop: "10%",
            },
          }}
        >
          <Button
            data-aos="flip-right"
            disableRipple
            onClick={() => setOpen(true)}
            sx={{
              alignSelf: "flex-start",
              fontFamily: "Inter",
              fontSize: "3vw",
              lineHeight: "3vw",
              color: "black",
              width: "80%",
              textAlign: "left",
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: "red",
                fontFamily: "PixelTimesNewRoman",
                fontSize: "3.5vw",
                lineHeight: "3.5vw",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "44px",
                  lineHeight: "36px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "18px",
                  lineHeight: "20px",
                  width: "50%",
                  fontFamily: "Inter",
                },
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
                lineHeight: "20px",
                width: "50%",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "36px",
                lineHeight: "36px",
              },
            }}
          >
            Get notified about upcoming releases
          </Button>
          <Link
            data-aos="flip-left"
            href="https://krooltoys.com/"
            target="_blank"
            sx={{
              fontFamily: "Inter",
              fontSize: "3.5vw",
              lineHeight: "3.5vw",
              color: "black",
              textDecoration: "none",
              whiteSpace: "nowrap",
              marginBottom: "3%",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
              "&:hover": {
                cursor: `url(${MickeyCursor}), auto`,
                color: "purple",
                fontFamily: "PixelTimesNewRoman",
                fontSize: "4.5vw",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "42px",
                lineHeight: "42px",
              },
            }}
          >
            Webstore
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link
              data-aos="flip-left"
              href="https://krooltoys.com/"
              target="_blank"
              sx={{
                fontFamily: "Inter",
                fontSize: "3.5vw",
                lineHeight: "3.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                marginBottom: "3%",
                [theme.breakpoints.up("md")]: {
                  display: "none",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "20px",
                  lineHeight: "20px",
                  marginBottom: "8%",
                  letterSpacing: "1px",
                },
                "&:hover": {
                  cursor: `url(${MickeyCursor}), auto`,
                  color: "purple",
                  fontFamily: "PixelTimesNewRoman",
                  fontSize: "4.5vw",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "20px",
                    lineHeight: "20px",
                    marginBottom: "8%",
                    letterSpacing: "1px",
                    fontFamily: "Inter",
                  },
                },
              }}
            >
              Webstore
            </Link>
            <Link
              href="mailto:sup@krooltoys.com"
              sx={{
                fontFamily: "Inter",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                whiteSpace: "nowrap",
                marginBottom: "3%",
                textDecoration: "none",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
                "&:hover": {
                  cursor: `url(${MickeyCursor}), auto`,
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "30px",
                  lineHeight: "30px",
                },
              }}
            >
              sup@krooltoys.com for Business
            </Link>
            <Link
              href="mailto:press@krooltoys.com"
              sx={{
                fontFamily: "Inter",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                marginBottom: "10%",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
                "&:hover": {
                  cursor: `url(${MickeyCursor}), auto`,
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "30px",
                  lineHeight: "30px",
                },
              }}
            >
              press@krooltoys.com for Press
            </Link>
            <Link
              href="https://www.dropbox.com/s/xr17es1m3hfv4g2/krool-toys-terms-of-service.pdf?dl=0"
              target="_blank"
              sx={{
                fontFamily: "Inter",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                marginBottom: "3%",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
                "&:hover": {
                  cursor: `url(${MickeyCursor}), auto`,
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "30px",
                  lineHeight: "30px",
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.dropbox.com/s/paf0f4pfm3edcdn/krool-toys-privacy-policy.pdf?dl=0"
              target="_blank"
              sx={{
                fontFamily: "Inter",
                fontSize: "2.5vw",
                lineHeight: "2.5vw",
                color: "black",
                textDecoration: "none",
                whiteSpace: "nowrap",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  lineHeight: "14px",
                },
                "&:hover": {
                  cursor: `url(${MickeyCursor}), auto`,
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "30px",
                  lineHeight: "30px",
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
