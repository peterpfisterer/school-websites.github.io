using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DiskInventory.Models
{
    public partial class Disk
    {
        public int DiskId { get; set; }
        public string DiskName { get; set; }
        public int GenreId { get; set; }
        public int? BorrowerId { get; set; }
        public int? ArtistId { get; set; }

        public virtual Artists Artist { get; set; }
        public virtual Borrower Borrower { get; set; }
        public virtual Genres Genre { get; set; }
    }
}
