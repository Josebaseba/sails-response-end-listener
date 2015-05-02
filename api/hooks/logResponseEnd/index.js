module.exports = function(sails) {

  return {

    routes: {

      before: {
        'all /*': function addMixins (req, res, next) {

          res.on('finish', function(){
            sails.log.warn('res ended with ALL routes');
            sails.log.info('Request::', req.ip, req.path);
          });

          next();

        },

        'all /test': function addMixins (req, res, next) {

          res.on('finish', function(){
            sails.log.warn('res ended with shadow route in /test');
            sails.log.info('Request::', req.ip);
          });

          next();

        }

      }

    }

  }

};
