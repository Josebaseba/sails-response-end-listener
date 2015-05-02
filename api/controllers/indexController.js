module.exports = {

  test: function(req, res){
    return res.ok('COOL!');
  },

  error: function(req, res){
    return res.serverError();
  }

}
