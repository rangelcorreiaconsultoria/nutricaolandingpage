export default function ContactSection() {
  return (
    <section id="inscricao" className="md:py-28 py-20 bg-cyan-light border-t border-line">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="flex-1">
            <p className="section-label mb-6">Inscrição</p>
            <h2>
              Meça com método. <br />
              <span className="underline-cyan">Mostre o resultado.</span>
            </h2>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=5582982150582&text=Ol%C3%A1%2C+quero+me+inscrever+no+curso+Antropometria+na+Pr%C3%A1tica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            Quero me inscrever
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
