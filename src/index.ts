import { Categoria } from '@modules/catalago/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalago/domain/produto/produto.entity';
import { CategoriaPrismaRepository } from '@modules/catalago/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalago/infra/database/produto.prisma.repository';
import { PrismaClient } from '@prisma/client';
import { DomainException } from '@shared/domain/domain.exception';

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {
   
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);

    const produtoRepo = new ProdutoPrismaRepository(prisma);

    // const categoriaRecuperada = await categoriaRepo.recuperarPorUuid("8127eb75-c156-4dbf-83e1-eb49ffeeb7ac");

    // console.log(categoriaRecuperada);

    // const categoria: Categoria = Categoria.criar({
    //     nome:'Banho'
    // })    

    // const recuperarTodos = await categoriaRepo.recuperarTodos();
    // console.log(recuperarTodos);
    
    // const categoria = Categoria.recuperar({
    //     id: "bea4be1a-316a-419b-af0f-3444a6470608",
    //     nome: "Mesa"
    // })    

    // console.log(categoriaAtualizada)

    // const esxisteCategoria: boolean = await categoriaRepo.existe("bea4be1a-316a-419b-af0f-3444a6470608")
    // console.log(esxisteCategoria)

    //  const categoria: Categoria = Categoria.criar({
    //      nome: 'Quarto'
    //  })
    //  const categoriaInserida = await categoriaRepo.inserir(categoria);

    // console.log(categoriaInserida);

//     const categoria: Categoria = Categoria.recuperar({
//         id: "8127eb75-c156-4dbf-83e1-eb49ffeeb7ac",
//         nome: "Cozinha Americana"
//     })
    
//    const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);
//      console.log(atualizouCategoria);


    // const categoriaDeletada = await categoriaRepo.deletar("8127eb75-c156-4dbf-83e1-eb49ffeeb7ac")
    // console.log(categoriaDeletada)

//    const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("d4e05fd6-973f-4692-91fe-744a76d263e7");
//    console.log(produtoRecuperado);

// const categoria01: Categoria = Categoria.recuperar({
//     id: "28d49ef2-cd46-4b46-bc18-38c422c82f3c",
//     nome: 'Sala'
// });    

// const categoria02: Categoria = Categoria.recuperar({
//     id: "cbb5f496-b666-44e9-89c8-6689af774ee6",
//     nome: 'Quarto'
// });

// const produto: Produto = Produto.criar({
//     nome:'Toalha de cozinha',
//     descricao:'toalha de algodão',
//     valor:85,
//     categorias:[categoria01, categoria02]
//  });

// const produtoInserido = await produtoRepo.inserir(produto);

//  console.log(produtoInserido);

const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();

console.log(todosProdutos);

// const produto = {
//     id: "7fff2d25-d734-48ae-bc82-97881f0174cd",
//     nome: "Toalha de cozinha",
//     descricao: "Toalha de algodão",
//     valor: 200
// }
//   const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id, produto)

//  const produtoDeletado: boolean = await produtoRepo.deletar("7fff2d25-d734-48ae-bc82-97881f0174cd")

// console.log(produtoDeletado);


// const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("d4e05fd6-973f-4692-91fe-744a76d263e7");

// const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("bea4be1a-316a-419b-af0f-3444a6470608")

// if (produtoRecuperado && categoriaRecuperada) {

//     if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
//         await produtoRepo.adicionarCategoria(produtoRecuperado,categoriaRecuperada)
//     }
    
//   }

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
       if (error instanceof DomainException) {
           console.log('Execeção de Dóminio');
           console.log(error.message);
       }
       else {
           console.log('Outras Exceções');
           console.log(error.message);
       }
       await prisma.$disconnect()
       process.exit(1)
   })