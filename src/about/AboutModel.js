import { types } from 'mobx-state-tree'

export default types.model('AboutModel', {
  siteName: types.maybeNull(types.string),
  description: types.maybeNull(types.string)
})
