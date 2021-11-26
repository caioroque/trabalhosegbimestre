using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/compromisso")]
    public class CompromissoController : ControllerBase
    {
        private readonly DataContext _context;
        public CompromissoController(DataContext context)
        {
            _context = context;
        }

        //POST: /api/compromisso/create
        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody] Compromisso compromisso)
        {
            compromisso.Importancia = _context.Importancias.Find(compromisso.ImportanciaId);
            _context.Compromissos.Add(compromisso);
            _context.SaveChanges();
            return Created("", compromisso);
        }

        //GET: /api/compromisso/list
        [Route("list")]
        [HttpGet]
        public IActionResult List() =>
            Ok(_context.Compromissos
                .Include(compromisso => compromisso.Importancia)
                .ToList());

        //GET: api/compromisso/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar um objeto pela chave primária
            Compromisso compromisso = _context.Compromissos.Find(id);
            if (compromisso == null)
            {
                return NotFound();
            }
            return Ok(compromisso);
        }

        //GET: api/compromisso/delete/Bolacha
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete(string name)
        {
            Compromisso compromisso = _context.Compromissos.FirstOrDefault(compromisso => compromisso.Nome == name);
            if (compromisso == null)
            {
                return NotFound();
            }
            _context.Compromissos.Remove(compromisso);
            _context.SaveChanges();
            return Ok(_context.Compromissos.ToList());
        }

        [Route("deleteById/{id}")]
        [HttpDelete]
        public IActionResult DeleteById(int id){
            Compromisso compromisso = _context.Compromissos.FirstOrDefault(compromisso => compromisso.Id == id);
            if (compromisso == null)
            {
                return NotFound();
            }
            _context.Compromissos.Remove(compromisso);
            _context.SaveChanges();
            return Ok(_context.Compromissos.ToList());
        }


        //PUT: /api/compromisso/update
        [Route("update")]
        [HttpPut]
        public IActionResult Update([FromBody] Compromisso compromisso)
        {
            _context.Compromissos.Update(compromisso);
            _context.SaveChanges();
            return Ok(compromisso);
        }
    }
}