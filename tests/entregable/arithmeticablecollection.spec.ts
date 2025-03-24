import { describe, expect, test} from "vitest"
import { ComplexNumber } from "../../src/entregable/complexnumber.ts"
import { ArithmeticableCollection } from "../../src/entregable/arithmeticablecollection"

const primer_numero = new ComplexNumber(2, 1);
const segundo_numero = new ComplexNumber(5, 4);
const tercer_numero = new ComplexNumber(10, 2);

let mi_coleccion = new ArithmeticableCollection<ComplexNumber>([primer_numero, segundo_numero]);
mi_coleccion.addArithmeticable(tercer_numero);

describe("pruebas de la colección de números aritmeticos complejos", () => {
  test("mi_coleccion.getNumberOfArithmeticables() deberia devolver 3", () => {
    expect(mi_coleccion.getNumberOfArithmeticables()).toBe(3);
  });
  test("mi_coleccion.getArithmeticable(1) deberia devolver el segundo numero introducido", () => {
    expect(mi_coleccion.getArithmeticable(1)).toStrictEqual(segundo_numero);
  });
  test("mi_coleccion.getArithmeticable(0) deberia devolver el primer numero introducido", () => {
    expect(mi_coleccion.getArithmeticable(0)).toStrictEqual(primer_numero);
  });
});