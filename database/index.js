import mongoose from 'mongoose'
import nconf from '../app/config/mynconf'

const databaseURL = nconf.get('MONGODB_URL');

export default () => new Promise((resolve, reject) => {
  mongoose.connection
    .on('error', error => reject(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => resolve(mongoose.connections[0]));

  mongoose.connect(databaseURL, {
    autoReconnect: true
  })
});
