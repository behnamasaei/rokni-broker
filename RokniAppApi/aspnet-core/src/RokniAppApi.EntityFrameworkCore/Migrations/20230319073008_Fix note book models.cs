using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RokniAppApi.Migrations
{
    /// <inheritdoc />
    public partial class Fixnotebookmodels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppIndustry_AppNoteBook_NotebookId",
                table: "AppIndustry");

            migrationBuilder.DropForeignKey(
                name: "FK_AppStock_AppNoteBook_NotebookId",
                table: "AppStock");

            migrationBuilder.DropTable(
                name: "AppNoteBook");

            migrationBuilder.RenameColumn(
                name: "NotebookId",
                table: "AppStock",
                newName: "StockNotebookId");

            migrationBuilder.RenameIndex(
                name: "IX_AppStock_NotebookId",
                table: "AppStock",
                newName: "IX_AppStock_StockNotebookId");

            migrationBuilder.RenameColumn(
                name: "NotebookId",
                table: "AppIndustry",
                newName: "IndustryNotebookId");

            migrationBuilder.RenameIndex(
                name: "IX_AppIndustry_NotebookId",
                table: "AppIndustry",
                newName: "IX_AppIndustry_IndustryNotebookId");

            migrationBuilder.CreateTable(
                name: "AppIndustryNotebook",
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
                    table.PrimaryKey("PK_AppIndustryNotebook", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppStockNotebook",
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
                    table.PrimaryKey("PK_AppStockNotebook", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_AppIndustry_AppIndustryNotebook_IndustryNotebookId",
                table: "AppIndustry",
                column: "IndustryNotebookId",
                principalTable: "AppIndustryNotebook",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AppStock_AppStockNotebook_StockNotebookId",
                table: "AppStock",
                column: "StockNotebookId",
                principalTable: "AppStockNotebook",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppIndustry_AppIndustryNotebook_IndustryNotebookId",
                table: "AppIndustry");

            migrationBuilder.DropForeignKey(
                name: "FK_AppStock_AppStockNotebook_StockNotebookId",
                table: "AppStock");

            migrationBuilder.DropTable(
                name: "AppIndustryNotebook");

            migrationBuilder.DropTable(
                name: "AppStockNotebook");

            migrationBuilder.RenameColumn(
                name: "StockNotebookId",
                table: "AppStock",
                newName: "NotebookId");

            migrationBuilder.RenameIndex(
                name: "IX_AppStock_StockNotebookId",
                table: "AppStock",
                newName: "IX_AppStock_NotebookId");

            migrationBuilder.RenameColumn(
                name: "IndustryNotebookId",
                table: "AppIndustry",
                newName: "NotebookId");

            migrationBuilder.RenameIndex(
                name: "IX_AppIndustry_IndustryNotebookId",
                table: "AppIndustry",
                newName: "IX_AppIndustry_NotebookId");

            migrationBuilder.CreateTable(
                name: "AppNoteBook",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeleterId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Text = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppNoteBook", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_AppIndustry_AppNoteBook_NotebookId",
                table: "AppIndustry",
                column: "NotebookId",
                principalTable: "AppNoteBook",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AppStock_AppNoteBook_NotebookId",
                table: "AppStock",
                column: "NotebookId",
                principalTable: "AppNoteBook",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
