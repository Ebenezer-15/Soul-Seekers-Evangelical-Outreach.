// for nav.
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  // for footer date
  const currentDate = new Date();

const year = document.getElementById("year");

 let eachYear = currentDate.getFullYear();

 year.innerHTML =  eachYear;

//for sending email.
// function sendEmail() {
//   // Get form data
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;

//   // Compose email body
//   var subject = "Contact Us Form Submission";
//   var body = "Name: " + name + "\n";
//   body += "Email: " + email + "\n";
//   body += "Message: " + message + "\n";

//   // Generate mailto URL
//   var mailtoLink = "mailto:ebenezerosaerhabor@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

//   // Open default email client with pre-populated data
//   window.location.href = mailtoLink;
// }

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  const data = {
    to: 'ebenezerosaerhabor@gmail.com',
    subject: 'Contact Us Form Submission',
    body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Email sent successfully!');
    })
    .catch((error) => {
      console.error(error);
    });
});


// Example server-side code using Express.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, body } = req.body;

  // Create a transporter using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ebenezerosaerhabor@gmail.com', // Replace with your own email address
      pass: 'OSATEMWENOSE', // Replace with your own email password
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'ebenezerosaerhabor@gmail.com', // Replace with your own email address
    to: to,
    subject: subject,
    text: body,
  };

  try {
    // Send the email using the transporter
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
