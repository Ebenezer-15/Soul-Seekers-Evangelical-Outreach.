// for nav.
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  // for footer date
 const d = new Date("July 21, 1983 01:15:00");
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;

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
