import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { todoService } from '../../../src/app/services/todo.service'
import { todoController } from '../../../src/app/controllers/todo.controller'

use(chaiAsPromised)

describe('app/services/todo.service', () => {
  beforeEach(sinon.restore)

  describe('list', () => {
    it('Should throw if todoService.list throws', () => {
      sinon.stub(todoService, 'list').rejects()
      expect(todoController.list()).to.eventually.be.rejected
    })

    it('Should return list of objects', () => {
      sinon.stub(todoService, 'list').resolves([])
      expect(todoController.list()).to.eventually.deep.equal([])
    })
  })
})