import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
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
import icebergAsset from "@/assets/iceberg.png.asset.json";

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
  modules: { label: string; title: string; sub?: string; weeks?: string; dates?: string; blocks?: string; points?: string[] }[];
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
      { label: "Модуль 01", title: "Клиент и ценность", sub: "На ком и чём зарабатываем?", weeks: "Недели 1–3", dates: "11–13 сентября 2026", blocks: "ВП · СК · ВТ" },
      { label: "Модуль 02", title: "Деньги в бизнесе", sub: "Как зарабатываем?", weeks: "Недели 4–6", dates: "02–04 октября 2026", blocks: "КЛ · ВТ · ПД" },
      { label: "Модуль 03", title: "Команда и делегирование", sub: "Кто зарабатывает?", weeks: "Недели 7–9", dates: "23–25 октября 2026", blocks: "КР · КД · КП" },
      { label: "Модуль 04", title: "Ресурсы, партнёры, автоматизация", sub: "Основа роста и управляемости", weeks: "Недели 10–12", dates: "13–15 ноября 2026", blocks: "СИ · ПД" },
      { label: "Модуль 05", title: "Сборка бизнес-модели", sub: "Интеграция всех 9 блоков Canvas", weeks: "Недели 13–15", dates: "04–06 декабря 2026", blocks: "КП · КД · ВП · ВТ · СК · КР · КЛ · СИ · ПД" },
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
      {
        label: "День 1",
        title: "Почему проекты застревают",
        points: [
          "Реальная картина проектного хаоса: где в компании теряются время и деньги.",
          "Перегрузка и многозадачность: почему попытка делать всё сразу замедляет каждый проект.",
          "Приоритеты: как принимать управленческие решения в условиях конкуренции за ресурсы.",
          "Сроки, бюджет и качество: как убирать конфликт метрик в реальной работе.",
        ],
      },
      {
        label: "День 2",
        title: "Как выстроить поток проектов",
        points: [
          "Управление ресурсами без постоянных авралов и сбережение ключевых специалистов.",
          "Контроль без микроменеджмента: прозрачность статуса и раннее выявление рисков.",
          "Внедрение изменений: от «попробовали и забыли» к устойчивой практике.",
          "Личный фокус руководителя в мультипроектной среде.",
        ],
      },
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
      {
        label: "Блок 1",
        title: "Где искать ранние сигналы",
        points: [
          "Источники трендов: клиенты, конкуренты, технологии, регуляторика, смежные рынки.",
          "Как отличать шум от сигналов, влияющих на прибыль и устойчивость.",
          "Матрица приоритизации изменений для собственника и управленческой команды.",
        ],
      },
      {
        label: "Блок 2",
        title: "Переход от наблюдений к действиям",
        points: [
          "Трансформация тренда в управленческую гипотезу и тестовый сценарий.",
          "План внедрения: ресурсы, сроки, риски и метрики результата.",
          "Система регулярного пересмотра трендов и адаптации решений.",
        ],
      },
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
      {
        label: "Блок 1",
        title: "Клиентский путь без иллюзий",
        points: [
          "Как проверить гипотезы о клиенте и не опираться на «кажется».",
          "Карта пути клиента: ключевые этапы, барьеры и точки потерь.",
          "Сегментация сценариев: где клиент уходит и почему.",
        ],
      },
      {
        label: "Блок 2",
        title: "Проектирование улучшений",
        points: [
          "Service Blueprint: связка фронта и внутренней операционки.",
          "Приоритизация улучшений по влиянию на деньги и удержание.",
          "План внедрения изменений после тренинга.",
        ],
      },
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
      {
        label: "Блок 1",
        title: "Диагностика текущего состояния",
        points: [
          "Психология собственника: где теряется энергия и фокус.",
          "Ограничивающие убеждения и управленческие реакции в стрессовых ситуациях.",
          "Связь личных стратегий поведения с результатами команды и бизнеса.",
        ],
      },
      {
        label: "Блок 2",
        title: "Сборка устойчивой модели управления",
        points: [
          "Инструменты саморегуляции и восстановления управленческой эффективности.",
          "Решения в условиях неопределённости: как не уходить в реактивность.",
          "Личный план изменений собственника и формат поддержки внедрения.",
        ],
      },
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
      {
        label: "Блок 1",
        title: "Где ИИ даёт быстрый эффект",
        points: [
          "Карта процессов бизнеса: где автоматизация окупается быстрее всего.",
          "Прикладные сценарии: маркетинг, продажи, поддержка, аналитика.",
          "Ограничения и риски: качество данных, безопасность, ответственность.",
        ],
      },
      {
        label: "Блок 2",
        title: "Внедрение без хаоса",
        points: [
          "Пошаговый план запуска: пилот, метрики, масштабирование.",
          "Роли команды и управленческий контроль при внедрении ИИ.",
          "Экономика решения: как считать эффект и не переплатить за инструменты.",
        ],
      },
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
  { title: "Устали от бесполезного онлайна", desc: "Понимаете, что для очередных курсов в записи вам нужно слишком много самоорганизации, а времени на это физически нет — вам нужен жёсткий, живой оффлайн-поток." },
  { title: "Ищете решения для своего города", desc: "Понимаете, что вам нужны инструменты, адаптированные строго под конъюнктуру Липецка, а не абстрактные примеры из жизни московских корпораций." },
  { title: "Перегружены мёртвой теорией", desc: "Осознаёте, что на рынке нет дефицита знаний, но есть жёсткий дефицит их реального внедрения в процессы." },
  { title: "Не готовы переплачивать за бренд", desc: "Понимаете, что дорогие программы уровня «Сколково» с цензом входа от 100 млн рублей просто не соответствуют масштабу вашего текущего бизнеса." },
  { title: "Попали в ловушку масштабирования", desc: "Уперлись в потолок и понимаете, что «больше работать» в вашей текущей модели вообще не означает «больше зарабатывать»." },
  { title: "Застряли в кадровом аду", desc: "Столкнулись с жёстким синдромом «проще сделать самому», потому что нанимать и управлять людьми в регионе тяжело, а доверять команде не получается." },
  { title: "Увязли в операционной слепоте", desc: "Находитесь в постоянном беге по кругу и тушении пожаров, пока система из нескольких точек или ИП превращается в неуправляемый хаос." },
  { title: "Чувствуете внутренний саботаж", desc: "Испытываете жёсткий конфликт бизнеса и личности, из-за чего прокрастинируете, выгораете, а команда заражается вашим саботажем." },
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
      <Faq />
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
          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
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
          <h2 className="text-3xl font-black leading-[1.1] tracking-tight md:text-4xl bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#0f766e] bg-clip-text text-transparent">
            Какой вы собственник и где ваши невидимые источники дохода?
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
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#0f766e] bg-clip-text text-transparent">
            Большинство бизнес-школ дают ценные знания,<br />
            но выдают их как запчасти от автомобиля.
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
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#0f766e] bg-clip-text text-transparent">
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
          <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#0f766e] bg-clip-text text-transparent">Выберите направление</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-muted/60 p-6 transition-colors hover:bg-muted">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</p>
                <h4 className="mt-3 text-lg font-bold leading-snug bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#0f766e] bg-clip-text text-transparent">{p.title}</h4>
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

function ProgramDialog({ program, onClose }: { program: ProgramDetail | null; onClose: () => void }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleClose = (open: boolean) => {
    if (!open) {
      onClose();
      setTimeout(() => {
        setSent(false);
        setPhone("");
        setName("");
      }, 200);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSent(true);
  };

  return (
    <Dialog open={!!program} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {program && (
          <>
            <div className="rounded-t-lg bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] p-8 text-white md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">{program.tag}</p>
              <DialogHeader className="mt-3 space-y-3">
                <DialogTitle className="text-3xl font-black tracking-tight md:text-4xl text-left bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  {program.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-white/85 md:text-base text-left">
                  {program.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-5 flex flex-wrap gap-2">
                {program.meta.map((m) => (
                  <span key={m} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">
                    {m}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-2">
                {program.highlights.map((h) => (
                  <li key={h} className="rounded-xl bg-white/10 px-4 py-2.5 text-sm leading-snug">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 p-8 md:p-10">
              {program.host && (
                <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{program.host.role}</p>
                  <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-start">
                    <img
                      src={program.host.img}
                      alt={program.host.name}
                      className="h-32 w-32 flex-shrink-0 rounded-xl object-cover md:h-36 md:w-36"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-black md:text-2xl">{program.host.name}</h4>
                      <ul className="mt-3 space-y-2">
                        {program.host.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                            <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-lg font-black md:text-xl">Что получат участники</h4>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {program.outcomes.map((o) => (
                    <div key={o} className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 text-sm leading-relaxed">
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black md:text-xl">Программа</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                  {program.modules.map((m) => (
                    <div key={m.label} className="rounded-xl border border-emerald-200/60 bg-muted/60 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{m.label}</p>
                      <p className="mt-2 font-bold leading-snug">{m.title}</p>
                      {m.sub && <p className="mt-1 text-sm text-muted-foreground">{m.sub}</p>}
                      {(m.weeks || m.dates) && (
                        <div className="mt-3 border-t border-emerald-200/60 pt-3">
                          {m.weeks && (
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{m.weeks}</p>
                          )}
                          {m.dates && <p className="mt-0.5 text-sm text-foreground/80">{m.dates}</p>}
                        </div>
                      )}
                      {m.blocks && (
                        <div className="mt-3 inline-flex rounded-full border border-emerald-300/70 bg-emerald-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-900">
                          Блоки: {m.blocks}
                        </div>
                      )}
                      {m.points && (
                        <ul className="mt-3 space-y-2">
                          {m.points.map((p) => (
                            <li key={p} className="rounded-lg border border-border bg-background px-3 py-2 text-sm leading-snug text-foreground/85">
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] p-6 text-white md:p-8">
                {sent ? (
                  <div className="py-4 text-center">
                    <p className="text-xl font-black">Спасибо! Заявка отправлена.</p>
                    <p className="mt-2 text-sm text-white/80">Свяжемся с вами в ближайшее время.</p>
                  </div>
                ) : (
                  <>
                    <h4 className="text-xl font-black md:text-2xl">Узнайте, подойдёт ли вам эта программа</h4>
                    <p className="mt-2 text-sm text-white/80">
                      Оставьте телефон — перезвоним, зададим короткие вопросы и расскажем, ваша ли это программа.
                    </p>
                    <form onSubmit={submit} className="mt-5 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        className="bg-white text-foreground placeholder:text-muted-foreground"
                        maxLength={100}
                      />
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        type="tel"
                        placeholder="+7 ___ ___ __ __"
                        className="bg-white text-foreground placeholder:text-muted-foreground"
                        maxLength={20}
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#04140f] hover:bg-white/90"
                      >
                        Узнать <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                    <p className="mt-3 text-[11px] text-white/60">
                      Оставляя заявку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Bridge() {
  return (
    <section className="py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-white p-6">
          <img
            src={icebergAsset.url}
            alt="Айсберг — метафора скрытого кассового разрыва"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h2 className="bg-gradient-to-r from-[#0a2e22] via-[#1a7a5c] to-[#0d4d3a] bg-clip-text text-transparent text-4xl font-black leading-tight tracking-tight md:text-5xl">
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
        </div>
      </Container>
      <Container className="mt-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.18em] text-primary-foreground/70">Бесплатная диагностика</div>
              <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight md:text-4xl">
                Узнайте, нет ли у вас скрытого кассового разрыва — пока он не разрушил бизнес.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                Проведём бесплатную диагностику вашей бизнес-модели и дадим личную стратегию
                под ваш бизнес. Без обязательств — только конкретные цифры и решения.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-primary-foreground/85 md:text-base">
                <li>— Найдём, где утекают деньги</li>
                <li>— Покажем точки роста на ближайшие 90 дней</li>
                <li>— Личная стратегия в подарок</li>
              </ul>
            </div>
            <div className="flex flex-col items-stretch gap-5">
              <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 backdrop-blur">
                <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-primary-foreground/70">
                  <span>Места на этой неделе</span>
                  <span className="rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-bold text-white">Осталось 1</span>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((i) => {
                    const taken = i < 3;
                    return (
                      <div
                        key={i}
                        className={
                          "relative aspect-square rounded-xl border " +
                          (taken
                            ? "border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/30"
                            : "border-accent bg-accent/15 text-accent")
                        }
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-black">
                          {taken ? "×" : "01"}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/70">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
                  Берём не всех — только 4 компании в неделю
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/50 bg-primary-foreground/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/25">
                Получить диагностику <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-24 text-white">
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
  const accents = [
    "from-emerald-500/20 to-emerald-500/0 text-emerald-600",
    "from-amber-500/20 to-amber-500/0 text-amber-600",
    "from-rose-500/20 to-rose-500/0 text-rose-600",
    "from-sky-500/20 to-sky-500/0 text-sky-600",
    "from-violet-500/20 to-violet-500/0 text-violet-600",
    "from-teal-500/20 to-teal-500/0 text-teal-600",
    "from-orange-500/20 to-orange-500/0 text-orange-600",
    "from-fuchsia-500/20 to-fuchsia-500/0 text-fuchsia-600",
  ];
  return (
    <section className="py-24">
      <Container>
        <h2 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl bg-gradient-to-r from-[#0a2e22] via-[#1a7a5c] to-[#0d4d3a] bg-clip-text text-transparent">
          Если вы нашли себя хотя бы в трёх пунктах ниже — наше обучение вам поможет
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fitPoints.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accents[i % accents.length]} blur-2xl opacity-70 transition-opacity group-hover:opacity-100`} />
              <div className={`pointer-events-none absolute right-4 top-3 text-7xl font-black leading-none ${accents[i % accents.length].split(" ").pop()} opacity-10 select-none`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={`relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[i % accents.length]} ring-1 ring-border`}>
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="relative mt-5 text-lg font-bold leading-snug">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqItems: { q: string; a: string; tone: "green" | "gray"; span: string }[] = [
  // Row 1 — 3 + 3
  { q: "За сколько окупится участие?", a: "Большинство участников окупает обучение за первые 2–3 месяца — за счёт первой же системной перестройки найма, продаж или ценообразования.", tone: "green", span: "md:col-span-3" },
  { q: "Подойдёт ли моему бизнесу?", a: "Да, если у вас оборот от 5 млн ₽/мес и вы готовы внедрять, а не просто слушать. На диагностике честно скажем, если нет.", tone: "gray", span: "md:col-span-3" },
  // Row 2 — 2 + 2 + 2
  { q: "Это теория или практика?", a: "90% времени — внедрение в ваш бизнес. Никаких лекций «на потом» и домашек «в стол».", tone: "gray", span: "md:col-span-2" },
  { q: "Кто ведёт программу?", a: "Елена Кремнева и команда практикующих экспертов с опытом в производстве, рознице и услугах.", tone: "green", span: "md:col-span-2" },
  { q: "Сколько длится обучение?", a: "4 месяца плотной работы + 2 месяца сопровождения.", tone: "gray", span: "md:col-span-2" },
  // Row 3 — 3 + 3
  { q: "Берёте ли вы всех?", a: "Нет. Сначала бесплатная диагностика. Если не сможем дать результат — честно откажем.", tone: "green", span: "md:col-span-3" },
  { q: "Что если не сработает?", a: "Возвращаем оплату по условиям договора, если вы выполняли все рекомендации и не получили роста.", tone: "gray", span: "md:col-span-3" },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const toneMap: Record<string, string> = {
    green: "bg-gradient-to-br from-[#1a7a5c] via-[#0f5a42] to-[#08372a] border-emerald-400/20 hover:border-emerald-300/50",
    gray: "bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border-white/5 hover:border-emerald-300/30",
  };
  return (
    <section className="relative overflow-hidden bg-[#0a0f0d] py-24 text-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Вопросы и ответы
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              Что важно знать перед участием
            </span>
          </h2>
        </div>
        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-6">
          {faqItems.map((item, i) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(i)}
              className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl border p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20 md:p-8 ${item.span} ${toneMap[item.tone]}`}
            >
              <div className="absolute right-5 top-5 text-[11px] font-bold uppercase tracking-widest text-white/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="pr-10 text-xl font-bold leading-snug md:text-2xl">
                {item.q}
              </h3>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-emerald-200">
                  Показать ответ
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur transition-all group-hover:rotate-90 group-hover:border-emerald-300/60 group-hover:bg-emerald-400/15">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </Container>
      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-xl">
          {open !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black leading-tight">{faqItems[open].q}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {faqItems[open].a}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Footer() {
  const nav = ["Программы", "Тренинги", "Вопросы", "Эксперты", "Контакты"];
  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              Тактика основателя
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight">
              Школа практического роста бизнеса
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton>Оставить заявку</CtaButton>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Навигация
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Контакты
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:kredo48@mail.ru" className="hover:text-primary">kredo48@mail.ru</a></li>
              <li><a href="tel:+74742711808" className="hover:text-primary">+7 4742 711 808</a></li>
              <li>г. Липецк, ул. Коцаря С.Л., 10А, пом. 7</li>
            </ul>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Социальные сети
            </p>
            <div className="mt-4 flex gap-3">
              {["TG", "MAX", "VK"].map((s) => (
                <a key={s} href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-primary transition-colors hover:bg-secondary">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-border pt-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Подпишитесь на новости
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Получайте обновления по программам и тренингам школы.
            </p>
            <a href="#" className="mt-3 inline-block text-sm font-bold text-primary hover:underline">
              Подписаться →
            </a>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>© 2026 Тактика основателя. Все права защищены.</p>
            <p className="mt-2 space-x-4">
              <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary">Публичная оферта</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
