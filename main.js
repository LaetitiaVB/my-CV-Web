//1. resposta PM

//const PM = document.getElementById('IT-PM');
//const information = document.getElementById('information')
//PM.addEventListener ('click', (event) => {information.innerHTML="Function executed in Portuguese, English and French. Managing Nearshore IT projects for different clients (Healthcare software, WebApp), executing functional tests, working in virtual and multilingual teams (EN, PT, FR). Analyzing KPIs and reporting to PMO. Scrum coaching and ceremonies coordination."})


//2. resposta Horto

//const Horto = document.getElementById('quality');
//Horto.addEventListener ('click', (event) => {information.innerHTML="Function totally executed in Portuguese. Managing quality and legal compliance (ISO 9001, 14001 & 18001/45001), by continuously improving processes and procedures, running internal and external audits and analyzing data. Reporting KPIs and non-conformities, and identifying improvements, directly to the Direction."})


//3. resposta Galp

//const Galp = document.getElementById('galp');
//Galp.addEventListener ('click', (event) => {information.innerHTML="Function totally executed in Portuguese (Professional Internship). Creating and improving procedures and work instructions to match with current work practices. First professional experience executed in a national company and fully in Portuguese."})


//4. resposta jungle

//const Jungle = document.getElementById('jungle');
//Jungle.addEventListener ('click', (event) => {information.innerHTML="Managing quality, HSE and legal compliance and preparing to GLOBALG.A.P. certification. Collecting and analysing data, reporting trials results to the Direction and Master Grower. Managing stock, orders and suppliers; participating in growing trials and production planning. Involved in software procurement for production and traceability management."})


//5. resposta ips

// const IPS = document.getElementById('ips');
// IPS.addEventListener ('click', (event) => {information.innerHTML="Managing autonomously various projects on the client site for Lotus Bakeries (Food industry) and GlaxoSmithKline (Pharmaceutical Industry), reporting directly to the client. Managing suppliers procurement, planning and budget, changes requests."})


//button interests

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
