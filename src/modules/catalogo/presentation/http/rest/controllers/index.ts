import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase, recuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controllers";
import { RecuperarTodasCategoriaExpressController } from "./recuperar-todas-categorias.express.controllers"; 
import { InserirCategoriaExpressController } from "./inserir-categoria.express.controllers"; 
import { AtualizarCategoriaExpressController } from "./atualizar-categoria.express.controller";
import { DeletarCategoriaExpressController } from "./deletar-categoria.express.controller";
import { RecuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case/recuperar-todos-produtos/recuperar-todos-produtos.use.case";
import { RecuperarTodosProdutosExpressController } from "./recuperar-todos-produtos.express.controllers";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);
const recuperarTodasCategoriasController = new RecuperarTodasCategoriaExpressController(recuperarTodasCategoriasUseCase);
const inserirCategoriaController = new InserirCategoriaExpressController(inserirCategoriaUseCase);
const atualizarCategoriaController = new AtualizarCategoriaExpressController(atualizarCategoriaUseCase);
const deletarCategoriaController = new DeletarCategoriaExpressController(deletarCategoriaUseCase);
const recuperarTodosProdutosController = new RecuperarTodosProdutosExpressController(recuperarTodosProdutosUseCase);
export {
    recuperarCategoriaPorIdController,
    recuperarTodasCategoriasController,
    inserirCategoriaController,
    atualizarCategoriaController,
    deletarCategoriaController,
    recuperarTodosProdutosController
}