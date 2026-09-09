import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock3,
  Heart,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import type { Page, UserProfile } from "../App";

interface ExploreProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

const featuredTopics = [
  {
    category: "BODY",
    title: "Why does my body change as I grow?",
    description:
      "A simple guide to understanding physical changes, development and what is normal.",
    time: "5 min",
    tone: "bg-[#e1f0eb]",
  },
  {
    category: "MIND",
    title: "Understanding your emotions",
    description:
      "Learn why emotions happen and how your body and brain respond to them.",
    time: "4 min",
    tone: "bg-[#e9eff4]",
  },
  {
    category: "EVERYDAY HEALTH",
    title: "Small things your body needs",
    description:
      "The everyday basics behind hygiene, movement, rest and feeling your best.",
    time: "6 min",
    tone: "bg-[#f8f3e8]",
  },
];

const categories = [
  {
    title: "My Body",
    description: "Anatomy, systems and body changes",
    icon: UserRound,
  },
  {
    title: "Growing Up",
    description: "Puberty, development and self-awareness",
    icon: Sparkles,
  },
  {
    title: "Mental Wellbeing",
    description: "Emotions, stress and understanding yourself",
    icon: Heart,
  },
  {
    title: "Relationships",
    description: "Communication, boundaries and connection",
    icon: ShieldCheck,
  },
  {
    title: "Health Basics",
    description: "Everyday knowledge for your body and mind",
    icon: BookOpen,
  },
  {
    title: "Ask Without Judgment",
    description: "Questions you might feel embarrassed to ask",
    icon: Lightbulb,
  },
];

const popularQuestions = [
  "Why do I feel tired even after sleeping?",
  "Why does my body change during puberty?",
  "Why do emotions sometimes feel so intense?",
  "How do I know if something is normal?",
  "What does my body need every day?",
  "How can I set healthy boundaries?",
];

function Explore({ profile, onNavigate }: ExploreProps) {
  const ageLabel =
    profile.age === "child"
      ? "Growing up"
      : profile.age === "teen"
        ? "Teen years"
        : "Your stage of life";

  return (
    <div className="app-shell min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#193735]/[0.06] bg-[#f5f7f5]/85 backdrop-blur-xl">
        <div className="page-container flex h-[76px] items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#193735]">
              <span className="text-[13px] font-extrabold text-white">360</span>
            </div>

            <div className="hidden sm:block">
              <p className="text-[16px] font-extrabold tracking-[-0.035em] text-[#193735]">
                OUR360
              </p>
              <p className="text-[9px] font-bold tracking-[0.12em] text-[#8a9b97]">
                UNDERSTAND YOURSELF
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="nav-item"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => onNavigate("body")}
              className="nav-item"
            >
              My Body
            </button>

            <button
              type="button"
              onClick={() => onNavigate("explore")}
              className="nav-item active"
            >
              Explore
            </button>

            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="nav-item"
            >
              My Mind
            </button>
          </nav>

          <button
            type="button"
            onClick={() => onNavigate("profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#193735]/[0.08] bg-white text-[#193735] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            aria-label="Open profile"
          >
            <UserRound size={18} />
          </button>
        </div>
      </header>

      <main className="page-container pb-24 pt-9 sm:pt-12">
        {/* BACK */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-8 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
        >
          <ArrowLeft size={16} />
          Back home
        </button>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[36px] bg-[#193735] p-7 sm:p-10 lg:p-14">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/[0.08]" />
          <div className="absolute right-16 top-12 h-44 w-44 rounded-full border border-white/[0.07]" />
          <div className="absolute bottom-[-120px] left-[35%] h-72 w-72 rounded-full bg-[#3f9187]/15 blur-3xl" />

          <div className="relative z-10 max-w-[800px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2">
              <BookOpen size={14} className="text-[#b9ded4]" />

              <span className="text-xs font-semibold text-white/65">
                {ageLabel} • Curated for you
              </span>
            </div>

            <h1 className="display text-[45px] text-white sm:text-[58px] lg:text-[68px]">
              Explore.
              <br />
              Stay curious.
            </h1>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-white/52 sm:text-base">
              A growing library of simple, visual explanations about your
              body, mind, emotions, relationships and everyday health.
            </p>

            {/* SEARCH */}
            <div className="mt-9 flex max-w-[650px] items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.08] p-2 backdrop-blur">
              <Search
                size={19}
                className="ml-3 shrink-0 text-white/40"
              />

              <input
                type="text"
                placeholder="What are you curious about?"
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />

              <button
                type="button"
                onClick={() => onNavigate("ai")}
                className="hidden min-h-[44px] items-center gap-2 rounded-[15px] bg-white px-4 text-sm font-bold text-[#193735] transition hover:bg-[#eef6f3] sm:flex"
              >
                Search
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="eyebrow">Recommended for you</p>

              <h2 className="heading mt-2 text-[30px] text-[#193735]">
                Start with something interesting
              </h2>
            </div>

            <span className="hidden text-xs font-semibold text-[#8a9996] sm:block">
              Curated learning
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredTopics.map((topic) => (
              <button
                key={topic.title}
                type="button"
                onClick={() => onNavigate("ai")}
                className={`interactive lift group min-h-[280px] rounded-[30px] border border-[#193735]/[0.06] p-6 text-left ${topic.tone}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#6e8882]">
                    {topic.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#82928f]">
                    <Clock3 size={13} />
                    {topic.time}
                  </div>
                </div>

                <div className="mt-14">
                  <h3 className="heading max-w-[320px] text-[24px] text-[#193735]">
                    {topic.title}
                  </h3>

                  <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#708783]">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-sm font-bold text-[#147d75]">
                  Read explanation
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="eyebrow">Browse by topic</p>

            <h2 className="heading mt-2 text-[30px] text-[#193735]">
              Find your corner of OUR360
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => onNavigate("ai")}
                  className="group flex min-h-[145px] items-start gap-4 rounded-[24px] border border-[#193735]/[0.07] bg-white p-5 text-left transition hover:-translate-y-1 hover:border-[#147d75]/20 hover:shadow-[0_14px_35px_rgba(25,55,53,0.07)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf7f3] text-[#147d75]">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-[#193735]">
                        {category.title}
                      </h3>

                      <ChevronRight
                        size={16}
                        className="shrink-0 text-[#a0afac] transition-transform group-hover:translate-x-1 group-hover:text-[#147d75]"
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[#708783]">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* POPULAR QUESTIONS */}
        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">People wonder about this</p>

              <h2 className="heading mt-2 max-w-[360px] text-[30px] text-[#193735]">
                Questions worth asking.
              </h2>

              <p className="mt-4 max-w-[390px] text-sm leading-6 text-[#708783]">
                Sometimes the easiest way to learn is simply to ask. Tap any
                question to explore it privately.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("ai")}
                className="primary-button mt-7"
              >
                Ask your own question
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {popularQuestions.map((question, index) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => onNavigate("ai")}
                  className="group flex min-h-[100px] items-center justify-between rounded-[22px] border border-[#193735]/[0.07] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#147d75]/20 hover:shadow-[0_10px_28px_rgba(25,55,53,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf7f3] text-[10px] font-extrabold text-[#147d75]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pr-2 text-sm font-bold leading-5 text-[#193735]">
                      {question}
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="shrink-0 text-[#a1afac] transition-transform group-hover:translate-x-1 group-hover:text-[#147d75]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ASK CTA */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-[32px] bg-[#e1f0eb] p-7 sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#193735]/[0.06]" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[720px]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#147d75] shadow-sm">
                  <Lightbulb size={20} />
                </div>

                <p className="eyebrow">Still wondering?</p>

                <h2 className="heading mt-2 text-[30px] text-[#193735] sm:text-[36px]">
                  Ask something you've never felt comfortable asking.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#708783]">
                  OUR360 gives you a private, judgment-free place to start
                  understanding the answer.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate("ai")}
                className="primary-button shrink-0"
              >
                Ask privately
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* EDUCATION NOTE */}
        <section className="mt-10 flex items-start gap-3 rounded-2xl border border-[#193735]/[0.06] bg-white/60 p-4">
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0 text-[#147d75]"
          />

          <p className="text-xs leading-5 text-[#7c8e8a]">
            Content in OUR360 is educational and adapted to your age and
            selected interests. It is not a substitute for professional
            medical advice, diagnosis or treatment.
          </p>
        </section>
      </main>

      {/* MOBILE NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#193735]/[0.07] bg-white/90 px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          <MobileNavItem
            label="Home"
            icon={Sparkles}
            onClick={() => onNavigate("home")}
          />

          <MobileNavItem
            label="Body"
            icon={UserRound}
            onClick={() => onNavigate("body")}
          />

          <MobileNavItem
            label="Explore"
            icon={BookOpen}
            active
            onClick={() => onNavigate("explore")}
          />

          <MobileNavItem
            label="Mind"
            icon={Heart}
            onClick={() => onNavigate("wellbeing")}
          />

          <MobileNavItem
            label="Profile"
            icon={UserRound}
            onClick={() => onNavigate("profile")}
          />
        </div>
      </nav>
    </div>
  );
}

interface MobileNavItemProps {
  label: string;
  icon: typeof Sparkles;
  active?: boolean;
  onClick: () => void;
}

function MobileNavItem({
  label,
  icon: Icon,
  active = false,
  onClick,
}: MobileNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-w-[54px] flex-col items-center gap-1.5 text-[10px] font-bold ${
        active ? "text-[#147d75]" : "text-[#8a9996]"
      }`}
    >
      <Icon size={19} strokeWidth={active ? 2.5 : 2} />
      <span>{label}</span>
    </button>
  );
}

export default Explore;