// const db = require("../models/index");
// const Admin = db.admin;
// const Op = db.Sequelize.Op;

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("1027687896552-vrfljq3h0uven2133rdrkv3h0efbqqnd.apps.googleusercontent.com")


exports.login = async(req,res)=>{
    // console.log(req.body)
    // const username = req.body.username
    // const password = req.body.password

    // if(username && password)

    console.log(req.body)
    const { tokenId }  = req.body
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: "1027687896552-vrfljq3h0uven2133rdrkv3h0efbqqnd.apps.googleusercontent.com"
  });
  const { name, email, picture } = ticket.getPayload(); 
    console.log(name, email);
    // const user = await db.user.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })
    res.status(201)      }
