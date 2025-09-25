import nodemailer from 'nodemailer';
 
let emailSender = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "vishalmeshram298@gmail.com",
        pass: "fcctjrqrazzdhyyf"
    }
});
 
let userData = {
    from: "vishalmeshram298@gmail.com",
    to: "vishalmeshram2111@gmail.com",
    subject: "Testing Message",
    text: "Welcome To NodeMailer Modlue"
}
 
emailSender.sendMail(userData, (err, info)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Email Sent : ", info.response);
    }
})