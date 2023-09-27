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

    //const categoriaRecuperada = await categoriaRepo.recuperarPorUuid("c2666bdb-c055-40bb-951b-32f899f41e30");

    //console.log(categoriaRecuperada);

    // const categoria: Categoria = Categoria.criar({
    //     nome:'Banho'
    // })    

    // const categoriaInserida = await categoriaRepo.inserir(categoria);

    // console.log(categoriaInserida);

    // const recuperarTodos = await categoriaRepo.recuperarTodos();
    // console.log(recuperarTodos);
    
    // const categoria = Categoria.recuperar({
    //     id: "bea4be1a-316a-419b-af0f-3444a6470608",
    //     nome: "Mesa"
    // })    

    // const categoriaAtualizada = await categoriaRepo.atualizar(categoria.id,categoria);

    // console.log(categoriaAtualizada)

    
    const categoriaDeletada = await categoriaRepo.deletar("c2666bdb-c055-40bb-951b-32f899f41e30");
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