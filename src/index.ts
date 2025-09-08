// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler () {
  return { hello: 'world' }
})

fastify.get("/nutrition", async function handler () {
    const response = await fetch('https://www.fatsecret.co.id/kalori-gizi/search?q=tempe')
    const html = await response.text()
    return { html }
})

// async function main() {
//   const response = await fetch('https://www.fatsecret.co.id/kalori-gizi/search?q=tempe')
//   const data = await response.text()
//   console.log(data)
// }
// main().catch(console.error)

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}