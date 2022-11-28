using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DiskInventory.Models
{
    public partial class disk_inventoryPPContext : DbContext
    {
        public disk_inventoryPPContext()
        {
        }

        public disk_inventoryPPContext(DbContextOptions<disk_inventoryPPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Artists> Artists { get; set; }
        public virtual DbSet<Borrower> Borrowers { get; set; }
        public virtual DbSet<Disk> Disks { get; set; }
        public virtual DbSet<Genres> Genres { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLDEV01;Database=disk_inventoryPP;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Artists>(entity =>
            {
                entity.HasKey(e => e.ArtistId)
                    .HasName("PK__Artists__4F439367F7F0FC3D");

                entity.Property(e => e.ArtistId).HasColumnName("artistID");

                entity.Property(e => e.ArtistName)
                    .HasColumnName("artistName")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Borrower>(entity =>
            {
                entity.HasKey(e => e.BorrowerId)
                    .HasName("PK__Borrower__3B4884362A8FE078");

                entity.Property(e => e.BorrowerId).HasColumnName("borrowerID");

                entity.Property(e => e.FName)
                    .HasColumnName("fName")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LName)
                    .HasColumnName("lName")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Disk>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.ArtistId).HasColumnName("artistID");

                entity.Property(e => e.BorrowerId).HasColumnName("borrowerID");

                entity.Property(e => e.DiskId)
                    .HasColumnName("diskID")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.DiskName)
                    .IsRequired()
                    .HasColumnName("diskName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.GenreId).HasColumnName("genreID");

                entity.HasOne(d => d.Artist)
                    .WithMany()
                    .HasForeignKey(d => d.ArtistId)
                    .HasConstraintName("FK__Disks__artistID__778AC167");

                entity.HasOne(d => d.Borrower)
                    .WithMany()
                    .HasForeignKey(d => d.BorrowerId)
                    .HasConstraintName("FK__Disks__borrowerI__72C60C4A");

                entity.HasOne(d => d.Genre)
                    .WithMany()
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Disks__genreID__71D1E811");
            });

            modelBuilder.Entity<Genres>(entity =>
            {
                entity.HasKey(e => e.GenreId)
                    .HasName("PK__Genres__3C5476A2CADF1F93");

                entity.Property(e => e.GenreId).HasColumnName("genreID");

                entity.Property(e => e.GenreName)
                    .HasColumnName("genreName")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
