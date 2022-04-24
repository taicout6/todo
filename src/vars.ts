import dotenv from 'dotenv'

dotenv.config()

const { env } = process

export default {
  api: {
    port: Number(env.API_PORT || env.PORT || 3001)
  },
  db: {
    url: env.DB_URL || 'mysql://root:root@localhost:3306/db'
  }
}
