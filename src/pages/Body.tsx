import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  Heart,
  Info,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import type { Page, UserProfile } from "../App";

interface BodyProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

const bodyAreas = [
  {
    title: "Brain & Mind",
    description: "Thoughts, emotions, stress and how your brain works.",
    icon: Brain,
    tag: "Understand",
    position: "top-[8%] left-[35%]",
  },
  {
    title: "Heart & Circulation",
    description: "Learn how your heart and blood circulation work.",
    icon: Heart,
    tag: "Learn",
    position: "top-[39%] left-[30%]",
  },
  {
    title: "Growing & Changing",
    description: "Understand the changes your body goes through.",
    icon: Sparkles,
    tag: "Explore",
    position: "top-[68%] left-[38%]",
  },
];

const systems = [
  "Digestive system",
  "Respiratory system",
  "Nervous system",
  "Musculoskeletal system",
  "Immune system",
  "Reproductive health",
];

function Body({ onNavigate }: BodyProps) {
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
              className="nav-item active"
            >
              My Body
            </button>

            <button
              type="button"
              onClick={() => onNavigate("explore")}
              className="nav-item"
            >
              Explore
            </button>

            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="nav-item"
            >
              Community
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

        {/* INTRO */}
        <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">My Body</p>

            <h1 className="display mt-3 max-w-[550px] text-[48px] text-[#193735] sm:text-[60px]">
              Get to know the body you live in.
            </h1>

            <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-[#708783]">
              Explore how your body works, what changes over time, and why
              things happen — explained simply, without making assumptions
              about you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="soft-pill">
                <Sparkles size={13} />
                Learn at your pace
              </div>

              <div className="soft-pill">
                <ShieldCheck size={13} />
                Age-aware content
              </div>
            </div>
          </div>

          {/* BODY VISUAL */}
          <div className="relative min-h-[500px] overflow-hidden rounded-[36px] bg-[#e1f0eb]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#193735]/[0.07]" />
            <div className="absolute right-10 top-10 h-48 w-48 rounded-full border border-[#193735]/[0.06]" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />

            <div className="absolute left-7 top-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e8c85]">
                Interactive body
              </p>

              <p className="mt-2 max-w-[190px] text-sm leading-5 text-[#75908a]">
                Choose an area to start exploring.
              </p>
            </div>

            {/* Stylised body */}
            <div className="absolute left-1/2 top-[50%] h-[340px] w-[180px] -translate-x-1/2 -translate-y-1/2">
              {/* Head */}
              <div className="absolute left-1/2 top-0 h-[68px] w-[58px] -translate-x-1/2 rounded-[48%] bg-[#b7d0c7] shadow-inner" />

              {/* Neck */}
              <div className="absolute left-1/2 top-[58px] h-[42px] w-[27px] -translate-x-1/2 bg-[#b7d0c7]" />

              {/* Body */}
              <div className="absolute left-1/2 top-[85px] h-[145px] w-[104px] -translate-x-1/2 rounded-[48px_48px_30px_30px] bg-[#b7d0c7]" />

              {/* Left arm */}
              <div className="absolute left-[20px] top-[94px] h-[145px] w-[27px] -rotate-[8deg] rounded-full bg-[#b7d0c7]" />

              {/* Right arm */}
              <div className="absolute right-[20px] top-[94px] h-[145px] w-[27px] rotate-[8deg] rounded-full bg-[#b7d0c7]" />

              {/* Left leg */}
              <div className="absolute left-[53px] top-[212px] h-[128px] w-[34px] rotate-[2deg] rounded-full bg-[#b7d0c7]" />

              {/* Right leg */}
              <div className="absolute right-[53px] top-[212px] h-[128px] w-[34px] -rotate-[2deg] rounded-full bg-[#b7d0c7]" />

              {/* Body highlight */}
              <div className="absolute left-1/2 top-[108px] h-[92px] w-[65px] -translate-x-1/2 rounded-[35px] border border-white/35 bg-white/10" />
            </div>

            {/* Body callouts */}
            <div className="absolute left-5 top-[24%] rounded-2xl border border-white/70 bg-white/75 px-3 py-2 shadow-sm backdrop-blur">
              <p className="text-[11px] font-bold text-[#193735]">
                Brain & mind
              </p>
            </div>

            <div className="absolute right-5 top-[46%] rounded-2xl border border-white/70 bg-white/75 px-3 py-2 shadow-sm backdrop-blur">
              <p className="text-[11px] font-bold text-[#193735]">
                Heart & body
              </p>
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/60 bg-white/55 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <Info size={15} className="text-[#147d75]" />

                <span className="text-xs font-semibold text-[#617a75]">
                  Educational, not diagnostic
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BODY AREAS */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="eyebrow">Start somewhere</p>

            <h2 className="heading mt-2 text-[30px] text-[#193735]">
              What are you curious about?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {bodyAreas.map((area) => {
              const Icon = area.icon;

              return (
                <button
                  key={area.title}
                  type="button"
                  onClick={() => onNavigate("explore")}
                  className="interactive lift group rounded-[28px] border border-[#193735]/[0.07] bg-white p-6 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f3] text-[#147d75]">
                      <Icon size={21} />
                    </div>

                    <span className="soft-pill bg-[#f5f7f5] text-[#708783]">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="heading mt-7 text-[21px] text-[#193735]">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#708783]">
                    {area.description}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-sm font-bold text-[#147d75]">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SYSTEMS */}
        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <div>
              <p className="eyebrow">Go deeper</p>

              <h2 className="heading mt-2 text-[30px] text-[#193735]">
                Your body is a connected system.
              </h2>

              <p className="mt-4 max-w-[400px] text-sm leading-6 text-[#708783]">
                Learn how different parts work together instead of looking at
                health as isolated pieces.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {systems.map((system) => (
                <button
                  key={system}
                  type="button"
                  onClick={() => onNavigate("explore")}
                  className="group flex items-center justify-between rounded-[20px] border border-[#193735]/[0.07] bg-white px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-[#147d75]/20 hover:shadow-[0_10px_28px_rgba(25,55,53,0.06)]"
                >
                  <span className="text-sm font-bold text-[#193735]">
                    {system}
                  </span>

                  <ChevronRight
                    size={17}
                    className="text-[#8ca09c] transition-transform group-hover:translate-x-1 group-hover:text-[#147d75]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AGE AWARENESS */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-[32px] bg-[#193735] p-7 sm:p-10">
            <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full border border-white/[0.08]" />

            <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#b9ded4]">
                  <Lightbulb size={20} />
                </div>

                <h2 className="heading max-w-[700px] text-[29px] text-white sm:text-[35px]">
                  Your body changes. Your learning should too.
                </h2>

                <p className="mt-3 max-w-[680px] text-sm leading-6 text-white/50">
                  OUR360 adapts educational content to your stage of life so
                  you see information that's relevant, understandable and
                  appropriate for you.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate("explore")}
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#193735] transition hover:-translate-y-0.5 hover:bg-[#eef6f3]"
              >
                Explore learning
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* FOOTNOTE */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#193735]/[0.06] bg-white/60 p-4">
          <Info size={17} className="mt-0.5 shrink-0 text-[#147d75]" />

          <p className="text-xs leading-5 text-[#7c8e8a]">
            OUR360 is an educational and wellbeing platform. Information is
            designed to help you understand yourself and prepare better
            questions for qualified healthcare professionals — not to replace
            professional diagnosis or treatment.
          </p>
        </div>
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
            active
            onClick={() => onNavigate("body")}
          />

          <MobileNavItem
            label="Explore"
            icon={BookOpenIcon}
            onClick={() => onNavigate("explore")}
          />

          <MobileNavItem
            label="Mind"
            icon={Brain}
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

function BookOpenIcon({
  size = 20,
}: {
  size?: number;
}) {
  return <BookOpen size={size} />;
}

interface MobileNavItemProps {
  label: string;
  icon: typeof Sparkles | typeof BookOpenIcon;
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
      <Icon size={19} />
      <span>{label}</span>
    </button>
  );
}

export default Body;