import { Importancia } from "./importancia";


export interface Compromisso {
    id?: number;
    nome: string;
    descricao: string;
    criadoem?: string;
    importanciaId: number;
    importancia?: Importancia;
}
