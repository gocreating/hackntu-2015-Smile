// server modules
import http from 'http';
import https from 'https';
import fs from 'fs'; // To read ssl key and cert

// settings
import settings from '../settings';

export default (app) => {
  /**
   * http server
   */
  let port;

  // @ifdef DEV
  port = settings.server.port.development;
  // @endif

  // @ifdef TEST
  port = settings.server.port.test;
  // @endif

  // @ifdef PROD
  port = settings.server.port.production;
  // @endif

  http
    .createServer(app)
    .listen(port, () => {
      console.log('HTTP server listening on port', port);
    });

  /**
   * https server
   */
  // // load openssl generated privateKey
  // var privateKey = fs.readFileSync('secrets/ssl_key.pem', 'utf8');
  // // load openssl generated certificate
  // var certificate = fs.readFileSync('secrets/ssl_key_cert.pem', 'utf8');
  // // create credentials object to create ssl
  // var credentials = {
  //   key: privateKey,
  //   cert: certificate,
  // };
  // https
  //   .createServer(credentials, app)
  //   .listen(config.app.port.https, function() {
  //     console.log('HTTPS server listening on port ' + config.app.port.https);
  //   });
};