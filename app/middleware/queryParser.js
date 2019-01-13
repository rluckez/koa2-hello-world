import aqp from 'api-query-params';
import {parse} from 'qs'
import * as _ from 'lodash'

export default () => {
  return async (ctx, next) => {
    ctx.state = {};
    ctx.state.query = {};
    ctx.state.query.filter = {};
    ctx.state.query.projection = null;
    ctx.state.query.options = {};
    if (ctx.originalUrl && ctx.originalUrl.indexOf('?') > 0) {
      let query = ctx.originalUrl.split('?')[1] || '';
      query = aqp(query);
      if (query) {
        ctx.state.query.filter = query.filter || {};
        ctx.state.query.projection = query.projection || null;
        ctx.state.query.options = _.pick(query, ['sort', 'skip', 'limit'])
      }

    }
    await next()
  }
}