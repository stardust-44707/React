export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    icon: 'angry',
  },
};

export const infoData = {
  title: 'Info',
  image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  description: 'Podstawowy reactowy routing przećwiczymy sobie na naszej aplikacji to-do. Zastanówmy się teraz, jakie funkcjonalności chcemy do niej dodać. Załóżmy, że oprócz widoku wyświetlającego kolumny z kartami, chcemy mieć dodatkową stronę ze statyczną treścią, zawierającą informacje o naszej aplikacji. Ta strona powinna pokazać się, gdy do adresu w pasku przeglądarki dodamy frazę /info. Co więcej, chcemy, aby po kliknięciu na którąkolwiek kolumnę, jej zawartość otworzyła się w nowym widoku. Tu już sprawa będzie nieco bardziej złożona, bo kolumny generowane są dynamicznie, więc nie możemy przewidzieć, jakie będą ich adresy. Ponadto, aby ułatwić poruszanie się po stronie, dodamy do naszej aplikacji pasek nawigacji z logo i linkami do statycznych stron.',
};

export const FAQData = {
  title: 'FAQ',
  image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  description: 'Tym razem przećwiczymy wykorzystanie różnych elementów zdobytej do tej pory wiedzy – zarówno z zakresu Routera, Reduksa, jak i samego Reacta. Twoim zadaniem jest dodanie jeszcze jednej podstrony – FAQ. Pamiętaj, aby dodać ją do headera oraz routingu! Zarówno dla Info, jak i FAQ, dodaj: Container, komponent Hero z tytułem i obrazkiem, przykładową treść. Następnie zrobimy trochę porządku – rozwiń i wykorzystaj obiekt settings z dataStore.js, aby z niego czerpana była nazwa ikony używanej jako logo w headerze. Następnie w dataStore.js dodaj nowe obiekty z danymi dla podstron Info oraz FAQ – mają zawierać tytuł, adres obrazka oraz treść podstrony. Nie musisz dodawać ich do stanu, wystarczy, że zaimportujesz odpowiednie obiekty z dataStore.js. Po tych zmianach w komponentach Header, Info i FAQ nie powinno być wpisanych żadnych treści wyświetlanych na stronie – wszystkie będą pobierane z dataStore.js. Powodzenia!',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>later!</sup>',
    description: 'Interesting things I want to check out?',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>...nope</sup>',
    description: 'Interesting things I want to check out in other life!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
