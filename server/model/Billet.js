const mongoose = require('mongoose');
const billetSchema = mongoose.Schema({
    "title": {
        type: String,
    },
    "content": {
        type: String,
    },
})
// membersSchema.plugin(uniqueValidator()); //a voir si j'utilise ou pas il evite d'avoir des erreur pour l'utilisation de unique true car askip ca peut arriver donc pour sur cette facoun c'est mieux
const BilletModel = mongoose.model("billets", billetSchema);
module.exports = BilletModel;