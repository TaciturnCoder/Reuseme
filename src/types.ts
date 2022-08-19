export interface Cont {
    conf: {
        [key: string]: Conf,
    },
    cont: {
        [key: string]: Cont,
    },
    cat: string,
}

export interface Conf {
    value: string,
    type: string,
}
