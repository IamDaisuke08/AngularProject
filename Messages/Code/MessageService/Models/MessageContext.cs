using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MessageService.Models;

public partial class MessageContext : DbContext
{
    public MessageContext()
    {
    }

    public MessageContext(DbContextOptions<MessageContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Message> Messages { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
        optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Message>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Messages");

            entity.HasIndex(e => new { e.CountryCode, e.StartDate }, "PK__Messages_CountryCode_StartDate").IsUnique();

            entity.Property(e => e.CountryCode).HasMaxLength(3);
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.Message1).HasColumnName("Message");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
            entity.Property(e => e.Title).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
