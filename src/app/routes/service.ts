import { Router } from 'express'
import { middlewareAdapter } from '../adapters/express-middlewares'
import { routerAdapter } from '../adapters/express-router'
import { addServiceController } from '../builds/controllers/add-service'
import { deleteServiceController } from '../builds/controllers/delete-service'
import { listServiceByUserController } from '../builds/controllers/list-service-by-user'
import { transferServiceController } from '../builds/controllers/transfer-service'
import { updateServiceController } from '../builds/controllers/update-service'
import { authMiddleware } from '../builds/middlewares/auth-user'

const router = Router()

router.post('/service', middlewareAdapter(authMiddleware), routerAdapter(addServiceController))
router.put('/service', middlewareAdapter(authMiddleware), routerAdapter(updateServiceController))
router.delete('/service', middlewareAdapter(authMiddleware), routerAdapter(deleteServiceController))
router.patch(
  '/service/transfer',
  middlewareAdapter(authMiddleware),
  routerAdapter(transferServiceController)
)
router.get(
  '/service',
  middlewareAdapter(authMiddleware),
  routerAdapter(listServiceByUserController)
)

export default router
