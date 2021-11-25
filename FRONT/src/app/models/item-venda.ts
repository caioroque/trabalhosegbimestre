//import { Produto } from "./produto";

import { Compromisso } from "./compromisso";

export interface ItemVenda {
    id?: number;
    quantidade?: number;
    compromisso: Compromisso;
    compromissoId: number;
    carrinhoId?: string;
    criadoEm?: Date;
}
