# Welcome to my first ASP.NET-Angular application

I am Following the course "Build an app with ASPNET Core and Angular from scratch" from [Udemy](https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/).

It uses a ASP.NET's MVC, for joining the Angular frontend with the ASP.NET SQLite backend


## Skills involved

1. ASP.NET - Backend v2.1
2. Angular - Frontent v13
3. Entity Framework Core
4. Swagger - API Visualiser
5. Postman - API Platform

## VS Code Extentions

* C#
* C# Extentions
* NuGet Gallery
* SQlite

## Packages

  `Microsoft.EntityFrameworkCore.Sqlite` | Entity Framework SQLite for API

  `Microsoft.EntityFrameworkCore.Design` | Entity Framework Design for API ef migrations

  `dotnet tool install --global dotnet-ef --version 7.0.0-rc.2.22472.11` | dotnet-ef for API (Get the version to match your .NET Core version)

  `dotnet new gitignore` | Gitignore specific to dotnet


## CLI Commands

  `>>dotnet run`

  `>>dotnet watch run` //Watches for any file changes

  `>>dotnet ef migrations add InitialCreate -o Data/Migrations` //[Migrate](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli) current C# code into SQL schemas with the name 'InitialCreate'

  `>>dotnet ef database update` //Creates/updates a database 

  `>>dotnet ef migrations add NewName` //Creates a new migration for any new changes to the entity framework schema
  `>>dotnet ef database update`  //Updates the existing database with the new migration schema

## Key learning points

Trust ASP.NET Http certification

  `dotnet dev-certs https --trust`

Protected: This class or any classes which inherit this class can access this variable
Private: Only this class can access this variable


## Angular


## ASP.NET

  `prop` //Generates a property boilterplate



## SQL

This course uses SQLite which stores the database in a local file, it is only for <i>develoment<i/> purposes


## Entity Framework | Microsoft

An Object Relational Mapper (ORM) which translates code into SQL for our tables in the database. (Creates schemas)

Input  | `DbContext.Users.Add(new User {Id = 4, Name = Lee})`
Output | `INSERT INTO Users(Id, Name) VALUES(4, Lee)`

* Querying
* Change Tracking
* Saving
* Concurrency
* Transactions
* Caching
* Built-in conventions
* Migrations