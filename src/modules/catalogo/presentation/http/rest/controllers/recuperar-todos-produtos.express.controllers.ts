import { NextFunction, Request, Response } from "express";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { RecuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case/recuperar-todos-produtos.use.case";
import { IProduto } from "@modules/catalogo/domain/produto/produto.types";



class RecuperarTodosProdutosExpressController extends ExpressController {

    private _recuperarTodosProdutosUseCase: RecuperarTodosProdutosUseCase;
 
    constructor( recuperarTodosProdutosUseCase : RecuperarTodosProdutosUseCase
        ) {
        super();
        this._recuperarTodosProdutosUseCase = recuperarTodosProdutosUseCase;
    }
 
    async recuperar(request: Request, response: Response, next: NextFunction) {
      try {
        const listaProdutosDTO: Array<IProduto> = await this._recuperarTodosProdutosUseCase.execute();
        this.sendSuccessResponse(response,listaProdutosDTO);
      } catch (error) {
        next(error);
      }
    }
 
  }

export { RecuperarTodosProdutosExpressController }