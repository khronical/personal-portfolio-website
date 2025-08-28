globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D27g2GHa.mjs';
import { manifest } from './manifest_CcAjaGVx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about-me.astro.mjs');
const _page2 = () => import('./pages/contact-me.astro.mjs');
const _page3 = () => import('./pages/journal/_slug_.astro.mjs');
const _page4 = () => import('./pages/journal.astro.mjs');
const _page5 = () => import('./pages/my-work.astro.mjs');
const _page6 = () => import('./pages/site-map.astro.mjs');
const _page7 = () => import('./pages/test-collection.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about-me.astro", _page1],
    ["src/pages/contact-me.astro", _page2],
    ["src/pages/journal/[slug].astro", _page3],
    ["src/pages/journal/index.astro", _page4],
    ["src/pages/my-work/index.astro", _page5],
    ["src/pages/site-map.astro", _page6],
    ["src/pages/test-collection.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
