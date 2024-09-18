/* Types */ 
import { AnyObject } from '../../types/Object';

export default {
    summaryHeader: {
        pl: [
            'Podsumowanie'
        ],
        en: [
            'Summary'
        ]
    },
    summary: {
        pl: [
            'Jeśli grałeś/aś w którąkolwiek z głównych gier z serii Fallout, z pewnością znasz nazwę Buffout (Bethesda, proszę, nie pozywaj mnie). Ponieważ jest to lek zwiększający siłę, uznałem, że jest to odpowiednia nazwa dla mojej aplikacji do śledzenia treningów.',
            'Ostatnio, widząc niezliczoną ilość produktów „wysokobiałkowych” i „dla mężczyzn” na półkach sklepowych, zastanawiałem się, który z nich jest najbardziej opłacalny pod względem białka lub który ma najlepszy stosunek białka do kalorii.  Chciałem też mieć miejsce, w którym mógłbym śledzić swoje postępy treningowe lub cele. Więc oto jesteśmy!'
        ],
        en: [
            'If you\'ve played any of the mainline games of the Fallout series, you are surely familiar with the name Buffout (Bethesda, please don\'t sue me). Since it\'s a strength-enhancing drug, I found it to be a fitting name for my workout tracking app.',
            'Recently, seeing the myriad of "high protein" and "for men" products on store shelves, I wondered which one is most cost-effective in terms of proteins or which one has the best protein-to-calorie ratio.  I also wanted to have some place to track my workout progress or goals. So here we are!'
        ]
    },
    featuresHeader: {
        pl: [
            'Cechy'
        ],
        en: [
            'Features'
        ]
    },
    features: {
        pl: [
            'Główną stroną aplikacji jest kalkulator białka. Wprowadzając zawartość białka w produkcie, kalorie i cenę, natychmiast poznasz cenę 1 grama białka i spożycie kalorii dla każdego grama białka dla tego konkretnego produktu. I to wszystko bez zakładania konta ;)',
            'Po utworzeniu konta i zalogowaniu się otrzymujemy kilka dodatkowych funkcji.',
            'Po pierwsze, kalkulator białka będzie miał pole „nazwa”. Wypełnienie wszystkich pól dla produktu pozwoli użytkownikowi na zapisanie go na liście produktów, którą można przeglądać na swoim koncie. W ten sposób użytkownik może łatwo porównać wiele produktów. Porządkowanie listy według różnych parametrów jest w toku. Skoncentrowałem się głównie na stworzeniu API i bazy danych. Z czasem dopracuję front-end.',
            'Oprócz listy produktów, użytkownik może również zapisać swoje cele fitness i plan treningowy na swoim koncie. Chociaż są to tylko proste obiekty tekstowe, podobnie jak produkty, są one zapisywane w bazie danych projektu.',
            'Jako uwierzytelniony użytkownik możesz również wyświetlić listę wszystkich zarejestrowanych użytkowników i przeglądać ich konta, w tym ich cele, treningi i produkty.'
        ],
        en: [
            'The main page of the app is the protein calculator. By entering a product\'s protein content, calories and price, you will instantly know the price of 1 gram of protein and what the calorie intake is for each gram of protein for that particular product. And that is all you get without an account ;)',
            'After creating an account and logging in, you get a couple of more functions.',
            'Firstly, the protein calculator will have a "name" field. Filling out all fields for a product will allow the user to save it to their list of products, which can be viewed in their account. This way, a user can easily compare multiple products. Arranging the list according to different parameters is a work in progress. I\'ve mainly concentrated on putting together the API and database. I\'ll refine the front-end in time. ',
            'Aside from the products list, the user can also write down his fitness goals and workout plan in their account. While they are just simple text objects, as the products, they are saved in the project\'s database. ',
            'As an authenticated user, you can also view the list of all registered users and view their accounts, including their goals, workouts, and products. '
        ]
    },
    technologiesHeader: {
        pl: [
            'Zastpspwane technologie'
        ],
        en: [
            'Technologies used'
        ]
    },
    technologies: {
        pl: [
            'W tym projekcie wykorzystałem MERN stack.',
            'Głównym celem było przećwiczenie pisania API dla aplikacji, ponieważ samo ukończenie kursu MERN nie wystarczy do poznania i zrozumienia bibliotek.',
            'Oprócz podstawowego stosu MERN (MongoDB, Express, React i Node), wykorzystałem również Nodemon, bcryptjs, express-validator, jsonwebtoken, Mongoose i multer.',
            'Do stylizacji front-endu (choć wciąż nie jest on ukończony) użyłem Material UI v5.'
        ],
        en: [
            'In this project, I\'ve made use of the MERN stack.',
            'The main goal was to practice writing an API for the app, since just doing a MERN course alone is not enough to learn and understand the libraries.',
            'Aside from the core MERN stack (MongoDB, Express, React, and Node), I also made use of Nodemon, bcryptjs, express-validator, jsonwebtoken, Mongoose and multer.',
            'For styling the front-end (although still not finished), I used Material UI v5.',
        ]
    },
    lessonsHeader: {
        pl: [
            'Zdobyta wiedza'
        ],
        en: [
            'Leassons learned'
        ]
    },
    lessons: {
        pl: [
            '- Konfiguracja bazy danych MongoDB',
            '- Napisanie back-endowego API w JavaScript, wykorzystując Express i Node',
            '- Użycie Mongoose do interakcji z bazą danych',
            '- Napisanie front-endowej aplikacji w React połączonej z back-endem',
            '- Caching funkcji za pomocą useCallback'
        ],
        en: [
            '- Configuring a MongoDB database',
            '- Writing a back-end API in JavaScript, utilizing Express and Node',
            '- Using Mongoose to interact with the database',
            '- Writing a React front-end app connected to the back-end',
            '- Caching functions with useCallback'
        ]
    },
    disclaimerHeader: {
        pl: [
            'Ostrzeżenie'
        ],
        en: [
            'Disclaimer'
        ]
    },
    disclaimer: {
        pl: [
            'Nie posiadam praw autorskich do nazwy "Buffout" ani do żadnej z gier z serii Fallout. Jest to projekt hobbystyczny, który nie ma na celu osiągnięcia zysku. Wszystkie prawa autorskie należą do ich prawowitych właścicieli.',
            'Obraz na miniaturkę projektu pochodzi z tego filmiku: https://www.youtube.com/watch?v=c0imdB9leOE do ktrego take nie posiadam praw autorskich.',
            'Wszystkie produkty, treningi i cele są zapisywane w bazie danych. Zalecam nie wprowadzanie danych osobistych lub wrażliwych.'
        ],
        en: [
            'I do not own the rights to the name "Buffout" or any of the Fallout games. This is a hobby project that is not intended to make a profit. All rights belong to their rightful owners.',
            'The image for the project thumbnail comes from this video: https://www.youtube.com/watch?v=c0imdB9leOE to which I also do not own the rights.',
            'All products, workouts, and goals are saved in the database. I recommend not entering personal or sensitive data.'
        ]
    }   

} as AnyObject<any>;

