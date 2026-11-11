// gordianstack.com: the apex serves the static page in public/, and
// www.gordianstack.com redirects permanently to the same path on the apex.

const APEX = "gordianstack.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === `www.${APEX}`) {
      url.hostname = APEX;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
