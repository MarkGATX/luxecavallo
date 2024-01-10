import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import contactHeader from '../../images/contactHeader.jpg'
import Image from 'mui-image';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button';
import { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { SizeContext } from "../../utils/sizeContext";
import { useContext } from 'react';
import { MenuContext } from '../../utils/menuContext';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);
  const form = useRef();

  const menuValue = useContext(MenuContext);
  const desktopView = useContext(SizeContext)
  const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
  let drawerHeight = ''
  if (menuDrawers.length === 1) {
    drawerHeight = menuDrawers[0].clientHeight;
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;


    if (inputType === 'outlined-required-email') {
      setEmail(inputValue);
    } else if (inputType === 'outlined-required-name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please use a valid email address');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    emailjs.sendForm('contact_service', 'portfolio_contact', form.current, '9YVbKkrKLvP796bXY')
      .then((result) => {

      }, (error) => {

      });

    // clear out the input after a successful submit.

    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
    setShow(true);
  };

  return (
    <Grid2 container component="main" sx={{
      transition: 'top .65s ease-out, left .65s ease-out',
      width: desktopView.isDesktop ? (menuValue.isMenuOpen ? `calc(100% - 400px)` : `calc(100% - 200px)`) : `100%`,
      left: desktopView.isDesktop ? (menuValue.isMenuOpen ? `400px` : `200px`) : 0,
      overflow: 'hidden',
      top: desktopView.isDesktop ? `0` : !menuValue.isMenuOpen ? `80px` : `calc(30px + ${drawerHeight}px)`,
      height: desktopView.isDesktop ? '' : '100%',
      maxHeight: desktopView.isDesktop ? "100vh" : '',
      overflowY: 'auto',
      alignContent: 'flex-start'
    }}>
      <Grid2 xs={7} sx={{ height: '200px', paddingLeft: '50px' }}>
        <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Contact
        </Typography>
        <Typography>Reach out with any questions or comments.</Typography>
      </Grid2>
      <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
        <Image height="200px" src={contactHeader} sx={{
          webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
          maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
        }}></Image>
      </Grid2>
      <Grid2 xs={12} sx={{ paddingLeft: '50px' }}>
        <Typography variant='h2' sx={{ marginBottom: '50px' }}>How to Contact Us</Typography>
        <Typography variant='body1'>If you're trying to reach Luxe Cavallo, don't, because it's a fictional company.</Typography>
        <br />
        <Typography variant='body1'>But you can reach the developer, Mark Gardner, who created this site as a project as a full MERN stack for his portfolio. You can find Mark at his <a href='https://github.com/MarkGATX'>GitHub</a> or on <a href="https://www.linkedin.com/in/mark-gardner-atx/">LinkedIn</a>.</Typography>
        <br />
        <Typography variant='body1' sx={{ marginBottom: '50px' }}>You can also email him at at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a> or with this form.</Typography>
      </Grid2>
      <Grid2 xs={10} sx={{ paddingLeft: '50px' }} >
        <Card component="form" ref={form} sx={{ padding: '50px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: 'tertiary.main', alignSelf: 'center' }} onSubmit={HandleFormSubmit}>
          <TextField
            required
            id="outlined-required-email"
            label="E-mail"
            value={email}
            onChange={handleInputChange}
            type='email'
            name='user_email'
            sx={{ width: '80%', margin: '20px', backgroundColor: 'background.default' }}
          />
          <TextField
            required
            id="outlined-required-name"
            label="Name"
            value={name}
            onChange={handleInputChange}
            type='text'
            name='user_name'
            sx={{ width: '80%', margin: '20px', backgroundColor: 'background.default' }}
          />
          <TextField
            required
            id="outlined-required-message"
            label="Message"
            value={message}
            onChange={handleInputChange}
            name="message"
            sx={{ width: '80%', margin: '20px', backgroundColor: 'background.default' }}
          />{errorMessage && (
            <Box xs={12}>
              <Typography variant='body2' sx={{ width: '100%', display: 'block' }} className="error-text">{errorMessage}</Typography>
            </Box>
          )}
          <Button variant='contained' type="submit" className="button" sx={{ width: '80%', marginBottom: '20px', '&:hover': { color: 'secondary.contrastText', fontWeight: 'bold' } }}>Submit</Button>
          {show && (
            <Box xs={12}>
              <Typography variant='h4' sx={{ width: '100%', display: 'block', textAlign: 'center' }} >Thanks for reaching out!<br /> We'll be in touch soon!</Typography>
            </Box>
          )}
        </Card>
      </Grid2>
    </Grid2>
  )
}