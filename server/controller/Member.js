exports.findAll = (req, res) => {
    MemberModel.find()
        .then(() => res.status(200).json(members))
        .catch(error => res.status(400).json({ error }));;
}
exports.find = (req, res) => {
    MemberModel.findOne({ login: req.params.id })
        .then(() => res.status(200).json(member))
        .catch(error => res.status(400).json({ error }));;
    res.render('register');
}