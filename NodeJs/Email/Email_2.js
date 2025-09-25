import nodemailer from 'nodemailer';
 
let emailSender = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "vishalmeshram298@gmail.com",
        pass: "fcctjrqrazzdhyyf"
    }
});

const htmlContent = `
<h1>Welcome</h1>
<p>This is an <b>HTML</b> email sent using <i>Nodemailer</i> </p>
<p>Styled text with inline css</p>
`

let userData = {
    from: "vishalmeshram298@gmail.com",
    to: "vishalmeshram2111@gmail.com",
    subject: "Testing Message",
    text: "Welcome To NodeMailer Modlue",
    html: htmlContent,
}
 
emailSender.sendMail(userData, (err, info)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Email Sent : ", info.response);
    }
})