# gordianstack-site

The root page of gordianstack.com, served as a Cloudflare Worker with
static assets on a custom domain at the apex and `www`, in the
Blockchain Commons support account. The Gordian Stack demos it points
at (the passkey demo and the Open Integrity forge) live in their own
repositories under this zone.

The page is static HTML and CSS in `public/`, served by the Worker
in `src/index.js`, which also redirects `www.gordianstack.com`
permanently to the apex. Its badges, screenshots and header image
come from the Blockchain Commons developer site,
developer.blockchaincommons.com.

Run it locally with `wrangler dev` and open http://127.0.0.1:8787/.
Locally, wrangler presents every request as one for the apex, so the
`www` redirect is not exercised there.

Status: first version, not yet deployed.
