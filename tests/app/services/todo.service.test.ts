import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { todoModel } from '../../../src/app/models'
import { todoService } from '../../../src/app/services/todo.service'

use(chaiAsPromised)

describe('app/services/todo.service', () => {
  beforeEach(sinon.restore)

  describe('list', () => {
    it('Should throw if todoModel.list throws', () => {
      sinon.stub(todoModel, 'list').rejects()
      expect(todoService.list()).to.eventually.be.rejected
    })

    it('Should return list of objects', () => {
      sinon.stub(todoModel, 'list').resolves([])
      expect(todoService.list()).to.eventually.deep.equal([])
    })
  })
})