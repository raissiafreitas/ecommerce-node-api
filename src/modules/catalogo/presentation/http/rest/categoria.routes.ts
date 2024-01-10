import express from 'express';
import { atualizarCategoriaController, deletarCategoriaController, inserirCategoriaController, recuperarCategoriaPorIdController, recuperarTodasCategoriasController } from './controllers';
import { contentTypeMiddleware } from 'main/presentation/http/middlewares/content-type.middleware';
import { authUsuario } from 'main/presentation/http/middlewares/auth-usuario.middlewares';

const categoriaRouter = express.Router();

categoriaRouter.get(
    '/:id',
    (request, response, next) => recuperarCategoriaPorIdController.recuperar(request, response, next)
)

categoriaRouter.get(
    '/',
    (request, response, next) => recuperarTodasCategoriasController.recuperar(request, response, next)
)

categoriaRouter.post(
    '/',
    authUsuario(['ADMINISTRADOR']),
    contentTypeMiddleware,
    (request, response, next) => inserirCategoriaController.inserir(request, response, next)
)

categoriaRouter.put(
    '/:id',


    authUsuario(['ADMINISTRADOR']),
    contentTypeMiddleware,
    (request, response, next) => atualizarCategoriaController.atualizar(request, response, next)
)

categoriaRouter.delete(
    '/:id',
    authUsuario(['ADMINISTRADOR']),
    (request, response, next) => deletarCategoriaController.deletar(request, response, next)
)

export { categoriaRouter };