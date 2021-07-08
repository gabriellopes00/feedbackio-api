import components from './components'
import metadata from './metadata/metadata'
import servers from './metadata/servers'
import tags from './metadata/tags'

import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: metadata,
  servers: servers,
  tags: tags,
  paths: paths,
  schemas: schemas,
  components: components
}
