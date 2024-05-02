export enum FacePosition {
  FRONT = "Olhe para Frente",
  DOWN = "Olhe para Baixo",
  LEFT = "Olhe para Esquerda",
  RIGHT = "Olhe para Direita",
  UP = "Olhe para Cima",
}


export function getEnumKeys(enumObj: object): string[] {
  return Object.keys(enumObj).filter((key) => isNaN(Number(key)));
}

export function findEnumKeyByValue(enumObj: any, value: string): string {
  const keys = Object.keys(enumObj).filter((key) => isNaN(Number(key)));
  for (const key of keys) {
    if (enumObj[key] === value) {
      return key;
    }
  }
  return '';
}