import { describe, expect, test} from "vitest"
import { RationalNumber } from "../../src/entregable/rationalnumber.ts"

const primer_numero = new RationalNumber(5,2);
const segundo_numero = new RationalNumber(2,10);
const tercer_numero = new RationalNumber(7,3);
let cuarto_numero = new RationalNumber(3,4);

describe("pruebas de la función add de números racionales", () => {
  test("primer_numero.add(segundo_numero) devuelve el número racional (27,10)", () => {
    expect(primer_numero.add(segundo_numero)).toStrictEqual(new RationalNumber(27,10));
  });

  test("primer_numero.add(tercer_numero) devuelve el número racional (29,6)", () => {
    expect(primer_numero.add(tercer_numero)).toStrictEqual(new RationalNumber(29,6));
  });

  test("segundo_numero.add(tercer_numero) devuelve el número racional (38,15)", () => {
    expect(segundo_numero.add(tercer_numero)).toStrictEqual(new RationalNumber(38,15));
  });

});

describe("pruebas de la función substract de números racionales", () => {
    test("primer_numero.substract(segundo_numero) devuelve el número racional (23,10)", () => {
      expect(primer_numero.substract(segundo_numero)).toStrictEqual(new RationalNumber(23,10));
    });
  
    test("primer_numero.substract(tercer_numero) devuelve el número racional (1/6)", () => {
      expect(primer_numero.substract(tercer_numero)).toStrictEqual(new RationalNumber(1,6));
    });
  
    test("tercer_numero.substract(segundo_numero) devuelve el número racional (32/15)", () => {
      expect(tercer_numero.substract(segundo_numero)).toStrictEqual(new RationalNumber(32,15));
    });
});

describe("pruebas de la función multiply de números racionales", () => {
    test("primer_numero.multiply(segundo_numero) devuelve el número racional (1,2)", () => {
      expect(primer_numero.multiply(segundo_numero)).toStrictEqual(new RationalNumber(1,2));
    });
  
    test("primer_numero.multiply(tercer_numero) devuelve el número racional (35,6)", () => {
      expect(primer_numero.multiply(tercer_numero)).toStrictEqual(new RationalNumber(35,6));
    });
  
    test("tercer_numero.multiply(segundo_numero) devuelve el número racional (7,15)", () => {
      expect(tercer_numero.multiply(segundo_numero)).toStrictEqual(new RationalNumber(7,15));
    });
});

describe("pruebas de la función divide de números racionales", () => {
    test("primer_numero.divide(segundo_numero) devuelve el número racional (25,2)", () => {
      expect(primer_numero.divide(segundo_numero)).toStrictEqual(new RationalNumber(25,2));
    });
    test("primer_numero.divide(tercer_numero) devuelve el número racional (15,14)", () => {
      expect(primer_numero.divide(tercer_numero)).toStrictEqual(new RationalNumber(15,14));
    });
    test("tercer_numero.divide(segundo_numero) devuelve el número racional (35,3)", () => {
      expect(tercer_numero.divide(segundo_numero)).toStrictEqual(new RationalNumber(35,3));
    });
});

describe("pruebas de las funciónes setters", () => {
    cuarto_numero.numerador = 5;
    test("cuarto_numero.numerador devuelve el número 5", () => {
      expect(cuarto_numero.numerador).toBe(5);
    });
    cuarto_numero.denominador = 2;
    test("cuarto_numero.denominador devuelve el número 2", () => {
        expect(cuarto_numero.denominador).toBe(2);
      });
});
