import { userschema } from "../model/userschema.js"

async function sign(req, res) {
    console.log(req.body, 'kkkkkkkkkkkkkkkkkk')
    let Email = req.body.Email;
    let Password = req.body.Password;
    let Bithdate = req.body.Birthdate

    let createuser = await userschema.insertOne(
        {
            email: Email,
            password: Password,
            birthdate: Bithdate
        })

}
export { sign }

async function login(req, res) {
    console.log(req.body, "bodeeeeeeeeeeeeeeeeee")
    let email = req.body.Email;
    let password = req.body.Password;
    let checkdata = await userschema.findOne({ email: email }, { password: password })
    console.log(checkdata, "chekeeeeeeeeeee")
    if (checkdata == null) {
        res.json({ status: false })
    } else {
        res.json({ status: true })
    }
}
export { login }