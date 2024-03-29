import "./App.css";

function App() {
  let holder = [
    "Nejc Penko",
    "Nejc Penko",
    "Barbara Secko",
    "Katja Skafar",
    "Zala Likar",
    "Nejc Kete",
    "Vika Kralj",
    "David Bojanovic",
    "Nejc Kete",
    "Urska Herbst",
    "Mitja Godnič",
    "Barbara Bizjak",
    "Tilen Kusterle",
    "Matjaž Šuber",
    "Jera Rot",
    "Vida Kern",
    "Jan Holas",
    "Tadej Pavlič",
    "Neja in Jure H",
    "Nejc Saje",
    "Alen Kovac"
  ];
  let datum = [
    "2021-04-18",
    "2021-04-20",
    "2021-04-25",
    "2021-04-27",
    "2021-06-11",
    "2021-06-30",
    "2021-07-08",
    "2021-09-20",
    "2021-10-11",
    "2021-12-22",
    "2022-02-04",
    "2022-02-15",
    "2022-02-24",
    "2022-04-15",
    "2022-04-25",
    "2022-05-01",
    "2022-05-13",
    "2022-06-07",
    "2022-08-25",
    "2022-10-07",
    "2022-11-12"
  ];

  let desc = [
    "Za OnboardingJSON in vse ostale malenkosti, ki bi jih ostali brez dvoma pozabili. In zato, ker ne maraš exposureja. Zdej pa maš :)",
    "Druga zaporedna nagrada za rešen produkcijski problem, ki ga bi sam še vedno (najbrž neuspešno) poskušal reproducirat.",
    "Za neustrašnost in za pogum povedati stvari tako, kot čutiš.",
    "Za flawless hospitality service, ki se ga ne bi sramovala niti angleška kraljica. Za pokal, majkemi.",
    "Življenje vedno naloži vse, kar zmoremo nesti. Ti pa nosiš z nasmehom. Hvala.",
    "Hvala ti za vsa skakanja sem-ter-tja in focus-pulling ter nasmeške, ko ti že četrtič prekinem flow.",
    "Prideš, vzameš, pofuraš, zmagaš cel projekt. Z lahkoto, navkljub SOAP apijem, ki vrnejo še en XML.",
    "JFDI 4life",
    "Hvala za trud!",
    "Hvala za vse, kar nezavedno narediš zato, da nam je pot do uspeha tlakovana z najboljšo podlago in da so vsa vrata vedno odprta. In da ti ni težko še četrtič razložit conversion definitiona.",
    "Ker znaš narest čist hude tekste on-the-fly in se it gverila marketing.",
    "Hvala, ker pomagaš tudi ob najbolj čudnih urah, brez tebe bi se najbrž še vedno prijavljali v sistem.",
    "Hvala, ker se v vsako težavo poženeš z glavo naprej in vedno pomagaš z nasmehom.",
    "Hvala, da po osmih urah dela skočiš še na 404 adGroupe in rešiš vikend.",
    "Če že ne uspeva s klavirjem, zrihtaš najlepšo lučko na svetu. Hvala.",
    "Nič ne ostane neopaženo. Radi te imamo, pojemo, igramo.",
    "Thank you for always stepping up and saving the day. Even on Friday afternoon.",
   "Čestitke za najpogumnejši korak v življenju",
    "Čestitke za spremembo priimka in vse, kar pride zraven",
   "Brez tebe bomo še dolgo tavali v temi. Hvala ker si.",
    "Da najdeš buge tudi tam, kjer jih ni. In da se spomniš, kaj smo se dogovorili 2 leti nazaj."
  ];

  let CTAs = [
    "Propose your coworker for an award",
    "Who should be next on the wall?",
    "Help us pick the next deserving hero",
    "Vote for our next exposee",
    "Who do you admire? Tell the World",
  ];
  const randomElement = CTAs[Math.floor(Math.random() * CTAs.length)];
  const holderLast = holder[holder.length - 1];
  const descLast = desc[desc.length - 1];
  let datum1 = datum;
  datum1 = "";

  return (
    <div className="App">
      <div id="page-top">
        <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                This week's (until further notice) award goes to
              </h2>
              <h1 class="mx-auto my-0 text-uppercase">{holderLast}</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">{descLast}</h2>
              <a
                class="btn btn-primary js-scroll-trigger"
                href="mailto:matej@matejmeglic.com"
                target="_blank"
                rel="noreferrer"
              >
                {randomElement}
              </a>
            </div>
          </div>
        </header>

        <footer class="footer bg-black small text-center text-white-50">
          <div class="container">
            nekineki - an award pool proudly run by Matej Meglič{" "}
            <strike>gone in 60s</strike> done in 10min on 2021-05-18 xD
          </div>
          <br />
          <div class="container">
            Disclaimer: This page is not meant for mockery of any sorts but to
            wholeheartedly expose, worship and congratulate modern day heroes
            for a day. Thank you.{datum1}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
