using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RokniAppApi.Migrations
{
    /// <inheritdoc />
    public partial class InitModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppIndustry",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppIndustry", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppNoteBook",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Text = table.Column<string>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppNoteBook", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppStock",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    CodalLink = table.Column<string>(type: "TEXT", nullable: true),
                    ChartsazLink = table.Column<string>(type: "TEXT", nullable: true),
                    TablokhaniLink = table.Column<string>(type: "TEXT", nullable: true),
                    TsetmcLink = table.Column<string>(type: "TEXT", nullable: true),
                    RahvardLink = table.Column<string>(type: "TEXT", nullable: true),
                    ShakhesbanLink = table.Column<string>(type: "TEXT", nullable: true),
                    IndustryId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppStock", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppStock_AppIndustry_IndustryId",
                        column: x => x.IndustryId,
                        principalTable: "AppIndustry",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppStock_IndustryId",
                table: "AppStock",
                column: "IndustryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppNoteBook");

            migrationBuilder.DropTable(
                name: "AppStock");

            migrationBuilder.DropTable(
                name: "AppIndustry");
        }
    }
}
