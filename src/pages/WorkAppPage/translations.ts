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
            'To jeden z pierwszych projektów, które stworzyłem, gdy zacząłem uczyć się tworzenia stron internetowych. Zawsze mi się podobał, ponieważ zawiera wiele przydatnych narzędzi w jednym. Choć odkąd powstała jego koncepcja, wielokrotnie przerabiałem ten projekt. Pierwszą wersję napisałem w podstawowym JavaScript, a aktualny to wersja czwarta, jeśli się nie mylę.',
            'Pomysł polegał na stworzeniu jednej aplikacji, która łączyłaby w sobie różne narzędzia przydatne w środowisku biurowym.'
        ],
        en: [
            'This is one of the first projects I have created back in the day when I\'ve started to learn web development. I\'ve always liked it because it contains many useful tools in one. So, since it\'s conception, I\'ve been rewriting it multiple times. The first version was written in vanilla JavaScript, and this is the 4th version if I\'m not mistaken.',
            'The idea was to create a single app that combines various tools that could be useful in an office setting.'
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
            'Zawsze widoczny prawy panel zawiera wyświetlacz daty i godziny.', 
            'Minutnik odliczający określoną liczbę godzin, minut i sekund. Podana wartość nie ma znaczenia, to znaczy, że jeśli wprowadzisz 200 minut, aplikacja zamieni je na 3 godziny i 20 minut i zacznie rozliczanie od tej wartości. Nawiasem mówiąc, minutnik ma alarm informujący użytkownika, że czas się skończył.',
            'I stoper, jeśli musisz śledzić, jak długo zajęło Ci zadanie.',
            'Środkowa lub lewa część aplikacji (w zależności od szerokości ekranu, więc nazwijmy ją główną) to miejsce, w którym będziesz korzystać z zawsze popularnej listy rzeczy do zrobienia, która najprawdopodobniej będzie głównym narzędziem tej aplikacji.',
            'A kiedy dzień pracy się skończy, główna część może być również miejscem na Twój własny trening. W narzędziu „Kalendarz treningów” możesz dodać do 7 elementów listy, aby zapisać swój plan treningowy. Trening po całym dniu siedzenia jest tym, co lubię robić każdego dnia. Dlatego ważny jest dla mnie łatwy i szybki dostęp do mojej cotygodniowej rutyny. Domyślnym widokiem tej sekcji jest notatnik.',
            'Oprócz lewego panelu z przyciskami do różnych podstron mamy również nawigację Breadcrumbs dostarczaną przez Material UI. Wiem, że funkcja śledzenia Twojej lokalizacji na stronie internetowej to przesada jak na coś tak małego, ale chciałem ją zintegrować w celu przećwiczenia.'
        ],
        en: [
            'The always visible right-hand panel contains a clock with date display.',
            'A timer that counts down from a given number of hours, minutes, and seconds. The input does not matter, that is if you input 200 minutes, it will convert it to 3 hours and 20 minutes and count down from that. By the way, the timer has an alarm to inform the user that the time has run out.',
            'And a stopwatch, in case you need to keep track of how long a task did take you. ',
            'The middle, or left part of the app (depending on the screen width, so let\'s call it the main part) is where you\'ll be using the always popular to-do list, which will most likely be the main tool.',
            'And when the work day is over, the main part can also be host to your very own workout routine. In the "Workout Calendar" tool to add up to 7 list elements to write down your workout routine. Working out after a day of sitting is what I like to do each day. So having easy and quick access to my weekly routine is important for me. The default view of this section is the notepad.',
            'Besides the left panel with buttons to the various sub-pages, we also have Breadcrumbs provided by Material UI. I know that a functionality to track your location on a website is overkill for something this small, but I wanted to integrate it for practice purposes.'
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
            'Jak wszystkie moje projekty, ten jest napisany w TypeScript i React.',
            'Użyłem Reduxa do zarządzania stanem, a wszystkie dane są zapisywane w pamięci lokalnej. Dzięki temu nie stracisz ustawionego minutnika, jeśli przypadkowo zamkniesz stronę.',
            'Do stylizacji użyłem v4 interfejsu Material UI.',
            'A funkcjonalność "drag and drop" listy rzeczy do zrobienia i kalendarza treningów korzysta z Sortablejs.'
        ],
        en: [
            'As all of my projects, this one is written in TypeScript and React.',
            'I\'ve used Redux for state management, and all data is being saved in local memory. So, you won\'t lose your set timer if you accidentally close the page.',
            'For styling, I\'ve used the v4 of Material UI.',
            'And the drag and drop functionality of the to-do list and the Workout Calendar uses Sortablejs.'
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
            'Oprócz tych oczywistych, takich jak',
            '- Zarządzanie stanem za pomocą Redux',
            '- Stylizacja interfejsu użytkownika za pomocą Material UI, w tym mój własny niestandardowy motyw',
            '- Tworzenie dynamicznych list, które mogą być edytowane przez użytkownika',
            '- Funkcja przeciągania i upuszczania za pośrednictwem biblioteki Sortablejs',
            '- Implementacja plików .mp3',
            '- Konfigurowanie plików i skryptów przekierowań pozwalających na prawidłowy routing na GitHub Pages',
            'Dowiedziałem się również o kompatybilności wersji.',
            'Deweloperzy sprawdzający ten projekt mogą się zastanawiać, dlaczego używam ReactRouter v5, gdy już istniała v6 w momencie, gdy zacząłem pisać aktualną wersję projektu.',
            'Jest to bardzo proste, zanim ReactRouter v6 został wydany, twórcy MUI wydali v5 swojej biblioteki. Ta nowa wersja ma wiele poważnych zmian i nie nauczyłem się jej i nadal używałem MUI v4. Problem polega na tym, że ReactRouter v6 ma pewne konflikty z MUI v4, szczególnie z Breadcrumbs. Mogłem więc albo nauczyć się MUI v5 i przepisać wszystkie style, albo po prostu użyć poprzedniej wersji ReactRouter. Tak, wybrałem łatwiejsze rozwiązanie. Ale wrócę do tego, gdy nauczę się wszystkich nowych zmian w MUI.'
        ],
        en: [
            'Besides the obvious ones like:',
            '- Redux state management', 
            '- Material UI styling, including my own custom theme',
            '- Creating dynamic lists that can be edited by the user',
            '- Drag and drop functionality via the Sortablejs library',
            '- Implementation of .mp3 files',
            '- Setting up files and redirection scripts allowing for proper routing on GitHub Pages',
            'I\'ve also learned about version compatibility.',
            'The developers checking this project might be wondering why am I using ReactRouter v5 when v6 was around at the time I\'ve started writing the current version of the project.',
            'It\'s actually very simple, before ReactRouter v6 was released, the creators of MUI released v5 of their library. This new version has many major changes and I haven\'t gotten around to learning it and kept using MUI v4. Problem is, that ReactRouter v6 has some conflicts with MUI v4, particularly with the Breadcrumbs. So, I could either learn MUI v5 and rewrite all the styles, or simply use the previous version of ReactRouter. Yes, I\'ve taken the easy way out. But I\'ll get back to it once I learn all the new changes in MUI.'
        ]
    }   

} as AnyObject<any>;
