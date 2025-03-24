import { describe, expect, test} from "vitest"
import { Adaptador } from "../../src/entregable/adaptador.ts"
import { RationalNumber } from "../../src/entregable/rationalnumber.ts"
import { ComplexNumber } from "../../src/entregable/complexnumber.ts";

const primer_numero_racional = new RationalNumber(5,2);
const segundo_numero_racional = new RationalNumber(12,4);
const adaptado1 = new Adaptador(primer_numero_racional);
const adaptado2 = new Adaptador(segundo_numero_racional);

const primer_numero_complejo = new ComplexNumber(2,10);
const segundo_numero_complejo = new ComplexNumber(1,1);

describe("pruebas de la función add del adaptador", () => {
  test("primer_numero_complejo.add(adaptado1) devuelve el número complejo (9/2,10)", () => {
    expect(primer_numero_complejo.add(adaptado1)).toStrictEqual(new ComplexNumber(9/2,10));
  });
  test("primer_numero_complejo.add(adaptado2) devuelve el número complejo (5,10)", () => {
    expect(primer_numero_complejo.add(adaptado2)).toStrictEqual(new ComplexNumber(5,10));
  });

  test("segundo_numero_complejo.add(adaptado1) devuelve el número complejo (7/2,1)", () => {
    expect(segundo_numero_complejo.add(adaptado1)).toStrictEqual(new ComplexNumber(7/2,1));
  });
  test("segundo_numero_complejo.add(adaptado2) devuelve el número complejo (4,1)", () => {
    expect(segundo_numero_complejo.add(adaptado2)).toStrictEqual(new ComplexNumber(4,1));
  });

});

describe("pruebas de la función substract de números adaptados", () => {
  test("primer_numero_complejo.substract(adaptado1) devuelve el número complejo (-1/2,10)", () => {
    expect(primer_numero_complejo.substract(adaptado1)).toStrictEqual(new ComplexNumber(-1/2,10));
  });
  test("primer_numero_complejo.substract(adaptado2) devuelve el número complejo (-1,10)", () => {
    expect(primer_numero_complejo.substract(adaptado2)).toStrictEqual(new ComplexNumber(-1,10));
  });

  test("segundo_numero_complejo.substract(adaptado1) devuelve el número complejo (-3/2,1)", () => {
    expect(segundo_numero_complejo.substract(adaptado1)).toStrictEqual(new ComplexNumber(-3/2,1));
  });
  test("segundo_numero_complejo.substract(adaptado2) devuelve el número complejo (-2,1)", () => {
    expect(segundo_numero_complejo.substract(adaptado2)).toStrictEqual(new ComplexNumber(-2,1));
  });
});


describe("pruebas de la función multiply de números adaptados", () => {
  test("primer_numero_complejo.multiply(adaptado1) devuelve el número complejo (5,25)", () => {
    expect(primer_numero_complejo.multiply(adaptado1)).toStrictEqual(new ComplexNumber(5,25));
  });
  
  test("primer_numero_complejo.multiply(adaptado2) devuelve el número complejo (6,30)", () => {
    expect(primer_numero_complejo.multiply(adaptado2)).toStrictEqual(new ComplexNumber(6,30));
  });
  
  test("segundo_numero_complejo.multiply(adaptado1) devuelve el número complejo (5/2,5/2)", () => {
    expect(segundo_numero_complejo.multiply(adaptado1)).toStrictEqual(new ComplexNumber(5/2,5/2));
  });
  test("segundo_numero_complejo.multiply(adaptado2) devuelve el número complejo (3,3)", () => {
    expect(segundo_numero_complejo.multiply(adaptado2)).toStrictEqual(new ComplexNumber(3,3));
  })
});

describe("pruebas de la función divide de números adaptados", () => {
  test("primer_numero_complejo.divide(adaptado1) devuelve el número complejo (4/5,4)", () => {
    expect(primer_numero_complejo.divide(adaptado1)).toStrictEqual(new ComplexNumber(4/5,4));
  });
  test("primer_numero_complejo.divide(adaptado2) devuelve el número complejo (2/3,10/3)", () => {
    expect(primer_numero_complejo.divide(adaptado2)).toStrictEqual(new ComplexNumber(2/3,10/3));
  });
  test("adaptado1.divide(primer_numero_complejo) devuelve el número complejo (5/104,-25/104)", () => {
    expect(adaptado1.divide(primer_numero_complejo)).toStrictEqual(new ComplexNumber(5/104,-25/104));
  });
  
  test("adaptado2.divide(primer_numero_complejo) devuelve el número complejo (6/104,-30/104)", () => {
    expect(adaptado2.divide(primer_numero_complejo)).toStrictEqual(new ComplexNumber(6/104,-30/104));
  })
});
