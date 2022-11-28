﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiskInventory.Models;

namespace DiskInventory.Controllers
{
    public class DiskController : Controller
    {
        private disk_inventoryPPContext context { get; set; }
        public DiskController(disk_inventoryPPContext ctx)
        {
            context = ctx;
        }
        public IActionResult Index()
        {
            List<Disk> disks = context.Disks.OrderBy(d => d.DiskName).ToList();
            return View(disks);
        }
    }
}
