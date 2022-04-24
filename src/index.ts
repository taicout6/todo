import api from './api'
import vars from './vars'

api.listen(vars.api.port, () => {
  console.log(`Running on port ${vars.api.port}`)
})
