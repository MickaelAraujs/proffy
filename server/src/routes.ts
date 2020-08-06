import { Router } from 'express'

import ClassController from './controllers/ClassController'

const routes = Router()

const classController = new ClassController()

routes.get('/classes', classController.index)
routes.post('/classes', classController.create)

export default routes