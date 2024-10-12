import 'dotenv/config.js'
import "../../Config/datbase.js"
import Book from '../Book.js';

const books = [
    {
      tittle: "Cien años de soledad",
      year: 1967,
      pages: 471,
      caps: 20,
      autor: "Gabriel García Márquez",
      editorial: "Sudamericana",
      sales: 50000000,
      edition: 1
    },
    {
      tittle: "El señor de los anillos",
      year: 1954,
      pages: 1178,
      caps: 62,
      autor: "J.R.R. Tolkien",
      editorial: "Allen & Unwin",
      sales: 150000000,
      edition: 1
    },
    {
      tittle: "1984",
      year: 1949,
      pages: 328,
      caps: 23,
      autor: "George Orwell",
      editorial: "Secker & Warburg",
      sales: 100000000,
      edition: 1
    },
    {
      tittle: "El código Da Vinci",
      year: 2003,
      pages: 489,
      caps: 105,
      autor: "Dan Brown",
      editorial: "Doubleday",
      sales: 80000000,
      edition: 1
    },
    {
      tittle: "Harry Potter y la piedra filosofal",
      year: 1997,
      pages: 223,
      caps: 17,
      autor: "J.K. Rowling",
      editorial: "Bloomsbury",
      sales: 120000000,
      edition: 1
    },
    {
      tittle: "El principito",
      year: 1943,
      pages: 96,
      caps: 27,
      autor: "Antoine de Saint-Exupéry",
      editorial: "Reynal & Hitchcock",
      sales: 140000000,
      edition: 1
    },
    {
      tittle: "Crimen y castigo",
      year: 1866,
      pages: 671,
      caps: 39,
      autor: "Fiodor Dostoievski",
      editorial: "The Russian Messenger",
      sales: 50000000,
      edition: 1
    },
    {
      tittle: "Orgullo y prejuicio",
      year: 1813,
      pages: 432,
      caps: 61,
      autor: "Jane Austen",
      editorial: "T. Egerton, Whitehall",
      sales: 20000000,
      edition: 1
    },
    {
      tittle: "La Odisea",
      year: -800,
      pages: 448,
      caps: 24,
      autor: "Homero",
      editorial: "Desconocida",
      sales: 10000000,
      edition: 1
    },
    {
      tittle: "Don Quijote de la Mancha",
      year: 1605,
      pages: 863,
      caps: 126,
      autor: "Miguel de Cervantes",
      editorial: "Francisco de Robles",
      sales: 500000000,
      edition: 1
    }
  ];

  Book.insertMany(books)