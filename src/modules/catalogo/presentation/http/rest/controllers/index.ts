import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controllers";
import { RecuperarTodasCategoriaExpressController } from "./recuperar-todas-categorias.express.controllers"; 
import { InserirCategoriaExpressController } from "./inserir-categoria.express.controllers"; 
import { AtualizarCategoriaExpressController } from "./atualizar-categoria.express.controller";
import { DeletarCategoriaExpressController } from "./deletar-categoria.express.controller";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);
const recuperarTodasCategoriasController = new RecuperarTodasCategoriaExpressController(recuperarTodasCategoriasUseCase);
const inserirCategoriaController = new InserirCategoriaExpressController(inserirCategoriaUseCase);
const atualizarCategoriaController = new AtualizarCategoriaExpressController(atualizarCategoriaUseCase);
const deletarCategoriaController = new DeletarCategoriaExpressController(deletarCategoriaUseCase);

export {
    recuperarCategoriaPorIdController,
    recuperarTodasCategoriasController,
    inserirCategoriaController,
    atualizarCategoriaController,
    deletarCategoriaController
}