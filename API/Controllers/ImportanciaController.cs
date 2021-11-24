using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/importancia")]
    public class ImportanciaController : ControllerBase
    {
        private readonly DataContext _context;
        public ImportanciaController(DataContext context)
        {
            _context = context;
        }

        //POST: /api/categoria/create
        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody] Importancia importancia)
        {
            _context.Importancias.Add(importancia);
            _context.SaveChanges();
            return Created("", importancia);
        }

        //GET: /api/categoria/list
        [Route("list")]
        [HttpGet]
        public IActionResult List() => Ok(_context.Importancias.ToList());

    }
}