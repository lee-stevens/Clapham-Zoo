using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class AnimalsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Animals",
                newName: "Species");

            migrationBuilder.AddColumn<string>(
                name: "CommonName",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Family",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Genus",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Kingdom",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Order",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phyum",
                table: "Animals",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CommonName",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Family",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Genus",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Kingdom",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Phyum",
                table: "Animals");

            migrationBuilder.RenameColumn(
                name: "Species",
                table: "Animals",
                newName: "Name");
        }
    }
}
