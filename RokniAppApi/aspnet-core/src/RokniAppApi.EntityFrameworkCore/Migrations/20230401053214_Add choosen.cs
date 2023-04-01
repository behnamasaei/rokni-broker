using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RokniAppApi.Migrations
{
    /// <inheritdoc />
    public partial class Addchoosen : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Choosen",
                table: "AppStock",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Choosen",
                table: "AppIndustry",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Choosen",
                table: "AppStock");

            migrationBuilder.DropColumn(
                name: "Choosen",
                table: "AppIndustry");
        }
    }
}
