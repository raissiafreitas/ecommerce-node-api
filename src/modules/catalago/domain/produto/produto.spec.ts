import { faker } from '@faker-js/faker';
import { beforeAll, describe, expect, test } from "vitest";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";
import { DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido,QtdMaximaCategoriaProdutoInvalida,QtdMinimaCategoriaProdutoInvalida, ValorMinimoProdutoInvalido } from "./produto.exception";
import { CriarProdutoProps } from "./produto.types";

let nomeProdutoValido: string;
let nomeProdutoTamanhoMinInvalido: string;
let nomeProdutoTamanhoMaxInvalido: string;
let descricaoProdutoValido: string;
let descricaoProdutoMinInvalido: string;
let descricaoProdutoMaxInvalido: string;
let valorProdutoValido: number;
let valorMinProdutoInvalido: number;
let categoriasValidas: Array<Categoria>;
let categoriasQtdMinInvalidas: Array<Categoria>;
let categoriasQtdMaxInvalidas: Array<Categoria>;

beforeAll(async () => {

    nomeProdutoValido = faker.string.alpha({length:{min:5,max:50}});
    nomeProdutoTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:4}});
    nomeProdutoTamanhoMaxInvalido = faker.string.alpha({length:{min:51,max:51}});
    descricaoProdutoValido = faker.string.alpha({length:{min:10,max:200}});
    descricaoProdutoMinInvalido = faker.string.alpha({length:{min:0,max:9}});
    descricaoProdutoMaxInvalido = faker.string.alpha({length:{min:201,max:201}});
    valorProdutoValido = faker.number.int({min: 1,max: 2000});
    valorMinProdutoInvalido = faker.number.int({min: -10,max: -1});


    const categoriaValida01 = Categoria.criar({nome: faker.string.alpha({length: {min:3,max: 50}})});
    const categoriaValida02 = Categoria.criar({nome: faker.string.alpha({length: {min:3,max: 50}})});
    const categoriaValida03 = Categoria.criar({nome: faker.string.alpha({length: {min:3,max: 50}})});
    const categoriaValida04 = Categoria.criar({nome: faker.string.alpha({length: {min:3,max: 50}})});
    categoriasValidas = faker.helpers.arrayElements<Categoria>([categoriaValida01, categoriaValida02, categoriaValida03], {min: 1, max: 3});
    categoriasQtdMinInvalidas = [];
    categoriasQtdMaxInvalidas = faker.helpers.arrayElements<Categoria>([categoriaValida01, categoriaValida02, categoriaValida03, categoriaValida04], {min: 4, max: 4});
});

describe ('Entidade de domínio: Criar Produto', () => {

    test('Deve criar um produto válido', async () => {

        const produtoValido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        expect(Produto.criar(produtoValido))
            .to.be.instanceOf(Produto);
    });

    test('Não deve criar um produto com nome inválido(Tamanho Mínimo)', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMinInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMinimoInvalido);
    });

    test('Não deve criar um produto com nome inválido(Tamanho Maxima)', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMaxInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMaximoInvalido);
    });

    test('Não deve criar um produto com Descrição inválida(Tamanho Mínimo)', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoMinInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(DescricaoProdutoTamanhoMinimoInvalido);
    });

    test('Não deve criar um produto com Descrição inválida(Tamanho Maximo)', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoMaxInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(DescricaoProdutoTamanhoMaximoInvalido);
    });

    test('Não deve criar um produto com valor minimo inválido', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorMinProdutoInvalido,
            categorias: categoriasValidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ValorMinimoProdutoInvalido);
    });

     test('Não deve criar um produto com número minimo de categorias inválido', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasQtdMinInvalidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(QtdMinimaCategoriaProdutoInvalida);
    });

     test('Não deve criar um produto com número maximo de categorias inválido', async () => {

        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasQtdMaxInvalidas
        };

        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(QtdMaximaCategoriaProdutoInvalida);
    });

});   