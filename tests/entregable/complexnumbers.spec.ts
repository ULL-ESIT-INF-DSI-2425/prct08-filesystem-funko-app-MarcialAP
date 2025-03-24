import { describe, expect, test} from "vitest"
import { ComplexNumber } from "../../src/entregable/complexnumber.ts"

const primer_numero = new ComplexNumber(2, 1);
const segundo_numero = new ComplexNumber(5, 4);
const tercer_numero = new ComplexNumber(10, 2);
let cuarto_numero = new ComplexNumber(20, 20);

describe("pruebas de la función add de números complejos", () => {
  test("primer_numero.add(segundo_numero) devuelve el número complejo (7, 5)", () => {
    expect(primer_numero.add(segundo_numero)).toStrictEqual(new ComplexNumber(7, 5));
  });

  test("primer_numero.add(tercer_numero) devuelve el número complejo (12, 3)", () => {
    expect(primer_numero.add(tercer_numero)).toStrictEqual(new ComplexNumber(12, 3));
  });

  test("segundo_numero.add(tercer_numero) devuelve el número complejo (15, 6)", () => {
    expect(segundo_numero.add(tercer_numero)).toStrictEqual(new ComplexNumber(15, 6));
  });

});

describe("pruebas de la función substract de números complejos", () => {
    test("primer_numero.substract(segundo_numero) devuelve el número complejo (-3, -3)", () => {
      expect(primer_numero.substract(segundo_numero)).toStrictEqual(new ComplexNumber(-3, -3));
    });
  
    test("primer_numero.substract(tercer_numero) devuelve el número complejo (-8, -1)", () => {
      expect(primer_numero.substract(tercer_numero)).toStrictEqual(new ComplexNumber(-8, -1));
    });
  
    test("tercer_numero.substract(segundo_numero) devuelve el número complejo (5, -2)", () => {
      expect(tercer_numero.substract(segundo_numero)).toStrictEqual(new ComplexNumber(5, -2));
    });
});

describe("pruebas de la función substract de números complejos", () => {
    test("primer_numero.substract(segundo_numero) devuelve el número complejo (-3, -3)", () => {
      expect(primer_numero.substract(segundo_numero)).toStrictEqual(new ComplexNumber(-3, -3));
    });
  
    test("primer_numero.substract(tercer_numero) devuelve el número complejo (-8, -1)", () => {
      expect(primer_numero.substract(tercer_numero)).toStrictEqual(new ComplexNumber(-8, -1));
    });
  
    test("tercer_numero.substract(segundo_numero) devuelve el número complejo (5, -2)", () => {
      expect(tercer_numero.substract(segundo_numero)).toStrictEqual(new ComplexNumber(5, -2));
    });
});

describe("pruebas de la función multiply de números complejos", () => {
    test("primer_numero.multiply(segundo_numero) devuelve el número complejo (6, 13)", () => {
      expect(primer_numero.multiply(segundo_numero)).toStrictEqual(new ComplexNumber(6, 13));
    });
  
    test("primer_numero.multiply(tercer_numero) devuelve el número complejo (18, 14)", () => {
      expect(primer_numero.multiply(tercer_numero)).toStrictEqual(new ComplexNumber(18, 14));
    });
  
    test("tercer_numero.multiply(segundo_numero) devuelve el número complejo (42, 50)", () => {
      expect(tercer_numero.multiply(segundo_numero)).toStrictEqual(new ComplexNumber(42, 50));
    });
});

describe("pruebas de la función divide de números complejos", () => {
    test("primer_numero.divide(segundo_numero) devuelve el número complejo (14/41, -3/41)", () => {
      expect(primer_numero.divide(segundo_numero)).toStrictEqual(new ComplexNumber(14/41, -3/41));
    });
    // c² + d² = 41
    test("primer_numero.divide(tercer_numero) devuelve el número complejo (22/104, 6/104)", () => {
      expect(primer_numero.divide(tercer_numero)).toStrictEqual(new ComplexNumber(22/104, 6/104));
    });
    // c² + d² = 104
    test("tercer_numero.divide(segundo_numero) devuelve el número complejo (58/41, /41)", () => {
      expect(tercer_numero.divide(segundo_numero)).toStrictEqual(new ComplexNumber(58/41, -30/41));
    });
    // c² + d² = 41
});

describe("pruebas de las funciónes setters", () => {
    cuarto_numero.parte_real = 5;
    test("cuarto_numero.parte_real devuelve el número 5", () => {
      expect(cuarto_numero.parte_real).toBe(5);
    });
    cuarto_numero.parte_imaginaria = 2;
    test("cuarto_numero.parte_imaginaria devuelve el número 2", () => {
        expect(cuarto_numero.parte_imaginaria).toBe(2);
      });
});