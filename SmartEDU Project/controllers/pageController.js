const nodemailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  const outputMessage = `
  <h1>Mail details</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Smart EDU Contact Form 👻" <${process.env.MAIL_USERNAME}>`, // sender address
    to: req.body.email, // list of receivers
    subject: "Smart EDU Contact Form | New Message", // Subject line
    html: outputMessage, // html body
  });

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.status(200).redirect('/contact');
};
