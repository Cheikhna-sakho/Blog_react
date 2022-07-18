const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const membersSchema = mongoose.Schema({
    "login": {
        type: String,
        unique: true,
        maxLength: 20,
        minLength: 5
    },
    "email": {
        type: String,
        // match: "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$",
        unique: true
    },
    "password": {
        type: String
    },
    "type": {
        type: Boolean,
        default: false
    }
})
// membersSchema.plugin(uniqueValidator()); //a voir si j'utilise ou pas il evite d'avoir des erreur pour l'utilisation de unique true car askip ca peut arriver donc pour sur cette facoun c'est mieux
const MemberModel = mongoose.model("members", membersSchema);
module.exports = MemberModel;