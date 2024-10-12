import 'dotenv/config.js'
import "../../Config/datbase.js"
import Anime from '../Anime.js';

const animes = [
    {
      tittle: "Attack on Titan",
      persons: "Eren Yeager, Mikasa Ackerman, Armin Arlert",
      caps: 75,
      during: 24,
      maps: "Paradis Island, Marley",
      events: "Fall of Wall Maria, Battle of Trost",
      genre: "Action, Dark Fantasy",
      studio: "Wit Studio, MAPPA",
      releaseYear: 2013,
      rating: 9.0
    },
    {
      tittle: "Death Note",
      persons: "Light Yagami, L Lawliet, Ryuk",
      caps: 37,
      during: 23,
      maps: "Tokyo, Japan",
      events: "Kira's First Kill, L's Introduction",
      genre: "Mystery, Psychological Thriller",
      studio: "Madhouse",
      releaseYear: 2006,
      rating: 8.6
    },
    {
      tittle: "My Hero Academia",
      persons: "Izuku Midoriya, All Might, Katsuki Bakugo",
      caps: 113,
      during: 24,
      maps: "U.A. High School, Hosu City",
      events: "U.A. Sports Festival, Hero Killer Arc",
      genre: "Superhero, Action",
      studio: "Bones",
      releaseYear: 2016,
      rating: 8.4
    },
    {
      tittle: "One Piece",
      persons: "Monkey D. Luffy, Roronoa Zoro, Nami",
      caps: 1000,
      during: 24,
      maps: "East Blue, Grand Line, New World",
      events: "Marineford War, Whole Cake Island Arc",
      genre: "Adventure, Fantasy",
      studio: "Toei Animation",
      releaseYear: 1999,
      rating: 8.9
    },
    {
      tittle: "Fullmetal Alchemist: Brotherhood",
      persons: "Edward Elric, Alphonse Elric, Roy Mustang",
      caps: 64,
      during: 24,
      maps: "Amestris, Xing",
      events: "Philosopher's Stone Quest, Promised Day",
      genre: "Adventure, Steampunk",
      studio: "Bones",
      releaseYear: 2009,
      rating: 9.1
    },
    {
      tittle: "Demon Slayer",
      persons: "Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma",
      caps: 44,
      during: 24,
      maps: "Taisho Era Japan",
      events: "Final Selection, Mugen Train Arc",
      genre: "Dark Fantasy, Martial Arts",
      studio: "ufotable",
      releaseYear: 2019,
      rating: 8.7
    },
    {
      tittle: "Steins;Gate",
      persons: "Rintaro Okabe, Kurisu Makise, Mayuri Shiina",
      caps: 24,
      during: 24,
      maps: "Akihabara, Tokyo",
      events: "D-Mail Experiments, Operation Skuld",
      genre: "Sci-Fi, Thriller",
      studio: "White Fox",
      releaseYear: 2011,
      rating: 9.0
    },
    {
      tittle: "Naruto",
      persons: "Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno",
      caps: 220,
      during: 23,
      maps: "Hidden Leaf Village, Land of Waves",
      events: "Chunin Exams, Sasuke Retrieval Arc",
      genre: "Action, Adventure",
      studio: "Studio Pierrot",
      releaseYear: 2002,
      rating: 8.3
    },
    {
      tittle: "Code Geass",
      persons: "Lelouch Lamperouge, Suzaku Kururugi, C.C.",
      caps: 50,
      during: 24,
      maps: "Area 11 (Japan), Britannia Empire",
      events: "Black Rebellion, Zero Requiem",
      genre: "Mecha, Political Drama",
      studio: "Sunrise",
      releaseYear: 2006,
      rating: 8.7
    },
    {
      tittle: "Hunter x Hunter",
      persons: "Gon Freecss, Killua Zoldyck, Kurapika",
      caps: 148,
      during: 23,
      maps: "Hunter Exam Site, Yorknew City, NGL",
      events: "Hunter Exam, Phantom Troupe Arc, Chimera Ant Arc",
      genre: "Adventure, Fantasy",
      studio: "Madhouse",
      releaseYear: 2011,
      rating: 9.0
    }
  ];

  Anime.insertMany(animes)