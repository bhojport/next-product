require('dotenv').config()

module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
}
