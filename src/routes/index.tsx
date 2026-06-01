import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import logoAsset from "@/assets/to-logo-full-light.svg.asset.json";
import carPartsAsset from "@/assets/car-frame.jpg.asset.json";
import elenaAsset from "@/assets/elena-kremneva.jpg.asset.json";
import olegAsset from "@/assets/oleg-davidovich.png.asset.json";
import larisaAsset from "@/assets/larisa-kiseleva.png.asset.json";
import aleksandraAsset from "@/assets/aleksandra-grechushenko.png.asset.json";
import alekseyAsset from "@/assets/aleksey-farafonov.png.asset.json";

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
    mba: "Вам дают масштабные кейсы международных гигантов вроде IKEA или Леруа Мерлен. Но бизнес-практики мировых корпораций абсолютно не применимы для розницы или производства в Липецке.",
    usTitle: "Полная адаптация под регион.",
    us: "Мы берём фундаментальную мировую практику и перекладываем её строго на суровую конъюнктуру вашего города, учитывая местный рынок, ресурсы и логистику.",
  },
  {
    problem: "Слепота к личной стратегии",
    mba: "Вас учат просто «растить показатели». Никто не проверяет, подходит ли этот бизнес вам лично. Предприниматель годами выгорает и саботирует процессы, не понимая причин.",
    usTitle: "Работа с бизнес-психологом и коучем.",
    us: "Мы проверяем бизнес-модель на синхронность с вашей личностью. Если проект вам претит, вовремя найдём скрытый саботаж и перестроим формат так, чтобы вы кайфовали от управления.",
  },
  {
    problem: "Игнорирование трендов рынка",
    mba: "Вам дают устаревшие академические учебники. Собственник думает, что бизнес не растёт, потому что «в России сейчас тяжело», и упускает реальные изменения в законах и налогах.",
    usTitle: "Внедрение актуальных трендов.",
    us: "Мы показываем, куда реально катится рынок прямо сейчас, и внедряем новые тренды работы в вашу модель, чтобы вы не хватались за всё подряд, а били в одну цель.",
  },
  {
    problem: "Психологический блок на продажи",
    mba: "Вам дают стандартные скрипты и схемы воронки продаж. Но они не работают, если у самого собственника или его команды есть внутренний дискомфорт и страх перед продажами.",
    usTitle: "Проработка барьеров.",
    us: "Мы помогаем собственнику и ключевой команде избавиться от ощущения «впаривания», убираем дискомфорт и даём чёткое понимание: что, как и кому продавать без стресса.",
  },
  {
    problem: "Смертельные привычки в управлении",
    mba: "Обучение не лезет в ваши старые привычки. Предприниматель по привычке дробит компанию на 10 ИП, плодит дикие налоговые риски и думает: «Я так 100 раз делал, пронесёт». Система становится неуправляемой.",
    usTitle: "Защита от юридических и налоговых мин.",
    us: "Мы жёстко вскрываем старые, опасные привычки управления, которые морально умерли. Пересобираем структуру компании, защищая уязвимые места до того, как прилетит проверка.",
  },
  {
    problem: "Скрытые финансовые дыры",
    mba: "Вас учат абстрактному бухучёту. При этом собственник может годами жить в иллюзии, что компания растёт, просто потому что есть постоянный поток оборотных денег.",
    usTitle: "Поиск невидимых кассовых разрывов.",
    us: "На консилиумах мы заставляем вас полностью пересчитать реальные цифры. Мы подсветим и ликвидируем кассовый разрыв до того, как он физически разрушит и бизнес, и вас.",
  },
];

type ProgramDetail = {
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
  meta: string[];
  host?: { name: string; role: string; img: string; bullets: string[] };
  outcomes: string[];
  modules: { label: string; title: string; sub?: string }[];
};

const programs: ProgramDetail[] = [
  {
    tag: "Программа школы",
    title: "Сборка бизнес-модели",
    desc: "Формат для собственников, которые хотят собрать управляемую модель роста, снять перегруз с ручного управления и перейти к системным решениям в деньгах, команде и процессах.",
    highlights: [
      "Собираете целостную модель бизнеса под ваш этап роста.",
      "Проходите 5 модулей с внедрением решений между сессиями.",
      "Участие подтверждается после диагностики: берём не всех.",
    ],
    meta: ["Старт: 11 сентября 2026", "15 недель", "5 модулей · офлайн"],
    outcomes: [
      "Формулируете целевую модель роста и приоритеты собственника.",
      "Убираете хаос в управлении деньгами, командой и проектами.",
      "Синхронизируете команду вокруг единой операционной логики.",
      "Получаете пошаговый план внедрения на следующий этап развития.",
    ],
    modules: [
      { label: "Модуль 01", title: "Клиент и ценность", sub: "На ком и чём зарабатываем?" },
      { label: "Модуль 02", title: "Деньги в бизнесе", sub: "Как зарабатываем?" },
      { label: "Модуль 03", title: "Команда и делегирование", sub: "Кто зарабатывает?" },
      { label: "Модуль 04", title: "Ресурсы, партнёры, автоматизация", sub: "Основа роста и управляемости" },
      { label: "Модуль 05", title: "Сборка бизнес-модели", sub: "Интеграция всех 9 блоков Canvas" },
    ],
  },
  {
    tag: "Отдельный тренинг",
    title: "От хаоса к потоку",
    desc: "Практический тренинг по управлению проектами для собственников и руководителей: как удерживать срок, бюджет и качество, когда одновременно идёт много инициатив и не хватает ресурсов.",
    highlights: [
      "2 дня практики",
      "Фокус: срок · бюджет · качество",
      "Инструменты для внедрения сразу после тренинга",
    ],
    meta: ["10–11 апреля 2026", "Липецк", "2 дня · практический формат"],
    host: {
      name: "Олег Давидович",
      role: "Ведущий тренинга",
      img: olegAsset.url,
      bullets: [
        "Преподаватель программ MBA и Executive MBA ИБДА РАНХиГС.",
        "Консультант по стратегиям и системам управления проектами.",
        "Автор программ по системному мышлению и управленческим решениям.",
        "Специализация: управление мультипроектной средой, приоритизация и устойчивое внедрение изменений.",
      ],
    },
    outcomes: [
      "Поймёте, почему проекты зависают и не доходят до завершения даже при высокой загрузке команды.",
      "Научитесь расставлять приоритеты в мультипроектной среде и останавливать неэффективные инициативы.",
      "Освоите подход к одновременному управлению сроками, бюджетом и качеством без постоянного аврала.",
      "Сформируете план изменений, которые можно внедрить сразу после тренинга.",
    ],
    modules: [
      { label: "День 1", title: "Почему проекты застревают" },
      { label: "День 2", title: "Как выстроить поток проектов" },
    ],
  },
  {
    tag: "Интенсив школы",
    title: "От сигналов к действиям",
    desc: "Практический тренинг по работе с трендами для собственников и руководителей: как замечать изменения раньше рынка и превращать сигналы в конкретные управленческие решения.",
    highlights: ["Тренды под ваш масштаб бизнеса", "Переход от сигналов к решениям", "Готовый план внедрения"],
    meta: ["Офлайн-интенсив", "Липецк", "Практический формат"],
    host: {
      name: "Лариса Киселева",
      role: "Ведущий тренинга",
      img: larisaAsset.url,
      bullets: [
        "Лариса Киселева — эксперт по управленческим изменениям и стратегическому развитию.",
        "Управленческий стаж 25+ лет, предпринимательский опыт 15+ лет.",
        "Ментор и спикер «Сколково», практик по адаптации бизнеса к рыночным изменениям.",
      ],
    },
    outcomes: [
      "Научитесь замечать рыночные и технологические сигналы до того, как они станут очевидными для конкурентов.",
      "Получите рабочую схему фильтрации трендов под ваш масштаб бизнеса и региональный контекст.",
      "Соберёте карту приоритетных трендов с понятными шагами внедрения в процессы и продукт.",
      "Снизите риск запоздалых решений и реактивного управления в условиях неопределённости.",
    ],
    modules: [
      { label: "Блок 1", title: "Где искать ранние сигналы" },
      { label: "Блок 2", title: "Переход от наблюдений к действиям" },
    ],
  },
  {
    tag: "Интенсив школы",
    title: "Путешествие в ботинках клиента",
    desc: "Практический тренинг по анализу и проектированию клиентского пути: от первого контакта до повторной покупки и роста лояльности.",
    highlights: ["Customer Journey Map", "Service Blueprint", "План внедрения изменений"],
    meta: ["Офлайн-интенсив", "Липецк", "80% практики"],
    host: {
      name: "Лариса Киселева",
      role: "Ведущий тренинга",
      img: larisaAsset.url,
      bullets: [
        "Лариса Киселева — практик по клиентскому опыту и управленческим трансформациям.",
        "Ментор и спикер «Сколково», управленческий стаж 25+ лет.",
        "Работает с предпринимателями над системным улучшением клиентского пути и сервиса.",
      ],
    },
    outcomes: [
      "Поймёте, где в клиентском пути теряются деньги и лояльность.",
      "Соберёте Customer Journey Map и Service Blueprint для своего бизнеса.",
      "Найдёте разрывы между обещанием бренда и реальным опытом клиента.",
      "Подготовите конкретные решения для роста конверсии и повторных продаж.",
    ],
    modules: [
      { label: "Блок 1", title: "Клиентский путь без иллюзий" },
      { label: "Блок 2", title: "Проектирование улучшений" },
    ],
  },
  {
    tag: "Интенсив школы",
    title: "Синхронизация личности и бизнеса",
    desc: "Практический тренинг по бизнес-психологии собственника: как повысить управленческую устойчивость и синхронизировать личную стратегию с целями компании.",
    highlights: ["Психология решений в бизнесе", "Устойчивость без выгорания", "Личный трек изменений"],
    meta: ["Офлайн-интенсив", "Липецк", "Практика для собственников"],
    host: {
      name: "Александра Гречушенко",
      role: "Ведущий тренинга",
      img: aleksandraAsset.url,
      bullets: [
        "Александра Гречушенко — бизнес-психолог, ментор, коуч, бизнес-тренер.",
        "Работает с предпринимателями на стыке психологии управления и бизнес-результатов.",
        "Фокус: устойчивые решения, управленческая зрелость и долгосрочная эффективность собственника.",
      ],
    },
    outcomes: [
      "Выявите личные управленческие паттерны, которые тормозят рост бизнеса.",
      "Снизите перегруз и тревожность собственника в операционной рутине.",
      "Соберёте устойчивую модель принятия решений без выгорания команды и руководителя.",
      "Получите инструменты синхронизации личных целей и стратегии компании.",
    ],
    modules: [
      { label: "Блок 1", title: "Диагностика текущего состояния" },
      { label: "Блок 2", title: "Сборка устойчивой модели управления" },
    ],
  },
  {
    tag: "Интенсив школы",
    title: "Как быть быстрее конкурента без найма людей",
    desc: "Практический тренинг по внедрению ИИ и нейросетей в бизнес-процессы: как ускорить операционку, снизить издержки и повысить скорость принятия решений.",
    highlights: ["Автоматизация без расширения штата", "Прикладные кейсы для МСП", "План внедрения и контроль эффекта"],
    meta: ["Офлайн-интенсив", "Липецк", "ИИ для предпринимателей"],
    host: {
      name: "Алексей Фарафонов",
      role: "Ведущий тренинга",
      img: alekseyAsset.url,
      bullets: [
        "Алексей Фарафонов — основатель ООО «ОНСОФТ», эксперт по внедрению ИИ.",
        "Более 15 лет в разработке программного обеспечения.",
        "220+ реализованных проектов по автоматизации и цифровым решениям для бизнеса.",
      ],
    },
    outcomes: [
      "Определите, какие бизнес-процессы стоит автоматизировать в первую очередь.",
      "Поймёте, как внедрять ИИ без увеличения штата и потери управляемости.",
      "Соберёте набор прикладных сценариев для продаж, сервиса и операционки.",
      "Оцените риски и экономический эффект внедрения до старта работ.",
    ],
    modules: [
      { label: "Блок 1", title: "Где ИИ даёт быстрый эффект" },
      { label: "Блок 2", title: "Внедрение без хаоса" },
    ],
  },
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] text-white">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            Практическая бизнес-школа
          </span>
          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Пересобери свою<br />бизнес-модель
          </h1>
          <p className="mt-6 text-xl font-semibold text-white/90 md:text-2xl">
            …чтобы она работала на тебя, а не ты на неё.
          </p>
          <p className="mt-10 max-w-2xl text-lg text-white/80 md:text-xl">
            Как Липецкому предпринимателю найти скрытые источники дохода и вырасти
            без круглосуточной пахоты?
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#04140f] transition-colors hover:bg-white/90">
              Записаться на диагностику <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10">
              Смотреть программы <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Quiz() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <Container className="py-20 md:py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Какой вы собственник <span className="text-primary">и где ваши</span> невидимые источники дохода?
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Нажмите на кнопку ниже, чтобы понять, какой бизнес подходит под вашу личность,
            почему буксуют продажи и как перестать саботировать собственный масштаб.
          </p>
          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            Пройти диагностику <ArrowRight className="h-5 w-5" />
          </button>

          <div className="relative mt-16">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-primary p-8 text-primary-foreground shadow-2xl md:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="quiz-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#quiz-grid)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold leading-tight md:text-3xl">
                  Сразу после теста вы получаете бронь на бесплатный подбор стратегии
                </h3>
                <p className="max-w-3xl text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl">
                  Пошаговая бизнес-стратегия от преподавателей и практиков нашей школы,
                  разработанная строго под вашу личность, возможности и конъюнктуру региона.
                  Она выведет вас на новый уровень и решит ключевые боли, сжирающие ресурсы
                  компании прямо сейчас.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start">
              <button className="group flex items-center gap-4 rounded-full border-2 border-primary bg-background px-10 py-5 text-base font-bold text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                <span>Начать диагностику</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-colors group-hover:bg-primary-foreground">
                  <ArrowRight className="h-4 w-4 text-primary-foreground transition-colors group-hover:text-primary" />
                </span>
              </button>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                Тест займёт не более 5 минут
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Большинство бизнес-школ дают ценные знания,<br />
            <span className="text-primary">но выдают их как запчасти от автомобиля.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Вам сгружают гору классных деталей — маркетинг, финансы, HR — а дальше
            вы должны сами как-то собрать всё это в гараже и понять, куда и как применять.
          </p>
        </div>
        <img
          src={carPartsAsset.url}
          alt="Разобранный автомобиль на запчасти — визуализация подхода"
          className="w-full rounded-3xl"
          loading="lazy"
        />
      </Container>
    </section>
  );
}

function Comparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-24 text-white">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />
      <Container className="relative">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="hidden grid-cols-[0.9fr_1.4fr_1.4fr] gap-8 border-b border-white/10 px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] md:grid">
            <div className="text-white/50">Критерий</div>
            <div className="text-white/50">Обычные онлайн-курсы</div>
            <div className="text-emerald-200">Тактика основателя</div>
          </div>
          <div className="divide-y divide-white/10">
            {comparison.map((row) => (
              <div
                key={row.problem}
                className="grid gap-5 p-6 md:grid-cols-[0.9fr_1.4fr_1.4fr] md:gap-8 md:p-8"
              >
                <div>
                  <p className="text-lg font-bold leading-snug text-white md:text-xl">
                    {row.problem}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-white/65">{row.mba}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-5 md:bg-transparent md:p-0">
                  <p className="text-base font-bold leading-snug text-emerald-200 md:text-lg">
                    {row.usTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{row.us}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base text-white/70">
          Если узнали свои проблемы — запишитесь на составление бесплатной бизнес-стратегии.
        </p>
        <p className="mt-2 max-w-3xl text-base text-white/70">
          Это ни к чему не обязывает.
        </p>
        <div className="mt-6">
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            Получить стратегию <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

function Teachers() {
  const items = [
    { name: "Елена Кремнева", role: "Основатель бизнес-школы", note: "Бизнес-практик, методолог пересборки моделей.", img: elenaAsset.url },
    { name: "Олег Давидович", role: "Ведущий тренинга", note: "Преподаватель программ MBA и Executive MBA ИБДА РАНХиГС. Системы управления проектами.", img: olegAsset.url },
    { name: "Лариса Киселева", role: "Ведущий тренинга", note: "Эксперт по управленческим изменениям и стратегическому развитию. Стаж 25+ лет. Ментор и спикер «Сколково».", img: larisaAsset.url },
    { name: "Александра Гречушенко", role: "Ведущий тренинга", note: "Бизнес-психолог, ментор, коуч, бизнес-тренер. Работает с предпринимателями на стыке психологии управления и бизнес-результатов.", img: aleksandraAsset.url },
    { name: "Алексей Фарафонов", role: "Ведущий тренинга", note: "Основатель ООО «ОНСОФТ», эксперт по внедрению ИИ. 15+ лет в разработке ПО, 220+ проектов по автоматизации.", img: alekseyAsset.url },
  ];
  return (
    <section className="bg-white py-24 text-neutral-900">
      <Container>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight text-neutral-900 md:text-5xl">
          Преподаватели
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-neutral-600">
          Жёсткие бизнес-практики. Каждый — признанный спец в своей среде,
          знает изнутри всю региональную конъюнктуру и не работает по мёртвым учебникам.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((p, i) => (
            <div key={i} className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
              {p.img ? (
                <img src={p.img} alt={p.name} className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
              ) : (
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200" />
              )}
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{p.role}</p>
              <p className="mt-2 text-lg font-bold leading-tight text-neutral-900">{p.name}</p>
              <p className="mt-2 text-sm text-neutral-600">{p.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Programs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? programs[openIdx] : null;
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] p-8 md:p-12 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Программы</h2>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-snug md:text-xl">
            Курс построен на стыке академических знаний и личной инженерии собственника.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
            Мы берём мировую теорию управления и препарируем её под конъюнктуру Липецка.
            Это не универсальная лекция, а прикладной конструктор.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
            Каждый модуль — жёсткая связка: нашли ошибку в цифрах, убрали внутренний
            саботаж, внедрили рабочее решение.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Каталог</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Выберите направление</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <article key={p.title} className="flex flex-col rounded-2xl bg-muted/60 p-6 transition-colors hover:bg-muted">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</p>
                <h4 className="mt-3 text-lg font-bold leading-snug text-foreground">{p.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <button
                  onClick={() => setOpenIdx(i)}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary hover:bg-secondary"
                >
                  Подробнее <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
      <ProgramDialog program={active} onClose={() => setOpenIdx(null)} />
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
