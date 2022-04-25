import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { todoModel } from '../../../src/app/models'
import { TodoDAO } from '../../../src/db'

use(chaiAsPromised)

describe('app/models/todo.model', () => {
  beforeEach(sinon.restore)

  describe('list', () => {
    it('Should throw if TodoDAO.findAll throws', () => {
      sinon.stub(TodoDAO, 'findAll').rejects()
      expect(todoModel.list()).to.eventually.to.rejected
    })

    it('Should return list of objects', () => {
      sinon.stub(TodoDAO, 'findAll').resolves([])
      expect(todoModel.list()).to.eventually.deep.equal([])
    })
  })
})
