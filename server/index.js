const cors = require('cors');
const bodyParser = require('body-parser');
global.__basedir = __dirname;
require(__dirname + '/config/dbConfig.js');

//root
const MemberRoot = require(__dirname + '/routes/Member');
const AuthRoot = require(__dirname + '/routes/Auth');
const BilletRoot = require(__dirname + '/routes/Billet');

//Midlleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

//ROOT
app.use("/members", MemberRoot);
app.use("/auth",AuthRoot);
app.use("/billet", BilletRoot);

//Server
// app.listen(port, console.log("vous etes bien connecter au port " + port))
