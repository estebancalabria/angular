
export const _$ = <T>()=>{
    return {} as {
        [P in keyof T] : P; 
    }
}
