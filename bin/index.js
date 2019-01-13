import app from '../app';
import nconf from '../app/config/mynconf';
import connectDatabase from '../database/index';

const port = nconf.get('PORT') || 3000;

(async () => {
  try {
    const info = await connectDatabase();
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to database');
  }
  await app.listen(port);
  console.log(`Server started on port ${port}`);
})();


