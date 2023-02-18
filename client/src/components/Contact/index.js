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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
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
    emailjs.sendForm('default_service', 'portfolio_contact', form.current, '9YVbKkrKLvP796bXY')
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
    <Grid2 container component="main" sx={{ width: `calc(100% - 400px)` }}>
      <Grid2 xs={6} sx={{ height: '300px', paddingLeft: '50px' }}>
        <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Contact
        </Typography>
        <Typography>Reach out with any questions or comments.</Typography>
      </Grid2>
      <Grid2 xs={6} sx={{ marginBottom: '30px' }}>
        <Image height="300px" src={contactHeader} sx={{
          webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
          maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
        }}></Image>
      </Grid2>
      <Grid2 xs={12}>
        <Typography variant='h2'>How to Contact Us</Typography>
        <Typography variant='body1'>If you're trying to reach Luxe Cavallo, don't, because it's a fictional company.</Typography>
        <Typography variant='body1'>But you can reach the developer, Mark Gardner, who created this site as a project to use a full MERN stack for his portfolio.</Typography>
        <Typography variant='body1'>You can find Mark at his <a href='https://github.com/MarkGATX'>GitHub</a> or on LinkedIn</Typography>
        <Typography variant='body1'>Or you can email him at at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a> or with this form.</Typography>
      </Grid2>
      <Grid2 component="form" onSubmit={HandleFormSubmit}>
        <TextField
          required
          id="outlined-required, email"
          label="Required"
          defaultValue={email} 
          onChange={handleInputChange} 
          type='email'
          name='user_email'
        />
        <TextField
          required
          id="outlined-required, name"
          label="Required"
          defaultValue={name}
          type='text'
          name='user_name'
        />
        <TextField
          required
          id="outlined-required, message"
          label="Required"
          defaultValue={message} 
          name="message"
        />
        <Button variant='contained' className="button" >Submit</Button>
            {errorMessage && (
              <div>
                <Typography variant='body2' className="error-text">{errorMessage}</Typography>
              </div>
            )}

      </Grid2>


    </Grid2>
  )
}



// import React, { useState, useRef } from "react";
// import { validateEmail } from '../../utils/helpers';
// import ContactFormModal from '../contactFormModal'
// import emailjs from '@emailjs/browser'
// import "./ContactForm.css";


// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState('');
//   const [show, setShow] = useState(false);
//   const form = useRef();

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.id;
//     const inputValue = target.value;


//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }

//   };

//   const HandleFormSubmit = (e) => {

//     e.preventDefault();

//     // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email)) {
//       setErrorMessage('Please use a valid email address');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;

//     }
//     emailjs.sendForm('default_service', 'portfolio_contact', form.current, '9YVbKkrKLvP796bXY')
//       .then((result) => {

//       }, (error) => {

//       });

//     // clear out the input after a successful submit.

//     setName('');
//     setMessage('');
//     setEmail('');
//     setErrorMessage('');
//     setShow(true);
//   };

//   return (

//     <section className="col-md-8 col-lg-8 contactMeContainer">
//       <h2 className="col-12 mb-4">Contact Me</h2>
//       <div className="d-flex justify-content-center flex-wrap mb-3">
//         <p className="col-12 text-center">You can always reach me on GitHub or LinkedIn</p>
//         <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer" href="https://github.com/markgatx">
//           <i
//             title="GitHub" className="devicon-github-original "></i></a>
//         <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer"
//           href="https://www.linkedin.com/in/mark-gardner-ATX/"><i title="LinkedIn"
//             className="devicon-linkedin-plain "></i></a>
//       </div>
//       <div className="emailLink text-center">
//         <p>Send me an email at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a></p>
//       </div>
//       <div className="container-fluid row d-flex justify-content-center mt-2">
//         <div className="card contactCard col-8">
//           <form className="card-body" ref={form} onSubmit={HandleFormSubmit}>
//             <h5 className="card-title">Or contact me via handy form...</h5>
//             <label className="form-label">Your Email address</label>
//             <input type="email" className="form-control mb-3" name='user_email' id="email" value={email} onChange={handleInputChange} aria-describedby="emailHelp" />
//             <div className="mb-3">
//               <label className="form-label">Your Name</label>
//               <input type="text" value={name} className="form-control" name='user_name' id="name" onChange={handleInputChange} />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Your message here:</label>
//               <input type="textarea" value={message} name="message" className="form-control" onChange={handleInputChange} id="message" />
//             </div>
//             <button type="submit" className="button" >Submit</button>
//             {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//       <ContactFormModal show={show} setShow={setShow} />
//     </section>

//   )
// }