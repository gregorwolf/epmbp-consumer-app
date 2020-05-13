// load modules
const express = require('express')
const cds = require('@sap/cds')
// For authentication test
const passport = require('passport')
const xsenv = require('@sap/xsenv')
xsenv.loadEnv();
const JWTStrategy = require('@sap/xssec').JWTStrategy
const services = xsenv.getServices({ xsuaa: { tags: 'xsuaa' }})
passport.use(new JWTStrategy(services.xsuaa))

// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004

;(async () => {
  // create new app
  const app = express()
  // Authentication using JWT
  await app.use(passport.initialize())
  await app.use(
    passport.authenticate('JWT', { session: false })
  )

  await app.use("/", express.static("resources/"))

  await app.get('/api/userInfo', function (req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.user))
  })
  await app.get('/api/jwt', function (req, res) {
    const jwt = /^Bearer (.*)$/.exec(req.headers.authorization)[1]
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({ "JWT": jwt }))
  })  
  // serve odata v4
  await cds.connect('db') // ensure database is connected!

  await cds
    .serve('CatalogService')
    .from('gen/csn.json')
    .with('service.js')
    .in(app);

  await cds
    .serve('EPM_REF_APPS_PROD_MAN_SRV')
    .from('gen/csn.json')
    .in(app);

  // start server
  const server = app.listen(port, host, () => {
    console.info(`app is listing at ${port}`)
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  })
  server.on('error', error => console.error(error.stack))
})()
