import 'dotenv/config.js'
import "../../Config/datbase.js"
import User from "../User.js"

const Users = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      password: "password123",
      photo: "https://example.com/photos/john.jpg",
      role: 1
    },
    {
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
      password: "securePass456",
      photo: "https://example.com/photos/emma.jpg",
      role: 2
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      password: "brownMike789",
      photo: "https://example.com/photos/michael.jpg",
      role: 1
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      password: "olivia2024",
      photo: "https://example.com/photos/olivia.jpg",
      role: 3
    },
    {
      name: "William Wilson",
      email: "william.wilson@example.com",
      password: "willWilson01",
      photo: "https://example.com/photos/william.jpg",
      role: 2
    },
    {
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      password: "sophiaLee1234",
      photo: "https://example.com/photos/sophia.jpg",
      role: 1
    },
    {
      name: "James Taylor",
      email: "james.taylor@example.com",
      password: "jamesT2024",
      photo: "https://example.com/photos/james.jpg",
      role: 2
    },
    {
      name: "Ava Martinez",
      email: "ava.martinez@example.com",
      password: "avaMar5678",
      photo: "https://example.com/photos/ava.jpg",
      role: 1
    },
    {
      name: "Robert Anderson",
      email: "robert.anderson@example.com",
      password: "robAnderson90",
      photo: "https://example.com/photos/robert.jpg",
      role: 3
    },
    {
      name: "Isabella Thomas",
      email: "isabella.thomas@example.com",
      password: "bellaT2024",
      photo: "https://example.com/photos/isabella.jpg",
      role: 2
    }
  ];

  User.insertMany(Users)