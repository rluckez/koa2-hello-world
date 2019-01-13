import Router from 'koa-router'
import {getFoo, postFoo} from "./foo.middleware";

const router = new Router({
  prefix: '/foo'
});

router
  .get('/', getFoo)
  .post('/', postFoo);

export default router;