import mongoose from 'mongoose';

export let verifyDatabaseConnection = (ctx) => {
  if (mongoose.connection.readyState === 1) {
    ctx.body = 'Welcome to the Test API v1.0.0';
  } else {
    ctx.throw(503, 'No database connection');
  }
};
