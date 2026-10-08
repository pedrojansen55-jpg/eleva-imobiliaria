export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================
          CABEÇALHO
      ========================== */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          {/* LOGO */}
          <div className="flex flex-col">
            <img
              src="/logo-eleva.png"
              alt="Eleva Imobiliária"
              className="h-24 w-auto object-contain"
            />

            <p className="mt-1 text-xs text-slate-500">
  Não vendemos apenas imóveis, orientamos decisões patrimoniais seguras!
</p>

<p className="mt-2 text-xs font-semibold tracking-wide text-[#C37B49]">
  CRECI Nº 18556-J
</p>
          </div>

          {/* BOTÃO */}
          <a
            href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20conhecer%20as%20oportunidades%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-[#283765] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E2948] sm:block"
          >
            Fale conosco
          </a>

        </div>
      </header>


      {/* =========================
          HERO
      ========================== */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">

          {/* TEXTO */}
          <div>

            <p className="mb-5 text-sm font-bold uppercase tracking-widest text-[#283765]">
              Eleva Imobiliária • Recife - PE
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Encontre o imóvel certo para o seu próximo capítulo.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Não vendemos apenas imóveis. Orientamos decisões patrimoniais
              seguras para quem deseja comprar, vender ou investir em Recife
              e região.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20conhecer%20as%20oportunidades%20dispon%C3%ADveis."
                className="rounded-lg bg-[#283765] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#1E2948]"
              >
                Ver imóveis
              </a>

              <a
                href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-[#F5F1E8]"
              >
                Falar no WhatsApp
              </a>

            </div>
          </div>


          {/* CARD LATERAL */}
          <div className="relative">

            <div className="rounded-3xl bg-[#1E2948] p-8 shadow-2xl lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-[#C37B49]">
                Eleva Imobiliária
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                Patrimônio bem escolhido começa com uma boa decisão.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Atendimento próximo, análise cuidadosa e orientação para
                encontrar oportunidades que realmente façam sentido para você.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <p className="text-2xl font-bold text-white">
                    Recife
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    e região
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <p className="text-2xl font-bold text-white">
                    Eleva
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    seu patrimônio
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          IMÓVEIS
      ========================== */}
      <section id="imoveis" className="bg-[#F7F3EA] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-[#283765]">
              Oportunidades
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Oportunidades em destaque
            </h2>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
  <p className="text-lg leading-8 text-slate-600">
    Não encontrou o que procura? Fale conosco.
  </p>

  <a
    href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20conhecer%20as%20oportunidades%20dispon%C3%ADveis."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex rounded-lg bg-[#283765] px-6 py-3 font-semibold text-white transition hover:bg-[#1f2c50]"
  >
    Falar com a Eleva 
  </a>
</div>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="h-56 overflow-hidden">
  <img
    src="/caxanga/novacapa.png.jpeg"
    alt="Caxangá Life Club"
    className="h-full w-full object-cover"
  />
</div>

              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-wider text-[#283765]">
                  Empreendimento
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Caxangá Life Club
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
  2 e 3 quartos • Caxangá, Recife
  <br />
  A partir de R$ 400 mil
</p>

                <a
                 href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Caxang%C3%A1%20Life%20Club.%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-[#F5F1E8]"
                >
                  Quero conhecer o Caxangá
                </a>

              </div>
            </div>


            {/* CARD 2 */}
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="flex h-56 items-center justify-center bg-slate-100">
    <img
      src="/candeias/candeiascapa.png.jpeg"
      alt="Candeias Life Club"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="p-6">
    <p className="text-xs font-bold uppercase tracking-wider text-[#283765]">
      Empreendimento
    </p>

    <h3 className="mt-2 text-xl font-bold text-slate-900">
      Candeias Life Club
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      2 e 3 quartos com suíte e varanda.
      <br />
      Candeias, Jaboatão dos Guararapes
      <br />
      Renda familiar a partir de R$ 5.500.
    </p>

    <a
      href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Candeias%20Life%20Club.%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 block rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
    >
      Quero conhecer o Candeias
    </a>
  </div>
</div>


            {/* CARD 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="h-56 overflow-hidden">
  <img
    src="/acacias/capamoral.png"
    alt="Bosque das Acácias"
    className="h-full w-full object-cover"
  />
</div>

              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-wider text-[#283765]">
                  EMPREENDIMENTO
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Bosque das Acácias
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
  2 quartos com suíte reversível e varanda.
</p>

<p className="text-sm leading-6 text-slate-500">
  Dois Carneiros • Jaboatão dos Guararapes
</p>

                <a
                  href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Bosque%20das%20Ac%C3%A1cias.%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-[#F5F1E8]"
                >
                  Quero conhecer o Bosque das Acácias
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================
    SOBRE A ELEVA
===================== */}
<section className="bg-white py-20 lg:py-28">
  <div className="mx-auto grid max-w-7xl items-center gap-14 rounded-3xl bg-[#F5F1E8] p-8 px-6 lg:grid-cols-2 lg:p-10">

    {/* FOTO */}
    <div className="relative">
      

      <img
        src="/elevaimob_mulher.jpeg"
        alt="Andreza Pinheiro, Diretora Executiva da Eleva Imobiliária"
      className="relative h-auto w-full rounded-3xl object-cover"
      />
    </div>

    {/* TEXTO */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#283765]">
        Sobre a Eleva
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#C37B49]">
        CRECI Nº 18556-J
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Experiência que entende de imóveis.
        <span className="block text-[#283765]">
          Atendimento que entende de pessoas.
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        A Eleva Imobiliária nasceu com o propósito de tornar as decisões
        imobiliárias mais seguras, transparentes e humanas.
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        À frente da Eleva está <strong className="text-slate-900">Andreza Pinheiro</strong>,
        Diretora Executiva, profissional com mais de 15 anos de experiência
        no mercado imobiliário. Ao longo de sua trajetória, atuou em grandes
        empresas e construtoras, construindo uma visão ampla sobre o mercado
        e, principalmente, sobre as pessoas que fazem parte dele.
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        Hoje, esse conhecimento se transforma em um atendimento próximo,
        ético e personalizado, buscando entender cada cliente e orientar
        decisões que façam sentido para seus objetivos pessoais e patrimoniais.
      </p>

      {/* PERFIL */}
      <div className="mt-8 border-l-2 border-[#C37B49] pl-5">
        <p className="font-bold text-slate-900">
          Andreza Pinheiro
        </p>

        <p className="mt-1 text-sm text-slate-600">
          Diretora Executiva • CRECI Nº 18556-J
        </p>
      </div>
    </div>
  </div>

  {/* PILARES */}
<div className="mx-auto mt-16 grid max-w-7xl gap-10 rounded-3xl bg-[#F5F1E8] p-8 px-6 md:grid-cols-3 lg:p-10">

  <div className="border-t-2 border-[#C37B49] pt-6">
    <div className="flex items-start justify-between">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C37B49]">
        Experiência
      </p>

      <span className="text-4xl font-light text-[#283765]/20">
        01
      </span>
    </div>

    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
      Conhecimento de mercado
    </h3>

    <p className="mt-4 leading-7 text-slate-600">
      Mais de 15 anos de atuação no mercado imobiliário,
      trazendo experiência e segurança para cada negociação.
    </p>
  </div>

  <div className="border-t-2 border-[#C37B49] pt-6">
    <div className="flex items-start justify-between">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C37B49]">
        Transparência
      </p>

      <span className="text-4xl font-light text-[#283765]/20">
        02
      </span>
    </div>

    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
      Atendimento próximo
    </h3>

    <p className="mt-4 leading-7 text-slate-600">
      Comunicação clara, ética e personalizada em todas
      as etapas da jornada imobiliária.
    </p>
  </div>

  <div className="border-t-2 border-[#C37B49] pt-6">
    <div className="flex items-start justify-between">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C37B49]">
        Patrimônio
      </p>

      <span className="text-4xl font-light text-[#283765]/20">
        03
      </span>
    </div>

    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
      Decisões mais seguras
    </h3>

    <p className="mt-4 leading-7 text-slate-600">
      Orientação para que cada cliente encontre soluções
      alinhadas aos seus objetivos pessoais e patrimoniais.
    </p>
  </div>

</div>
</section>


      {/* =========================
          CTA WHATSAPP
      ========================== */}
      <section className="bg-[#1E2948] py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-[#C37B49]">
            Vamos conversar
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Está procurando um imóvel?
          </h2>

         <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
  Conte o que você procura e deixe a Eleva encontrar o caminho certo para você.
  Atendimento próximo, orientação segura e oportunidades alinhadas ao seu momento.
</p>

          <a
  href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20conversar%20sobre%20um%20im%C3%B3vel.%20Pode%20me%20ajudar%20a%20encontrar%20uma%20op%C3%A7%C3%A3o%20que%20fa%C3%A7a%20sentido%20para%20mim%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block rounded-lg bg-[#C37B49] px-8 py-4 font-semibold text-white transition hover:bg-[#A9653B]"
>
  Quero falar com a Eleva
</a>

        </div>

      </section>


      {/* =========================
          CONTATO
      ========================== */}
     <section className="bg-[#f5f1e8] py-20">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mb-12 max-w-xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C37B49]">
        Fale com a Eleva
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Vamos encontrar o caminho certo para você.
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Entre em contato com a Eleva e conte o que você procura.
        Nossa equipe está pronta para orientar sua próxima decisão.
      </p><a
  href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20conhecer%20as%20oportunidades%20dispon%C3%ADveis."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex rounded-lg bg-[#283765] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2d54]"
>
  Falar com a Eleva pelo WhatsApp
</a>
    </div>

    <div className="grid gap-10 md:grid-cols-3">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#283765]">
                WhatsApp
              </p>

              <a
                href="https://wa.me/5581994897832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eleva%20Imobili%C3%A1ria%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-slate-900 hover:text-[#283765]"
              >
                (81) 99489-7832
              </a>
            </div>


            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#283765]">
                Instagram
              </p>

              <a
                href="https://www.instagram.com/elevaimob/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-slate-900 hover:text-[#283765]"
              >
                @elevaimob
              </a>
            </div>


            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#283765]">
                Endereço
              </p>

             <a
  href="https://www.google.com/maps/search/?api=1&query=R.%20Gen.%20Joaquim%20In%C3%A1cio%2C%20830%2C%20Ilha%20do%20Leite%2C%20Recife%20-%20PE%2C%2050070-270"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 block text-lg font-semibold text-slate-900 hover:text-[#283765]"
>
  Ilha do Leite
</a>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                R. Gen. Joaquim Inácio, 830
                <br />
                Recife - PE, 50070-270
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          RODAPÉ
      ========================== */}
      <footer className="border-t border-slate-800 bg-[#111827] py-10 text-center">

        <div className="mx-auto max-w-7xl px-6">

          <img
            src="/logo-eleva.png"
            alt="Eleva Imobiliária"
            className="mx-auto h-16 w-auto brightness-0 invert"
          />

          <p className="mt-4 text-sm text-slate-400">
            Não vendemos apenas imóveis, orientamos decisões patrimoniais seguras!
          </p>

          <div className="mt-6 text-sm text-slate-400">
  <p>
    R. Gen. Joaquim Inácio, 830 • Ilha do Leite • Recife - PE
  </p>

  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#C37B49]">
    CRECI Nº 18556-J
  </p>
</div>

<p className="mt-6 text-xs text-slate-600">
  © 2023 Eleva Imobiliária • Todos os direitos reservados.
</p>

          

        </div>

      </footer>


      {/* =========================
          BOTÃO WHATSAPP FIXO
      ========================== */}
      <a
        href="https://wa.me/5581994897832"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Eleva pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#283765] text-white shadow-xl transition hover:scale-105 hover:bg-[#1E2948]"
      >
        <span className="text-xl font-bold">W</span>
      </a>

    </main>
  );
}