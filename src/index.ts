import { Categoria } from '@modules/catalago/domain/categoria/categoria.entity';
import { CategoriaPrismaRepository } from '@modules/catalago/infra/database/categoria.prisma.repository';
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

    const categoriaRecuperada = await categoriaRepo.recuperarPorUuid("8127eb75-c156-4dbf-83e1-eb49ffeeb7ac");

    console.log(categoriaRecuperada);

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

    // const categoria: Categoria = Categoria.criar({
    //     nome: 'Sala e quarto'
    // })
    // const categoriaInserida = await categoriaRepo.inserir(categoria);

    // console.log(categoriaInserida);

//     const categoria: Categoria = Categoria.recuperar({
//         id: "8127eb75-c156-4dbf-83e1-eb49ffeeb7ac",
//         nome: "Banho"
//     })
    
//    const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);
//      console.log(atualizouCategoria);


    const categoriaDeletada = await categoriaRepo.deletar("f040e543-fad0-453e-8c17-04db0e83fcc4");
    console.log(categoriaDeletada)
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