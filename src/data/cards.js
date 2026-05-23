export const movies = [
  {
    id: 1,
    title: "Побег из Шоушенка",
    year: 1994,
    genre: "Драма",
    duration: "142 мин",
    rating: 9.3,
    description: "Два заключенных находят дружбу и искупление за десятилетия ада в тюрьме.",
    isFavorite: true,
    country: "США"  
  },
  {
    id: 2,
    title: "Криминальное чтиво",
    year: 1994,
    genre: "Криминал",
    duration: "154 мин",
    rating: 8.9,
    description: "Переплетающиеся истории киллера, боксера, гангстера и жены босса мафии.",
    isFavorite: false,
    country: "США" 
  },
  {
    id: 3,
    title: "Начало",
    year: 2010,
    genre: "Фантастика",
    duration: "148 мин",
    rating: 8.8,
    description: "Вор, крадущий секреты через сны, получает задание внедрить идею в сознание.",
    isFavorite: true,
    country: "США / Великобритания"  
  },
  {
    id: 4,
    title: "Матрица",
    year: 1999,
    genre: "Научная фантастика",
    duration: "136 мин",
    rating: 8.7,
    description: "Программист Томас Андерсон узнает, что мир вокруг него — это симуляция, и присоединяется к восстанию против машин.",
    isFavorite: false,
    country: "США / Австралия"  
  }
];

export const actors = [
  {
    id: 1,
    name: "Том Хэнкс",
    role: "Форрест Гамп",
    movie: "Форрест Гамп",
    experience: "35+ лет",
    skills: ["Драма", "Комедия", "Продюсирование"],
    isLead: true
  },
  {
    id: 2,
    name: "Леонардо ДиКаприо",
    role: "Джордан Белфорт",
    movie: "Волк с Уолл-стрит",
    experience: "30+ лет",
    skills: ["Драма", "Триллер", "Экшн"],
    isLead: true
  },
  {
    id: 3,
    name: "Скарлетт Йоханссон",
    role: "Наташа Романофф",
    movie: "Мстители: Финал",
    experience: "25+ лет",
    skills: ["Экшн", "Драма", "Научная фантастика"],
    isLead: false
  },
    {
    id: 4,
    name: "Киану Ривз",
    role: "Нео",
    movie: "Матрица",
    experience: "30+ лет",
    skills: ["Экшн", "Научная фантастика", "Боевые искусства"],
    isLead: true
  }
];