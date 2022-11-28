using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiskInventory.Models;

namespace DiskInventory.Controllers
{
    public class BorrowerController : Controller
    {
        private disk_inventoryPPContext context { get; set; }
        public BorrowerController(disk_inventoryPPContext ctx)
        {
            context = ctx;
        }
        public IActionResult Index()
        {
            List<Borrower> borrowers = context.Borrowers.OrderBy(b => b.LName).ThenBy(b => b.FName).ToList();
            return View(borrowers);
        }
    }
}
