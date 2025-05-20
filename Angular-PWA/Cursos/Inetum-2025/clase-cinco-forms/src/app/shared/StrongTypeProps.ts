
export type PropNames<T> = {
    [K in keyof T]: string;
};
export function getObjectProps<T>(objeto: T): PropNames<T> {
    const nombres: any = {};
    for (const key in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, key)) {
            nombres[key] = key;
        }
    }
    return nombres as PropNames<T>;
}


