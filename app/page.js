import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "Edge AI Lighting System",
      description:
        "Sensorbasert lysstyring med BLE og DALI. Fokus på målinger, regulering og samspill mellom hardware og software.",
      tech: "C++ · Arduino · BLE · DALI · Sensorikk",
      link: "https://github.com",
    },

    {
      title: "Keypad system (Arduino)",
      description:
        "Inputsystem med keypad for brukerinteraksjon. Demonstrerer håndtering av input, logikk og tilstandsstyring.",
      tech: "Arduino · C++ · Input system",
      link: "https://github.com/Aasgaardian95/Datateknikk_H25/tree/main/Example_projects/Project_keyPad",
    },

    {
      title: "Keypad + LCD interface",
      description:
        "Utvidet keypad-løsning med LCD-display. Viser hvordan input kan visualiseres og håndteres i et embedded system.",
      tech: "Arduino · LCD · Embedded UI",
      link: "https://github.com/Aasgaardian95/Datateknikk_H25/tree/main/Example_projects/Project_keyPad_LCD",
    },

    {
      title: "RFID reader system",
      description:
        "RFID-basert identifikasjonssystem. Leser og tolker RFID-signaler og håndterer tilgang/logikk.",
      tech: "Arduino · RFID · Sensor system",
      link: "https://github.com/Aasgaardian95/Datateknikk_H25/tree/main/Example_projects/Project_RFIDreader",
    },

    {
      title: "LDR lysmåling (analog input)",
      description:
        "Bruk av LDR for å lese lysnivå via analog input. Viser grunnleggende signalbehandling og sensorbruk.",
      tech: "Arduino · Analog input · Sensorikk",
      link: "https://github.com/Aasgaardian95/Datateknikk_H25/tree/main/Example_projects/Project_LCD_analogReadLDR",
    },
  ];

  const skills = [
    "C++",
    "Java",
    "Python",
    "SQL",
    "Arduino",
    "BLE",
    "DALI",
    "MySQL",
    "Javalin",
    "Git",
    "Embedded systems",
    "Nettverk",
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <section className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
            Portfolio · CV
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Marius Aasgaard
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Dataingeniørstudent med interesse for embedded systems, backend,
            sensorikk og praktisk systemutvikling. Jeg liker å jobbe tett på
            både teknologi og problemløsning, fra kode og datamodeller til
            hardware, målinger og systemforståelse.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
            >
              Se prosjekter
            </a>
            <a
              href="#experience"
              className="rounded-lg border border-gray-700 px-5 py-3 transition hover:border-gray-500"
            >
              Erfaring
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-gray-700 px-5 py-3 transition hover:border-gray-500"
            >
              Kontakt
            </a>
          </div>
        </section>

        {/* Om meg */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">Om meg</h2>
          <div className="max-w-3xl space-y-4 text-gray-400 leading-relaxed">
            <p>
              Jeg studerer dataingeniør og trives best med oppgaver der teori og
              praksis møtes. Jeg er spesielt interessert i systemer som
              kombinerer programvare og fysisk teknologi, for eksempel embedded
              utvikling, sensorer, kommunikasjon og styringslogikk.
            </p>
            <p>
              I tillegg liker jeg strukturert arbeid med backend, databaser og
              teknisk problemløsning. Målet mitt er å utvikle robuste løsninger
              og samtidig forstå hvorfor de fungerer, ikke bare få dem til å
              kjøre.
            </p>
          </div>
        </section>

        {/* Prosjekter */}
        <section id="projects" className="mb-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Prosjekter</h2>
            <p className="mt-2 max-w-2xl text-gray-400">
              Et utvalg prosjekter og fagområder jeg har jobbet med gjennom
              studier og praktisk erfaring.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Erfaring */}
        <section id="experience" className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">Erfaring</h2>

          <div className="space-y-6">
            {/* NxTech */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  Embedded Software Engineer Intern · NxTech
                </h3>
                <p className="text-sm text-gray-500">Januar 2026 - Mai 2026</p>
              </div>

              <p className="mb-3 text-gray-400">
                Arbeid med sensorbasert lysstyring og trådløs kommunikasjon i
                intelligente lyssystemer. Fokus på målinger, regulering, testing
                og samspill mellom software og hardware.
              </p>

              <p className="text-sm text-gray-500">
                C++ · Embedded · BLE · Sensorikk · Analyse
              </p>
            </div>

            {/* Sykehuset Østfold */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  Vernepleier · Sykehuset Østfold
                </h3>
                <p className="text-sm text-gray-500">
                  Oktober 2017 – fortsatt ansatt
                </p>
              </div>

              <p className="mb-3 text-gray-400">
                Erfaring fra sikkerhetsseksjon og psykiatrisk arbeid med ansvar
                for pasientoppfølging, strukturert arbeid og håndtering av
                krevende situasjoner.
              </p>

              <p className="text-sm text-gray-500">
                Struktur · Ansvar · Samarbeid · Beslutningstaking
              </p>
            </div>
          </div>
        </section>

        {/* Utdanning */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">Utdanning</h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  Dataingeniør · Høgskolen i Østfold
                </h3>
                <p className="text-sm text-gray-500">2024 – 2027</p>
              </div>

              <p className="mb-3 text-gray-400">
                Bachelorstudium med fokus på programmering, systemutvikling,
                nettverk og cyber-fysiske systemer.
              </p>

              <p className="text-sm text-gray-500">
                Python · Systemutvikling · Nettverk · Embedded
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  Bachelor i vernepleie · Høgskolen i Østfold
                </h3>
                <p className="text-sm text-gray-500">2017 – 2020</p>
              </div>

              <p className="text-gray-400">
                Helsefaglig utdanning med fokus på strukturert arbeid,
                relasjonskompetanse og ansvar i krevende situasjoner.
              </p>
            </div>
          </div>
        </section>

        {/* Kompetanse */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">Kompetanse</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section id="contact" className="pb-8">
          <h2 className="mb-6 text-2xl font-semibold">Kontakt</h2>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="mb-4 max-w-2xl text-gray-400 leading-relaxed">
              Ta gjerne kontakt dersom du ønsker å vite mer om prosjektene mine,
              praksiserfaringen min eller hva jeg er interessert i å jobbe med
              videre.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>
                E-post:{" "}
                <a
                  href="mailto:marius@mariusaasgaard.no"
                  className="underline underline-offset-4"
                >
                  aasgaardmarius@gmail.com
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Aasgaardian95/Datateknikk_H25"
                  className="underline underline-offset-4"
                >
                  github.com/Aasgaardian95/Datateknikk_H25
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/mariusaasgaard"
                  className="underline underline-offset-4"
                >
                  linkedin.com/in/mariusaasgaard
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
