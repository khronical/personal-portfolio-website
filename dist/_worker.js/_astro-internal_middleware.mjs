globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_D7qtliBp.mjs';
import './chunks/astro/server_BW4j6zy6.mjs';
import { s as sequence } from './chunks/index_DRwqj1Rv.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
