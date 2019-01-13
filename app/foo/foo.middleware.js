import Foo from "./foo.model";

export let getFoo = async ctx => {
  ctx.body = await Foo.find(
    ctx.state.query.filter, ctx.state.query.projection, ctx.state.query.options
  )
};

export let postFoo = async (ctx, next) => {
  ctx.body = await new Foo(ctx.request.body).save()
};

export let updateFoo = async (ctx, next) => {
  ctx.body = await Foo.findByIdAndUpdate(ctx.request.body, {new: true})
};

export let deleteFoo = async (ctx, next) => {
  ctx.body = await Foo.findByIdAndRemove(ctx.params.id)
};