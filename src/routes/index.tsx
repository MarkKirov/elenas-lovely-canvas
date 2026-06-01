import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logoAsset from "@/assets/to-logo-full-light.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Бизнес-школа Елены Кремневой — пересборка бизнес-модели" },
      { name: "description", content: "Практическая бизнес-школа в Липецке. Найдите скрытые источники дохода и вырастите без круглосуточной пахоты." },
      { property: "og:title", content: "Бизнес-школа Елены Кремневой" },
      { property: "og:description", content: "Пересборка бизнес-модели для липецкого собственника." },
    ],
  }),
  component: Index,
});

const comparison = [
  {
    problem: "Оторванность от реальности региона",
    mba: "Дают глобальные масштабные решения и кейсы корпораций, которые не приземляются в Липецке.",
    us: "Берём мировые тренды и переводим их в реальность региона — конкретно под вашу отрасль и рынок.",
  },
  {
    problem: "Знания без сборки",
    mba: "Сгружают гору запчастей: маркетинг, финансы, HR. Собирать в гараже вы должны сами.",
    us: "IKEA для вашего бизнеса: на консилиумах собираем модель руками, шаг за шагом.",
  },
  {
    problem: "Психологический блок на продажи",
    mba: "Стандартные скрипты и схемы воронки. Не работают, если у собственника страх перед продажами.",
    us: "Снимаем ощущение «впаривания» у собственника и команды. Что, как и кому продавать без стресса.",
  },
  {
    problem: "Смертельные привычки в управлении",
    mba: "Обучение не лезет в старые привычки: дробление на 10 ИП, налоговые риски, «пронесёт».",
    us: "Разбираем управленческие паттерны и пересобираем под управляемую систему.",
  },
  {
    problem: "Скрытые финансовые дыры",
    mba: "Учат абстрактному бухучёту. Собственник годами живёт в иллюзии роста из-за оборотных денег.",
    us: "Заставляем пересчитать реальные цифры. Подсвечиваем и ликвидируем кассовый разрыв.",
  },
];

const programs = [
  { tag: "Программа школы", title: "Сборка бизнес-модели", desc: "Полный трек для собственников: клиент, деньги, команда, процессы и защита итоговой модели внедрения." },
  { tag: "Практический тренинг", title: "От хаоса к потоку", desc: "Управление проектами без авралов: сроки, бюджет и качество в одном контуре." },
  { tag: "Интенсив", title: "От сигналов к действиям", desc: "Как замечать рыночные сигналы раньше и быстро превращать их в решения." },
  { tag: "Интенсив", title: "Путешествие в ботинках клиента", desc: "Customer Journey и точки роста конверсии по реальному пути клиента." },
  { tag: "Интенсив", title: "Синхронизация личности и бизнеса", desc: "Бизнес-психология собственника: устойчивость, фокус и качество решений." },
  { tag: "Интенсив", title: "Как быть быстрее конкурента без найма людей", desc: "Прикладные ИИ-сценарии автоматизации для ускорения ключевых процессов." },
];

const outcomesMain = [
  "Полный аудит бизнеса",
  "Пересборка бизнес-модели",
  "Оптимальный способ роста",
  "Унисон бизнеса и личности",
  "Ликвидация кассовых разрывов",
  "Синхронизация с трендами рынка",
  "Связи и контакты",
];
const outcomesMid = [
  "Защита уязвимых мест компании",
  "Чёткий жизненный трек",
  "Понимание сильных и слабых сторон",
  "Больше денег меньшими усилиями",
  "Конец предпринимательского одиночества",
  "Кайф от управления вместо выгорания",
  "Сильное развивающее коммьюнити",
];
const outcomesTags = [
  "Без операционного хаоса",
  "Внедрение, а не теория",
  "Точные цифры вместо ощущений",
  "Региональная конъюнктура",
  "Команда без саботажа",
  "Уверенность в продажах и найме",
  "Усиление сильного",
  "Жёсткий оффлайн-поток",
];

const fitPoints = [
  { title: "Устали от бесполезного онлайна", desc: "Для очередных курсов в записи нужно слишком много самоорганизации, а времени физически нет. Нужен жёсткий, живой оффлайн-поток." },
  { title: "Увязли в операционной слепоте", desc: "Постоянный бег по кругу и тушение пожаров, пока система из нескольких точек или ИП превращается в неуправляемый хаос." },
  { title: "Чувствуете внутренний саботаж", desc: "Жёсткий конфликт бизнеса и личности: прокрастинируете, выгораете, а команда заражается вашим саботажем." },
  { title: "Льёте деньги в рекламу впустую", desc: "Раздуваете бюджеты, нанимаете маркетологов, но отдел продаж не дожимает заявки — деньги сгорают." },
  { title: "Не видите реальных цифр", desc: "Кажется, что компания растёт, потому что есть поток оборотных денег. На деле — скрытый кассовый разрыв." },
  { title: "Масштабируете хаос", desc: "Пытаетесь расти, не настроив систему. Любое масштабирование умножает проблемы, а не выручку." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Quiz />
      <Problem />
      <Comparison />
      <Teachers />
      <Programs />
      <Bridge />
      <Outcomes />
      <Fit />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-primary/30 bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      {children}
    </span>
  );
}

function CtaButton({ children, variant = "solid" }: { children: React.ReactNode; variant?: "solid" | "ghost" }) {
  const base = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors";
  if (variant === "ghost") {
    return <button className={`${base} border border-primary/40 text-primary hover:bg-secondary`}>{children}<ArrowRight className="h-4 w-4" /></button>;
  }
  return <button className={`${base} bg-primary text-primary-foreground hover:bg-primary/90`}>{children}<ArrowRight className="h-4 w-4" /></button>;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <Container className="grid h-20 grid-cols-[auto_1fr] items-center gap-6 md:grid-cols-[180px_1fr_180px]">
        <img src={logoAsset.url} alt="Тактика основателя" className="h-10 w-auto" />
        <div className="hidden text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted-foreground md:block">
          <div>Соединяем мировые бизнес-практики</div>
          <div>с реальностью Липецка и личностью собственника</div>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Практическая бизнес-школа</Eyebrow>
          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-primary md:text-7xl">
            Пересобери свою<br />бизнес-модель
          </h1>
          <p className="mt-6 text-xl font-semibold text-foreground/80 md:text-2xl">
            …чтобы она работала на тебя, а не ты на неё.
          </p>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Как Липецкому предпринимателю найти скрытые источники дохода и вырасти
            без круглосуточной пахоты?
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton>Записаться на диагностику</CtaButton>
            <CtaButton variant="ghost">Смотреть программы</CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Quiz() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <Container className="py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Какой вы собственник и где ваши невидимые источники дохода?
          </h2>
          <p className="mt-8 text-lg text-muted-foreground md:text-xl">
            Нажмите на кнопку ниже, чтобы понять, какой бизнес подходит под вашу личность,
            почему буксуют продажи, как перестать саботировать собственный масштаб и навсегда
            избавиться от предпринимательского одиночества.
          </p>
          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground">
            Пройти диагностику <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-12 text-lg text-foreground md:text-xl">
            Сразу после теста вы получаете бронь на бесплатный подбор пошаговой бизнес-стратегии
            от преподавателей и практиков нашей школы, разработанной строго под вашу личность,
            возможности и конъюнктуру региона. Эта стратегия выведет вас на новый уровень и
            решит ключевые боли, сжирающие ресурсы компании прямо сейчас:
          </p>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24">
      <Container>
        <Eyebrow>Подход</Eyebrow>
        <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Большинство бизнес-школ дают ценные знания,<br />
          <span className="text-primary">но выдают их как запчасти от автомобиля.</span>
        </h2>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
          Вам сгружают гору классных деталей — маркетинг, финансы, HR — а дальше
          вы должны сами как-то собрать всё это в гараже и понять, куда и как применять.
          Несколько лет назад мы с коллегами из «Сколково» увидели это и собрали другую школу.
        </p>
      </Container>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-secondary/40 py-24">
      <Container>
        <Eyebrow>Сравнение</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          MBA и онлайн-курсы vs школа Кремневой
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] gap-px bg-border text-xs font-bold uppercase tracking-[0.14em] md:grid">
            <div className="bg-card px-6 py-4 text-foreground/60">Критерий</div>
            <div className="bg-card px-6 py-4 text-foreground/60">Стандарт MBA / онлайн-курсы</div>
            <div className="bg-card px-6 py-4 text-primary">Школа Кремневой</div>
          </div>
          <div className="divide-y divide-border">
            {comparison.map((row) => (
              <div key={row.problem} className="grid gap-6 p-6 md:grid-cols-[1.1fr_1.4fr_1.4fr] md:gap-px md:bg-border md:p-0">
                <div className="md:bg-card md:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground md:hidden">Критерий</p>
                  <p className="mt-1 text-lg font-bold text-foreground md:mt-0">{row.problem}</p>
                </div>
                <div className="md:bg-card md:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground md:hidden">MBA / онлайн</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:mt-0">{row.mba}</p>
                </div>
                <div className="rounded-2xl bg-secondary p-5 md:rounded-none md:bg-card md:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary md:hidden">Школа Кремневой</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground md:mt-0">{row.us}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base text-muted-foreground">
          Если узнали свои проблемы — запишитесь на составление бесплатной бизнес-стратегии.
          Это ни к чему не обязывает, и мы ничего не будем продавать.
        </p>
        <div className="mt-6"><CtaButton>Получить стратегию</CtaButton></div>
      </Container>
    </section>
  );
}

function Teachers() {
  const items = [
    { name: "Елена Кремнева", role: "Основатель школы", note: "Бизнес-практик, методолог пересборки моделей." },
    { name: "Партнёр-практик", role: "Оборот >1 млрд ₽", note: "Региональная конъюнктура, продажи, найм." },
    { name: "Партнёр-практик", role: "Финансы и кассовые разрывы", note: "Подсветка реальных цифр компании." },
    { name: "Партнёр-практик", role: "Операционка и процессы", note: "От хаоса к управляемой системе." },
  ];
  return (
    <section className="py-24">
      <Container>
        <Eyebrow>Кто поведёт</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Опытные водители с бизнесом, оборот которых переваливает за миллиарды
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Жёсткие бизнес-практики, каждый — признанный спец в своей среде.
          Знают изнутри всю региональную конъюнктуру и не работают по мёртвым учебникам.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <div key={i} className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-accent" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{p.role}</p>
              <p className="mt-2 text-xl font-bold leading-tight">{p.name}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Programs() {
  return (
    <section className="bg-secondary/40 py-24">
      <Container>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <Eyebrow>Каталог школы</Eyebrow>
              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">Программы</h2>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                Все форматы школы собраны в одном месте: программа «Сборка бизнес-модели»
                и прикладные интенсивы. Выберите направление и перейдите на отдельную страницу
                с полной структурой и результатами.
              </p>
              <div className="mt-8"><CtaButton>Записаться на диагностику</CtaButton></div>
            </div>
            <div className="rounded-2xl bg-secondary p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Форматы</p>
              <p className="mt-3 text-2xl font-bold text-foreground">6 программ и интенсивов</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Основной путь — через диагностику: подбираем формат под стадию бизнеса
                и задачу собственника.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Каталог</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Выберите направление</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <article key={p.title} className="flex flex-col rounded-2xl bg-muted/60 p-6 transition-colors hover:bg-muted">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</p>
                <h4 className="mt-3 text-lg font-bold leading-snug text-foreground">{p.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary hover:bg-secondary">
                  Подробнее <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Bridge() {
  return (
    <section className="py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-accent" />
        <div>
          <Eyebrow>Экран-мост</Eyebrow>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Знакомо ощущение, когда вы вливаете деньги в рекламу, а продажи стоят на месте?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Нанимаете маркетологов, раздуваете бюджеты, но у вас банально не настроен отдел
            продаж, который должен вовремя перезванивать и дожимать заявки. Деньги сгорают.
            И так во всём: вы пытаетесь масштабировать хаос, вместо того чтобы сначала настроить систему.
          </p>
          <p className="mt-6 rounded-2xl border-l-4 border-primary bg-secondary p-5 text-base font-semibold text-foreground">
            По нашей статистике, 8 из 10 липецких предпринимателей прямо сейчас находятся
            в кассовом разрыве — но узнают об этом только на нашем консилиуме.
          </p>
          <div className="mt-8"><CtaButton>Перестать тушить пожары</CtaButton></div>
        </div>
      </Container>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <Container>
        <Eyebrow>Результат</Eyebrow>
        <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          С чем собственник выходит из бизнес-школы Елены Кремневой
        </h2>

        <div className="mt-14 flex flex-wrap gap-3">
          {outcomesMain.map((t) => (
            <span key={t} className="rounded-full bg-primary-foreground px-5 py-3 text-base font-bold text-primary md:text-lg">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {outcomesMid.map((t) => (
            <span key={t} className="rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {outcomesTags.map((t) => (
            <span key={t} className="rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs uppercase tracking-[0.1em] opacity-90">
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Fit() {
  return (
    <section className="py-24">
      <Container>
        <Eyebrow>Кому подойдёт</Eyebrow>
        <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
          Приходите на аудит бизнес-модели, если узнаёте себя хотя бы в 3 пунктах
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fitPoints.map((p, i) => (
            <div key={p.title} className="rounded-3xl border border-border bg-card p-7">
              <div className="text-xs font-black tracking-[0.14em] text-primary">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-secondary p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <Eyebrow>Бесплатная стратегия</Eyebrow>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-primary md:text-6xl">
                Узнайте, подойдёт ли вам обучение —<br />и заберите бизнес-стратегию.
              </h2>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Преподаватели школы берут на аудит всего 4 компании в неделю.
                Осталось 1 свободное место. Записаться можно прямо сейчас — без обязательств.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <CtaButton>Записаться на аудит</CtaButton>
              <CtaButton variant="ghost">Позвонить нам</CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© Бизнес-школа Елены Кремневой · Липецк</p>
        <p>Прототип. Контент будет уточняться.</p>
      </Container>
    </footer>
  );
}
