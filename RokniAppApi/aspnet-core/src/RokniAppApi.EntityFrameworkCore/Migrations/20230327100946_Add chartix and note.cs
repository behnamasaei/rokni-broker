using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RokniAppApi.Migrations
{
    /// <inheritdoc />
    public partial class Addchartixandnote : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "AppStockNotebook",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChartixLink",
                table: "AppStock",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "AppIndustryNotebook",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChartixLink",
                table: "AppIndustry",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Note",
                table: "AppStockNotebook");

            migrationBuilder.DropColumn(
                name: "ChartixLink",
                table: "AppStock");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "AppIndustryNotebook");

            migrationBuilder.DropColumn(
                name: "ChartixLink",
                table: "AppIndustry");
        }
    }
}
