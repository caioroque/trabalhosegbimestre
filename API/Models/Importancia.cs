using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Importancia
    {
        public Importancia() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}