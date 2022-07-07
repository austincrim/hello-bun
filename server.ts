Bun.serve({
  fetch(req) {
    return new Response('<html><body><h1>Hello bun!</h1></body></html>', {
      headers: { 'content-type': 'text/html' }
    })
  }
})
