function numeroATexto(numero) {
  if (numero === 0) return "cero";

  const unidades = [
    "", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"
  ];
  const decenas = [
    "", "diez", "veinte", "treinta", "cuarenta", "cincuenta", 
    "sesenta", "setenta", "ochenta", "noventa"
  ];
  const especiales = [
    "once", "doce", "trece", "catorce", "quince", "dieciséis", 
    "diecisiete", "dieciocho", "diecinueve"
  ];
  const centenas = [
    "", "ciento", "doscientos", "trescientos", "cuatrocientos",
    "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"
  ];

  function convertirCentenas(num) {
    if (num === 100) return "cien";
    const c = Math.floor(num / 100);
    const resto = num % 100;

    return (centenas[c] + " " + convertirDecenas(resto)).trim();
  }

  function convertirDecenas(num) {
    if (num < 10) return unidades[num];
    if (num >= 11 && num <= 19) return especiales[num - 11];
    const d = Math.floor(num / 10);
    const resto = num % 10;

    return (decenas[d] + (resto > 0 ? " y " + unidades[resto] : "")).trim();
  }

  function convertirMiles(num) {
    if (num < 1000) return convertirCentenas(num);
    const miles = Math.floor(num / 1000);
    const resto = num % 1000;

    const textoMiles = miles === 1 ? "mil" : convertirCentenas(miles) + " mil";

    return (textoMiles + " " + convertirCentenas(resto)).trim();
  }

  function convertirMillones(num) {
    if (num < 1000000) return convertirMiles(num);
    const millones = Math.floor(num / 1000000);
    const resto = num % 1000000;

    const textoMillones = millones === 1 ? "un millón" : convertirCentenas(millones) + " millones";

    return (textoMillones + " " + convertirMiles(resto)).trim();
  }

  return convertirMillones(numero);
}