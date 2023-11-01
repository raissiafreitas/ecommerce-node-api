import { IDatasControle, KeysDatasControle } from "@shared/domain/datas.types";


interface ICategoria extends IDatasControle {
    id?: string;
    nome:string;
}

type CriarCategoriaProps = Omit<ICategoria, "id" | KeysDatasControle>;


type RecuperarCategoriaProps = ICategoria & {
    id: NonNullable<ICategoria['id']>
}

export {
    ICategoria , 
    CriarCategoriaProps,
    RecuperarCategoriaProps
}