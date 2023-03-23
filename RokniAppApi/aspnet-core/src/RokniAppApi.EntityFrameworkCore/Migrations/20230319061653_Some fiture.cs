using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RokniAppApi.Migrations
{
    /// <inheritdoc />
    public partial class Somefiture : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ChartIndex",
                table: "AppStock",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "NotebookId",
                table: "AppStock",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "SortNumber",
                table: "AppStock",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ChartIndex",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChartsazLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CodalLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "NotebookId",
                table: "AppIndustry",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "RahvardLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShakhesbanLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SortNumber",
                table: "AppIndustry",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "TablokhaniLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TsetmcLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppStock_NotebookId",
                table: "AppStock",
                column: "NotebookId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppIndustry_NotebookId",
                table: "AppIndustry",
                column: "NotebookId",
                unique: true);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppIndustry_AppNoteBook_NotebookId",
                table: "AppIndustry");

            migrationBuilder.DropForeignKey(
                name: "FK_AppStock_AppNoteBook_NotebookId",
                table: "AppStock");

            migrationBuilder.DropIndex(
                name: "IX_AppStock_NotebookId",
                table: "AppStock");

            migrationBuilder.DropIndex(
                name: "IX_AppIndustry_NotebookId",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "ChartIndex",
                table: "AppStock");

            migrationBuilder.DropColumn(
                name: "NotebookId",
                table: "AppStock");

            migrationBuilder.DropColumn(
                name: "SortNumber",
                table: "AppStock");

            migrationBuilder.DropColumn(
                name: "ChartIndex",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "ChartsazLink",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "CodalLink",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "NotebookId",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "RahvardLink",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "ShakhesbanLink",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "SortNumber",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "TablokhaniLink",
                table: "AppIndustry");

            migrationBuilder.DropColumn(
                name: "TsetmcLink",
                table: "AppIndustry");
        }
    }
}
