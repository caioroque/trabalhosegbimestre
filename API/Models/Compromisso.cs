using System;

namespace API.Models
{
    public class Compromisso
    {
        //Construtor
        public Compromisso() => CriadoEm = DateTime.Now;

        //Atributos
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public Importancia Importancia { get; set; }
        public int ImportanciaId { get; set; }
        public DateTime CriadoEm { get; set; }

        //ToString

        public override string ToString() =>
            $"Nome: {Nome} | Criado em: {CriadoEm}";
    }
}