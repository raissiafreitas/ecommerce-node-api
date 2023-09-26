import { Categoria } from "@modules/catalago/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient();

async function main() {

   ////////////////// 
   //Criar Categoria//
  //////////////////

// let categoria: Categoria
// categoria = Categoria.criar({nome: 'mesa'});

    
//    ////////////////////////////// 
//    Persistir Categoria no banco//
//   //////////////////////////////

// await prisma.categoria.create({
//     data: {
//         id: categoria.id,
//         nome: categoria.nome

//        }
//     })

    //////////////////////////////// 
   //Atualizar Categoria no banco//
  ////////////////////////////////

    const categoriaRecuperada = await prisma.categoria.update ({
        where: {id: "8127eb75-c156-4dbf-83e1-eb49ffeeb7ac"},
        data: {nome: 'banho'},
    })

    
   ////////////////// 
   //Listar Categoria//
  //////////////////
    
    const ListaCategorias = await prisma.categoria.findMany();
    console.log(ListaCategorias);
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })

    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Execeção de domínio')
            console.log(error.message)
        }

        else {
            console.log('Outras execeções')
            console.log(error.message)
        }

        await prisma.$disconnect()
        process.exit(1)
        
     
    })