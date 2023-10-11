//Todos os atributos/propriedades que um produto deve ter no sistema//
//Auxilia na criação de invariantes e modelos ricos

import { IDatasControle, KeysDatasControle } from "@shared/domain/datas.types";
import { Categoria } from "../categoria/categoria.entity";

interface IProduto extends IDatasControle {
    id?: string;
    nome: string;
    descricao: string;
    valor: number
    categorias: Array<Categoria>
}

//Atributos que são necessarios para criar um produto
//Tipo representa um dos estados do ciclo de vida da entidade
//Garantir a integridade dos estados de um objeto
type CriarProdutoProps = Omit<IProduto, "id" | KeysDatasControle>;



//Atributos que são necessarios para recuperar uma categoria
//Tipo representa um dos estados do ciclo de vida da entidade
type RecuperarProdutoProps = IProduto & {
    id: NonNullable<IProduto['id']>
};
   

export {
    IProduto,
    CriarProdutoProps,
    RecuperarProdutoProps
}