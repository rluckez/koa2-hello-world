import Router from 'koa-router'
import {verifyDatabaseConnection} from "./home.middleware";

const router = Router();

router
  .get('/', verifyDatabaseConnection);

export default router
