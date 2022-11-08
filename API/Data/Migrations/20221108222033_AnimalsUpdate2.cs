using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class AnimalsUpdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phyum",
                table: "Animals",
                newName: "SubOrder");

            migrationBuilder.AddColumn<string>(
                name: "Class",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phylum",
                table: "Animals",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SubFamily",
                table: "Animals",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Class",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Phylum",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "SubFamily",
                table: "Animals");

            migrationBuilder.RenameColumn(
                name: "SubOrder",
                table: "Animals",
                newName: "Phyum");
        }
    }
}
