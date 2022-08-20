export interface Comp {
    comp: {
        [key: string]: Comp,
    },
    conf: {
        [key: string]: Conf,
    },
    cat: string,
    name: string,
    order?: string[]
}

export interface Conf {
    value: string,
    name: string,
    type: string,
    hidden?: boolean
}

class Config implements Conf {
    value = "";
    name = "";
    type = ""
    hidden = false

    constructor(name: string, type: string, hidden = false) {
        this.name = name;
        this.type = type;
        this.hidden = hidden;
    }
}

export class Leaf implements Comp {
    comp = {}
    conf = {
        content: new Config("Content", "text"),
        color: new Config("Text color", "color"),
        background: new Config("Background color", "color"),
        size: new Config("Font size", "text"),
        padding: new Config("Padding", "text"),
        row: new Config("Row Span", "text"),
        col: new Config("Column Span", "text")
    }
    cat = "Leaf"
    name = ""
    constructor(name: string) {
        this.name = name;
    }
}

export class Chips implements Comp {
    comp = {}
    conf = {}
    cat = "Chips"
    name = ""

    constructor(name: string) {
        this.name = name;
    }
}

export class Section implements Comp {
    comp = {}
    conf = {}
    cat = "Section"
    name = ""

    constructor(name: string) {
        this.name = name;
    }
}

export const Flow = <{
    [key: string]: string[]
}>{
        "Leaf": <string[]>[],
        "Chips": ["Leaf"],
        "Section": ["Leaf", "Chips", "Section"],
    }
