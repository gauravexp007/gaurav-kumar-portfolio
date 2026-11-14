export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status === 404) {
      const url = new URL(request.url)
      if (!url.pathname.includes('.')) {
        return env.ASSETS.fetch(new Request(new URL('/', url), request))
      }
    }
    return response
  },
}
