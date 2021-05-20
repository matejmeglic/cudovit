import "./App.css";

function App() {
  let holder = ["Nejc Penko", "Nejc Penko"];

  let desc = [
    "Za OnboardingJSON in vse ostale malenkosti, ki bi jih ostali brez dvoma pozabili. In zato, ker ne maraš exposureja. Zdej pa maš :)",
    "Druga zaporedna nagrada za rešen produkcijski problem, ki ga bi sam še vedno (najbrž neuspešno) poskušal reproducirat.",
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
            for a day. Thank you.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
