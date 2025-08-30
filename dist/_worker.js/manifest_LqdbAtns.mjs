globalThis.process ??= {}; globalThis.process.env ??= {};
import { t as decodeKey } from './chunks/astro/server_C3-LCnSG.mjs';
import './chunks/astro-designed-error-pages_CVtGrIkt.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B3i5grNb.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/","cacheDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/node_modules/.astro/","outDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/dist/","srcDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/src/","publicDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/public/","buildClientDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/dist/","buildServerDir":"file:///E:/1-%20AAA/GithubRepositoryClones/personal-portfolio-website/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about-me/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-me","isIndex":false,"type":"page","pattern":"^\\/about-me\\/?$","segments":[[{"content":"about-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-me.astro","pathname":"/about-me","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact-me/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact-me","isIndex":false,"type":"page","pattern":"^\\/contact-me\\/?$","segments":[[{"content":"contact-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-me.astro","pathname":"/contact-me","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"journal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/journal","isIndex":true,"type":"page","pattern":"^\\/journal\\/?$","segments":[[{"content":"journal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/journal/index.astro","pathname":"/journal","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"my-work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/my-work","isIndex":true,"type":"page","pattern":"^\\/my-work\\/?$","segments":[[{"content":"my-work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/my-work/index.astro","pathname":"/my-work","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"site-map/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/site-map","isIndex":false,"type":"page","pattern":"^\\/site-map\\/?$","segments":[[{"content":"site-map","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/site-map.astro","pathname":"/site-map","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"test-collection/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test-collection","isIndex":false,"type":"page","pattern":"^\\/test-collection\\/?$","segments":[[{"content":"test-collection","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test-collection.astro","pathname":"/test-collection","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/journal/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/journal/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal/index@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/404.astro",{"propagation":"none","containsHead":true}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/about-me.astro",{"propagation":"none","containsHead":true}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/contact-me.astro",{"propagation":"none","containsHead":true}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/my-work/index.astro",{"propagation":"none","containsHead":true}],["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/pages/site-map.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about-me@_@astro":"pages/about-me.astro.mjs","\u0000@astro-page:src/pages/contact-me@_@astro":"pages/contact-me.astro.mjs","\u0000@astro-page:src/pages/journal/[slug]@_@astro":"pages/journal/_slug_.astro.mjs","\u0000@astro-page:src/pages/journal/index@_@astro":"pages/journal.astro.mjs","\u0000@astro-page:src/pages/my-work/index@_@astro":"pages/my-work.astro.mjs","\u0000@astro-page:src/pages/site-map@_@astro":"pages/site-map.astro.mjs","\u0000@astro-page:src/pages/test-collection@_@astro":"pages/test-collection.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_LqdbAtns.mjs","E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","E:\\1- AAA\\GithubRepositoryClones\\personal-portfolio-website\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","E:\\1- AAA\\GithubRepositoryClones\\personal-portfolio-website\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Cf-XoPa8.mjs","E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DfQK2l54.mjs","E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.cFhBxBhv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/1- AAA/GithubRepositoryClones/personal-portfolio-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const o=new IntersectionObserver(s=>{s.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add(\"show\"):e.target.classList.remove(\"show\")})}),t=document.querySelectorAll(\".hidden\");t.forEach(s=>o.observe(s));"]],"assets":["/favicon.png","/robots.txt","/hm/Alignment.png","/hm/Constellation.svg","/hm/signal_6EQUJ5.mp3","/my-work/Epimetheus.png","/my-work/Portfolio.png","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/chunks/astro-designed-error-pages_CVtGrIkt.mjs","/_worker.js/chunks/astro_DPqLqUOS.mjs","/_worker.js/chunks/BaseLayout_DonJkUe-.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_BkXx8JdP.mjs","/_worker.js/chunks/NavBar_CGC8y7k6.mjs","/_worker.js/chunks/noop-middleware_B3i5grNb.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/path_DedgEEbu.mjs","/_worker.js/chunks/sharp_DfQK2l54.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_D27g2GHa.mjs","/_worker.js/chunks/_astro_assets_8D4WmvMs.mjs","/_worker.js/chunks/_astro_content_Dayj01Fa.mjs","/_worker.js/chunks/_astro_data-layer-content_Cf-XoPa8.mjs","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/about-me.astro.mjs","/_worker.js/pages/contact-me.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/journal.astro.mjs","/_worker.js/pages/my-work.astro.mjs","/_worker.js/pages/site-map.astro.mjs","/_worker.js/pages/test-collection.astro.mjs","/_worker.js/chunks/astro/server_C3-LCnSG.mjs","/_worker.js/pages/journal/_slug_.astro.mjs","/404.html","/about-me/index.html","/contact-me/index.html","/journal/index.html","/my-work/index.html","/site-map/index.html","/test-collection/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tplR8BQAaZXFd4dLtFvJfZKly7sDlaQML65vmh8Qf/I=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
