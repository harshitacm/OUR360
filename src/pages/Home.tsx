import {
  ArrowRight,
  Bell,
  BookOpen,
  Flame,
  Gift,
  Heart,
  MessageCircle,
  Sparkles,
  Trophy,
  UserRound,
  Zap,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface HomeProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

function Home({ profile, onNavigate }: HomeProps) {
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
              <Sparkles size={19} strokeWidth={2.2} />
            </div>

            <span className="display-font text-[21px] font-extrabold text-[#193735]">
              OUR360
            </span>
          </button>

          <nav className="desktop-nav flex items-center gap-1">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="nav-item nav-item-active"
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
              className="nav-item"
            >
              Rewards
            </button>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-[#dce7e3] bg-white text-[#708783] transition hover:bg-[#edf7f3] sm:flex"
            >
              <Bell size={18} />
            </button>

            <button
              type="button"
              onClick={() => onNavigate("profile")}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f0eb] text-[#147d75]"
            >
              <UserRound size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="page-container pb-12 pt-7 sm:pt-10">

        {/* HERO */}
        <section className="teal-gradient relative overflow-hidden rounded-[32px] px-6 py-8 text-white sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 right-28 h-80 w-80 rounded-full border border-white/[0.07]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="max-w-[650px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3.5 py-2 text-xs font-bold text-[#dff1ed]">
                <Sparkles size={14} />
                Your private space to understand yourself
              </div>

              <h1 className="display-font max-w-[600px] text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-[58px]">
                Good to see you,
                <span className="block text-[#a9d5cb]">
                  {firstName}.
                </span>
              </h1>

              <p className="mt-5 max-w-[540px] text-[16px] leading-7 text-white/65 sm:text-[17px]">
                Learn something new, ask what you've been
                wondering about, or simply take a moment for
                yourself.
              </p>

              {/* AI ASK BOX */}
              <button
                type="button"
                onClick={() => onNavigate("ai")}
                className="mt-8 flex w-full max-w-[560px] items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.09] p-3 text-left backdrop-blur-sm transition hover:bg-white/[0.13]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#e1f0eb] text-[#147d75]">
                  <MessageCircle size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
                    Ask OUR360
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white/85">
                    What have you been curious about lately?
                  </p>
                </div>

                <ArrowRight
                  size={19}
                  className="shrink-0 text-white/45"
                />
              </button>
            </div>

            {/* HERO VISUAL */}
            <div className="relative hidden min-h-[300px] lg:block">
              <div className="absolute right-4 top-3 h-[260px] w-[260px] rounded-full bg-[#a9d5cb]/10 blur-2xl" />

              <div className="absolute right-10 top-5 flex h-[245px] w-[245px] items-center justify-center rounded-full border border-white/10">
                <div className="flex h-[190px] w-[190px] items-center justify-center rounded-full border border-white/[0.12]">
                  <div className="flex h-[135px] w-[135px] items-center justify-center rounded-full bg-[#e1f0eb] text-[#193735] shadow-2xl">
                    <div className="text-center">
                      <Sparkles
                        size={27}
                        className="mx-auto mb-2"
                      />
                      <p className="display-font text-lg font-extrabold">
                        YOUR
                      </p>
                      <p className="display-font text-lg font-extrabold">
                        360°
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.09] px-4 py-3 backdrop-blur-md">
                <Flame size={18} className="text-[#f2d69c]" />
                <div>
                  <p className="text-xs text-white/45">
                    Streak
                  </p>
                  <p className="text-sm font-bold">
                    7 days
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 left-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.09] px-4 py-3 backdrop-blur-md">
                <Zap size={18} className="text-[#a9d5cb]" />
                <div>
                  <p className="text-xs text-white/45">
                    This week
                  </p>
                  <p className="text-sm font-bold">
                    +240 XP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                Discover
              </p>

              <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
                Start with what matters most
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => onNavigate("knowledge")}
              className="our-card our-card-hover group relative min-h-[260px] overflow-hidden p-6 text-left"
            >
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#e1f0eb]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e1f0eb] text-[#147d75]">
                  <BookOpen size={20} />
                </div>

                <div className="mt-auto">
                  <span className="our-pill">
                    Knowledge
                  </span>

                  <h3 className="heading-font mt-4 text-xl font-extrabold tracking-[-0.03em] text-[#193735]">
                    Learn something useful today
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#708783]">
                    Clear explainers on your body, mind, relationships and everyday health.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#147d75]">
                    Explore
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="our-card our-card-hover group relative min-h-[260px] overflow-hidden bg-[#f8f3e8] p-6 text-left"
            >
              <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#eadfc9]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/80 text-[#7e6b4e]">
                  <Heart size={20} />
                </div>

                <div className="mt-auto">
                  <span className="inline-flex items-center rounded-full bg-white/75 px-3 py-1.5 text-xs font-bold text-[#776548]">
                    Community
                  </span>

                  <h3 className="heading-font mt-4 text-xl font-extrabold tracking-[-0.03em] text-[#193735]">
                    Talk, listen and support each other
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7d7567]">
                    A welcoming space for peer support and guidance from qualified mentors.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#7e6b4e]">
                    Open community
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate("rewards")}
              className="our-card our-card-hover group relative min-h-[260px] overflow-hidden bg-[#edf7f3] p-6 text-left"
            >
              <div className="absolute -right-16 -top-14 h-36 w-36 rounded-full bg-[#d5ebe4]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#193735] text-white">
                  <Trophy size={20} />
                </div>

                <div className="mt-auto">
                  <span className="our-pill">
                    Rewards
                  </span>

                  <h3 className="heading-font mt-4 text-xl font-extrabold tracking-[-0.03em] text-[#193735]">
                    Keep your streak moving
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#708783]">
                    See your progress, learn streaks and stay motivated with small wins.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#147d75]">
                    View progress
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>
      </main>

      {/* MOBILE NAV */}
      <nav className="mobile-bottom-nav">
        <button
          type="button"
          className="active"
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
          <MessageCircle size={18} />
          Ask
        </button>

        <button
          type="button"
          onClick={() => onNavigate("wellbeing")}
        >
          <Heart size={18} />
          Community
        </button>

        <button
          type="button"
          onClick={() => onNavigate("rewards")}
        >
          <Gift size={18} />
          Rewards
        </button>
      </nav>
    </div>
  );
}

export default Home;