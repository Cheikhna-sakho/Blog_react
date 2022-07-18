const BilletModel = require(`${__basedir}/model/Billet`);
// BilletModel.find().then(result => console.log(result))
exports.findAll = (req, res) => {
    BilletModel.find()
        .then((billets) => res.status(200).json(billets))
        .catch(error => res.status(400).json({ error }));
}
exports.find = (req, res) => {
    BilletModel.findOne({ login: req.params.id })
        .then((billet) => res.status(200).json(billet))
        .catch(error => res.status(400).json({ error }));;
}
exports.create = (req, res) => {
    const data = {
        ...req.body
    }
    console.log(data);
    const billet = new BilletModel(data);
    billet.save()
        .then(() => res.status(201).json({ message: 'Billet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.update = (req, res) => {
    BilletModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}
exports.delete = (req, res, next) => {
    BilletModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
}