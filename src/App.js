import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                This week's (until further notice) award goes to
              </h2>
              <h1 class="mx-auto my-0 text-uppercase">Nejc Penko</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                Za OnboardingJSON in vse ostale malenkosti, ki bi jih ostali
                brez dvoma pozabili. In zato, ker ne maraš exposureja. Zdej pa
                maš :)
              </h2>
              <a
                class="btn btn-primary js-scroll-trigger"
                href="mailto:matej@matejmeglic.com"
                target="_blank"
                rel="noreferrer"
              >
                Propose your coworker for award
              </a>
            </div>
          </div>
        </header>

        <footer class="footer bg-black small text-center text-white-50">
          <div class="container">
            nekineki - an award pool proudly run by Matej Meglič{" "}
            <strike>gone in 60s</strike> done in 10min xD
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
