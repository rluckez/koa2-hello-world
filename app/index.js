//Dependencies
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import passport from 'koa-passport'
import homeRoutes from './home/home.routes'
import fooRoutes from './foo/foo.routes'
import middleware from './middleware'

const app = new Koa();
app.proxy = true;
app.use(passport.initialize());
app.use(passport.session());
app.use(middleware());
app.use(serve(__dirname + '/public'));

const api = new Router({
  prefix: '/api/v1'
});
api.use('', homeRoutes.routes(), homeRoutes.allowedMethods());
api.use('', fooRoutes.routes(), fooRoutes.allowedMethods());

app.use(api.routes(), api.allowedMethods());

export default app