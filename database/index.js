const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');//fetcher is name of db

let repoSchema = mongoose.Schema({
  name: String
});

let Repo = mongoose.model('Repo', repoSchema);

var newRepo = new Repo; //new instance of repo

let save = (newRepo) => {
  console.log('here')
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  newRepo.save(function(err, newRepo) {
    if (err) return console.error(err);
    newRepo.name;
  })
  //saves repo name?
}

module.exports.save = save;

