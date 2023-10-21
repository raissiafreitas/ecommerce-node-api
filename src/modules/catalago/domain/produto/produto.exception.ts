import { DomainException } from "../../../../shared/domain/domain.exception";

class ProdutoExeception extends DomainException {
    constructor(message:string = 'Execeção de Domínio Genérica da Entidade Produto') {
        super(message);
        this.name = 'ProdutoJaPossuiQtdMinimaCategorias'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoExeception {
    public constructor(message:string = 'O nome do produto não possuí um tamanho mínimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoExeception {
    public constructor(message:string = 'O nome do produto não possuí um tamanho maximo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoExeception {
    public constructor(message:string = 'A descrição do produto não possuí um tamanho mínimo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoExeception {
    public constructor(message:string = 'A descrição do produto não possuí um tamanho maximo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class ValorMinimoProdutoInvalido extends ProdutoExeception {
    public constructor(message:string = 'O valor mínimo do produto é inválido.') {
        super(message);
        this.name = 'ValorMinimoProdutoInvalido'
        this.message = message;
    }
}

class QtdMinimaCategoriaProdutoInvalida extends ProdutoExeception {
    public constructor(message:string = 'A quantidade mínima de categorias produto é inválida.') {
        super(message);
        this.name = 'QtdMinimaCategoriaProdutoInvalida'
        this.message = message;
    }
}

class QtdMaximaCategoriaProdutoInvalida extends ProdutoExeception {
    public constructor(message:string = 'A quantidade máxima de categorias produto é inválida.') {
        super(message);
        this.name = 'QtdMaximaCategoriaProdutoInvalida'
        this.message = message;
    }

}

class ProdutoJaPossuiQtdMaximaCategorias extends ProdutoExeception {
    public constructor(message:string = 'O produto já possui e quantidade máxima de categorias.') {
        super(message);
        this.name = 'ProdutoJaPossuiQtdMaximaCategorias'
        this.message = message;
    }

}

class ProdutoJaPossuiCategoriaInformada extends ProdutoExeception {
    public constructor(message:string = 'O produto já possui categoria informada.') {
        super(message);
        this.name = 'ProdutoJaPossuiCategoriaInformada'
        this.message = message;
    }

}

class ProdutoNaoPossuiCategoriaInformada extends ProdutoException {
    public constructor(message:string = 'O produto não possui a categoria informada.') {
        super(message);
        this.name = 'ProdutoNaoPossuiCategoriaInformada'
        this.message = message
    }
}




const ProdutoExceptions = {
    ProdutoExeception: ProdutoExeception,
    NomeProdutoTamanhoMinimoInvalido: NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido: NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido: DescricaoProdutoTamanhoMinimoInvalido,
    DescricaoProdutoTamanhoMaximoInvalido: DescricaoProdutoTamanhoMaximoInvalido,
    ValorMinimoProdutoInvalido: ValorMinimoProdutoInvalido,
    QtdMinimaCategoriaProdutoInvalida: QtdMinimaCategoriaProdutoInvalida,
    QtdMaximaCategoriaProdutoInvalida: QtdMaximaCategoriaProdutoInvalida,
    ProdutoJaPossuiQtdMaximaCategorias: ProdutoJaPossuiQtdMaximaCategorias,
    ProdutoJaPossuiCategoriaInformada: ProdutoJaPossuiCategoriaInformada,
    ProdutoJaPossuiCategoriaInformada: ProdutoJaPossuiCategoriaInformada,
    Pr


}

export {
   ProdutoExceptions
}