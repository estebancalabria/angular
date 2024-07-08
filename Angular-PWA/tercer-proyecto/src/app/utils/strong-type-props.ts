
export type PropNames<T> = {
    [K in keyof T]: string;
  };

//export function propsOf<T extends Record<string, any>>(objeto: T): { [K in keyof T]: string } {
export function objectProps<T extends Record<string, any>>(objeto: T): PropNames<T> {
    const nombres: any = {};
    for (const key in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, key)) {
            nombres[key] = key;
        }
    }
    return nombres as PropNames<T>;
}

export function typeProps<T extends Record<string, any>>(): PropNames<T> {
    const nombres: any = {};
    for (const key of Object.keys({} as T)) {
        nombres[key] = key;
    }
    return nombres as PropNames<T>;
}