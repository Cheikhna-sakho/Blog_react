const MemberModel = require(`${__basedir}/model/Member`)

const { sha1, verifyHash } = require("sha1-hash-and-verify");
exports.register = (req, res) => {
    const username = req.body.login;
    const email = req.body.email;
    const password = sha1(req.body.password);
    const data = {
        "login": username,
        "email": email,
        "password": password,
    }
    const user = new MemberModel(data);
    user.save()
        .then(() => {
            return res.status(201).send({ message: 'Membre enregistré !' })
        })
        .catch(error => {
            return res.status(400).send({ message: `${error} echec regarde ce qui ce passe` })
        });
    const findUser = MemberModel.findOne({ login: req.body.login }).then((user) => console.log(user));
};

exports.login = (req, res) => {                     
    MemberModel.findOne({ login: req.body.login })
        .then(user => {
            if (!user) res.status(400).json({ error: "Aucun utilisateur trouvé" });
            if (!verifyHash(req.body.password, user.password)) {
                res.status(400).json({ error: "Mot de passe incorrect" });
            } else{ res.status(200).json({user})}

        })
        .catch(error => res.status(500).json({ error }));
};