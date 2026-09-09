import {
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  Flame,
  Lock,
  Medal,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  Zap,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface RewardsProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

const badges = [
  {
    title: "Body Explorer",
    description: "Complete your first body topic.",
    icon: UserRound,
    unlocked: true,
  },
  {
    title: "Knowledge Builder",
    description: "Finish 5 learning activities.",
    icon: BookOpen,
    unlocked: true,
  },
  {
    title: "Myth Buster",
    description: "Complete an interactive myth quiz.",
    icon: Sparkles,
    unlocked: true,
  },
  {
    title: "Curious Mind",
    description: "Explore 10 different topics.",
    icon: Star,
    unlocked: false,
  },
  {
    title: "Self-Awareness",
    description: "Complete 7 wellbeing reflections.",
    icon: Medal,
    unlocked: false,
  },
  {
    title: "Knowledge Seeker",
    description: "Learn for 14 days.",
    icon: Award,
    unlocked: false,
  },
];

function Rewards({ profile, onNavigate }: RewardsProps) {
  const firstName = profile.name?.trim() || "there";

  return (
    <div className="app-shell min-h-screen">
      {/* NAVIGATION */}
      <header className="top-nav">
        <div className="page-container flex h-[74px] items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#193735] text-white">
              <Sparkles size={19} />
            </div>

            <span className="display-font text-[21px] font-extrabold text-[#193735]">
              OUR360
            </span>
          </button>

          <nav className="desktop-nav flex items-center gap-1">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="nav-item"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => onNavigate("knowledge")}
              className="nav-item"
            >
              Knowledge
            </button>

            <button
              type="button"
              onClick={() => onNavigate("ai")}
              className="nav-item"
            >
              AI
            </button>

            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="nav-item"
            >
              Community
            </button>

            <button
              type="button"
              onClick={() => onNavigate("rewards")}
              className="nav-item nav-item-active"
            >
              Rewards
            </button>
          </nav>

          <button
            type="button"
            onClick={() => onNavigate("profile")}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f0eb] text-[#147d75]"
          >
            <span className="text-sm font-extrabold">
              {firstName.charAt(0).toUpperCase()}
            </span>
          </button>
        </div>
      </header>

      <main className="page-container pb-12 pt-8">

        {/* BACK */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-7 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
        >
          <ArrowLeft size={16} />
          Back home
        </button>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[32px] bg-[#193735] px-6 py-9 text-white sm:px-10 sm:py-11">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#147d75]/35 blur-3xl" />
          <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#a9d5cb]/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_360px]">

            <div className="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-extrabold text-[#a9d5cb]">
                <Trophy size={14} />
                Your progress
              </div>

              <h1 className="display-font max-w-[680px] text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Keep being
                <span className="block text-[#a9d5cb]">
                  curious, {firstName}.
                </span>
              </h1>

              <p className="mt-5 max-w-[590px] text-[16px] leading-7 text-white/55">
                OUR360 rewards you for learning, exploring
                and taking time for yourself — not for tracking
                every part of your life.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2.5">
                  <Flame
                    size={16}
                    className="text-[#f2d69c]"
                  />
                  <span className="text-sm font-bold">
                    7 day streak
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2.5">
                  <Zap
                    size={16}
                    className="text-[#a9d5cb]"
                  />
                  <span className="text-sm font-bold">
                    1,240 XP
                  </span>
                </div>
              </div>
            </div>

            {/* LEVEL CIRCLE */}
            <div className="flex justify-center">
              <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <div className="absolute inset-5 rounded-full border border-white/[0.08]" />

                <div className="flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full bg-[#e1f0eb] text-[#193735] shadow-2xl">
                  <Trophy size={25} className="mb-2 text-[#147d75]" />

                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#708783]">
                    Level
                  </p>

                  <p className="display-font mt-1 text-5xl font-extrabold tracking-[-0.06em]">
                    4
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#147d75]">
                    Health Navigator
                  </p>
                </div>

                <div className="absolute right-1 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f3e8] text-[#907952] shadow-lg">
                  <Star size={16} fill="currentColor" />
                </div>

                <div className="absolute bottom-10 left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#147d75] shadow-lg">
                  <Zap size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            icon={<Flame size={19} />}
            value="7"
            label="Day streak"
          />

          <Stat
            icon={<Zap size={19} />}
            value="1,240"
            label="Total XP"
          />

          <Stat
            icon={<Award size={19} />}
            value="3"
            label="Badges"
          />

          <Stat
            icon={<BookOpen size={19} />}
            value="18"
            label="Topics explored"
          />
        </section>

        <section className="page-section">
          <div className="our-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">
                  Your next level
                </p>

                <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735]">
                  Health Navigator
                </h2>

                <p className="mt-1 text-sm text-[#708783]">
                  760 XP needed to reach Level 5.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-2xl font-extrabold text-[#193735]">
                  1,240
                  <span className="ml-1 text-sm font-semibold text-[#8a9b97]">
                    / 2,000 XP
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#e5ece9]">
              <div
                className="h-full rounded-full bg-[#147d75]"
                style={{ width: "62%" }}
              />
            </div>

            <div className="mt-3 flex justify-between text-[11px] font-bold text-[#8a9b97]">
              <span>Level 4</span>
              <span>Level 5</span>
            </div>
          </div>
        </section>

        <section className="pb-9">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="eyebrow">
                Your collection
              </p>

              <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
                Badges
              </h2>
            </div>

            <span className="text-sm font-bold text-[#8a9b97]">
              3 / 6 unlocked
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.title}
                  className={`rounded-[23px] border p-5 ${
                    badge.unlocked
                      ? "border-[#dce7e3] bg-white"
                      : "border-[#e5ebe8] bg-[#f5f7f5]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${
                        badge.unlocked
                          ? "bg-[#e1f0eb] text-[#147d75]"
                          : "bg-[#e7ecea] text-[#a0afab]"
                      }`}
                    >
                      <Icon size={21} />
                    </div>

                    {badge.unlocked ? (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#193735] text-white">
                        <Check size={13} />
                      </span>
                    ) : (
                      <Lock size={15} className="text-[#aab7b3]" />
                    )}
                  </div>

                  <h3
                    className={`heading-font mt-5 text-base font-extrabold ${
                      badge.unlocked
                        ? "text-[#193735]"
                        : "text-[#778783]"
                    }`}
                  >
                    {badge.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-[#8a9b97]">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* MOBILE NAV */}
      <nav className="mobile-bottom-nav">
        <button
          type="button"
          onClick={() => onNavigate("home")}
        >
          <Sparkles size={18} />
          Home
        </button>

        <button
          type="button"
          onClick={() => onNavigate("knowledge")}
        >
          <BookOpen size={18} />
          Learn
        </button>

        <button
          type="button"
          onClick={() => onNavigate("ai")}
        >
          <Sparkles size={18} />
          Ask
        </button>

        <button
          type="button"
          onClick={() => onNavigate("wellbeing")}
        >
          <span className="text-[16px]">♡</span>
          Mind
        </button>

        <button
          type="button"
          className="active"
          onClick={() => onNavigate("rewards")}
        >
          <Trophy size={18} />
          Rewards
        </button>
      </nav>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="our-card p-4 sm:p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#e1f0eb] text-[#147d75]">
        {icon}
      </div>

      <p className="display-font mt-4 text-2xl font-extrabold text-[#193735]">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#8a9b97]">
        {label}
      </p>
    </div>
  );
}

export default Rewards;