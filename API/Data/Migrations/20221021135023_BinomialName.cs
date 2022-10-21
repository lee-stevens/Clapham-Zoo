using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class BinomialName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AnimalName",
                table: "Animals",
                newName: "Name");

            migrationBuilder.AddColumn<string>(
                name: "BinomialName",
                table: "Animals",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BinomialName",
                table: "Animals");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Animals",
                newName: "AnimalName");
        }
    }
}
