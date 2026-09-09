import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  Crown,
  Headphones,
  Lock,
  MessageCircle,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface PremiumProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

const features = [
  {
    icon: BookOpen,
    title: "Deep-dive learning paths",
    description:
      "Go beyond quick articles with structured journeys that help you understand a topic from start to finish.",
  },
  {
    icon: Brain,
    title: "Advanced body explainers",
    description:
      "Explore interactive visual explanations designed to make complicated health concepts easier to understand.",
  },
  {
    icon: Headphones,
    title: "Guided wellbeing programs",
    description:
      "Longer guided experiences for reflection, stress management, confidence and self-awareness.",
  },
  {
    icon: MessageCircle,
    title: "More with OUR360 AI",
    description:
      "Get deeper conversations, topic exploration and help turning questions into useful learning journeys.",
  },
  {
    icon: WandSparkles,
    title: "Personalized journeys",
    description:
      "Let OUR360 connect the topics you care about into a learning path made around your interests.",
  },
  {
    icon: Star,
    title: "Premium discoveries",
    description:
      "Unlock exclusive interactive lessons, challenges and deeper educational experiences.",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "₹149",
    period: "/ month",
    popular: false,
  },
  {
    name: "Yearly",
    price: "₹999",
    period: "/ year",
    popular: true,
  },
];

function Premium({ profile, onNavigate }: PremiumProps) {
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
              className="nav-item"
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

      <main className="page-container pb-14 pt-8">

        {/* BACK */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-7 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
        >
          <ArrowLeft size={16} />
          Back home
        </button>

        {/* PREMIUM HERO */}
        <section className="relative overflow-hidden rounded-[34px] bg-[#193735] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="absolute -right-28 -top-32 h-[390px] w-[390px] rounded-full bg-[#147d75]/30 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[330px] w-[330px] rounded-full bg-[#e1f0eb]/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_390px]">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c9a9]/20 bg-[#d8c9a9]/10 px-4 py-2 text-xs font-extrabold text-[#e6d7b9]">
                <Crown size={14} />
                OUR360+
              </div>

              <h1 className="display-font mt-6 max-w-[720px] text-4xl font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Go deeper into
                <span className="block text-[#d9c79f]">
                  yourself.
                </span>
              </h1>

              <p className="mt-5 max-w-[630px] text-[16px] leading-7 text-white/55 sm:text-[17px]">
                Unlock deeper learning, guided wellbeing,
                advanced explainers and a more personalized
                OUR360 experience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2.5 text-xs font-bold text-white/75">
                  <Check size={14} className="text-[#a9d5cb]" />
                  Cancel anytime
                </span>

                <span className="flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2.5 text-xs font-bold text-white/75">
                  <Check size={14} className="text-[#a9d5cb]" />
                  Essential knowledge stays free
                </span>
              </div>
            </div>

            {/* PREMIUM VISUAL */}
            <div className="flex justify-center">
              <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#d9c79f]/15 bg-white/[0.025]">
                <div className="absolute inset-5 rounded-full border border-[#d9c79f]/10" />

                <div className="absolute inset-10 rounded-full border border-[#d9c79f]/10" />

                <div className="flex h-[155px] w-[155px] flex-col items-center justify-center rounded-full bg-[#e7dcc4] text-[#193735] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <Crown
                    size={27}
                    className="mb-2 text-[#806b44]"
                  />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#806b44]">
                    OUR
                  </p>

                  <p className="display-font text-3xl font-extrabold tracking-[-0.06em]">
                    360+
                  </p>
                </div>

                <div className="absolute right-2 top-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#907952] shadow-lg">
                  <Star size={18} fill="currentColor" />
                </div>

                <div className="absolute bottom-7 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#147d75] text-white shadow-lg">
                  <Sparkles size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY PREMIUM */}
        <section className="page-section">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="eyebrow">
              What's inside
            </p>

            <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
              More depth. More ways to learn.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#708783]">
              OUR360+ doesn't lock away the basics. It gives
              you more ways to go deeper when you want to.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="our-card our-card-hover p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e1f0eb] text-[#147d75]">
                    <Icon size={20} />
                  </div>

                  <h3 className="heading-font mt-5 text-lg font-extrabold text-[#193735]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#708783]">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#147d75]">
                    Included in +
                    <Lock size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PREMIUM EXPERIENCE */}
        <section className="pb-10">
          <div className="overflow-hidden rounded-[30px] border border-[#ded5c3] bg-[#f8f3e8]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* VISUAL */}
              <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-[#e9dfcb]">
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/35 blur-2xl" />

                <div className="relative">
                  <div className="absolute -left-12 top-8 h-24 w-24 rotate-[-10deg] rounded-[22px] border border-[#bba982] bg-white/45" />
                  <div className="absolute -right-10 bottom-2 h-28 w-28 rotate-[9deg] rounded-[25px] border border-[#bba982] bg-white/40" />

                  <div className="relative flex h-[205px] w-[175px] flex-col justify-between rounded-[27px] bg-[#193735] p-5 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                      <Sparkles size={17} className="text-[#a9d5cb]" />
                      <span className="text-[9px] font-bold text-white/40">
                        OUR360+
                      </span>
                    </div>

                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#a9d5cb]">
                        Guided path
                      </p>

                      <p className="heading-font mt-2 text-xl font-extrabold leading-tight">
                        Understand
                        <br />
                        your mind
                      </p>

                      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[68%] rounded-full bg-[#a9d5cb]" />
                      </div>

                      <p className="mt-2 text-[9px] text-white/40">
                        4 of 6 experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="our-pill w-fit">
                  <Crown size={13} />
                  Premium experience
                </span>

                <h2 className="heading-font mt-5 text-2xl font-extrabold tracking-[-0.035em] text-[#193735] sm:text-3xl">
                  Guided learning journeys.
                </h2>

                <p className="mt-3 max-w-[570px] text-sm leading-7 text-[#708783]">
                  Instead of jumping between unrelated articles,
                  OUR360+ can take you through a complete topic
                  step by step — learn, reflect, understand and
                  apply.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "6-part guided learning experiences",
                    "Interactive explainers",
                    "Reflection prompts",
                    "Personalized recommendations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75]">
                        <Check size={13} />
                      </div>

                      <span className="text-sm font-semibold text-[#526c67]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("knowledge")}
                  className="mt-7 flex w-fit items-center gap-2 rounded-[14px] bg-[#193735] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0e625c]"
                >
                  Preview learning
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section className="pb-10">
          <div className="mx-auto max-w-[650px] text-center">
            <p className="eyebrow">
              Choose your experience
            </p>

            <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
              Simple, transparent pricing.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#708783]">
              These are prototype prices for the SIH demo.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[760px] gap-4 sm:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[27px] border p-6 sm:p-7 ${
                  plan.popular
                    ? "border-[#147d75] bg-[#edf7f3] shadow-[0_15px_45px_rgba(20,125,117,0.08)]"
                    : "border-[#dce7e3] bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#193735] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white">
                    Best value
                  </div>
                )}

                <p className="text-sm font-extrabold text-[#193735]">
                  {plan.name}
                </p>

                <div className="mt-5 flex items-baseline">
                  <span className="display-font text-4xl font-extrabold tracking-[-0.05em] text-[#193735]">
                    {plan.price}
                  </span>

                  <span className="ml-1 text-sm font-semibold text-[#8a9b97]">
                    {plan.period}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "All OUR360+ features",
                    "Premium learning paths",
                    "Advanced AI experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <Check
                        size={15}
                        className="text-[#147d75]"
                      />

                      <span className="text-sm font-semibold text-[#526c67]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-[14px] px-5 py-3.5 text-sm font-bold ${
                    plan.popular
                      ? "bg-[#193735] text-white hover:bg-[#0e625c]"
                      : "border border-[#dce7e3] bg-white text-[#193735] hover:bg-[#f5f7f5]"
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FREE VS PREMIUM */}
        <section className="pb-10">
          <div className="our-card overflow-hidden">
            <div className="border-b border-[#e5ece9] px-6 py-6 sm:px-8">
              <p className="eyebrow">
                Our promise
              </p>

              <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735]">
                Premium should add depth, not restrict safety.
              </h2>
            </div>

            <div className="grid divide-y divide-[#e5ece9] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-6 sm:p-8">
                <p className="text-sm font-extrabold text-[#193735]">
                  OUR360 Free
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Essential health knowledge",
                    "Core knowledge library",
                    "Basic AI questions",
                    "Wellbeing tools",
                    "Rewards & streaks",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75]">
                        <Check size={13} />
                      </div>

                      <span className="text-sm font-semibold text-[#526c67]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#edf7f3] p-6 sm:p-8">
                <p className="text-sm font-extrabold text-[#193735]">
                  OUR360+
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Everything in Free",
                    "Deep-dive learning journeys",
                    "Advanced explainers",
                    "Guided wellbeing programs",
                    "Enhanced AI experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#193735] text-white">
                        <Check size={13} />
                      </div>

                      <span className="text-sm font-semibold text-[#526c67]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-5 text-center">
          <div className="mx-auto max-w-[650px]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#e1f0eb] text-[#147d75]">
              <Sparkles size={21} />
            </div>

            <h2 className="heading-font mt-5 text-2xl font-extrabold text-[#193735] sm:text-3xl">
              There's always more to discover.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#708783]">
              Start with the free experience. Upgrade when
              you're ready to go deeper.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("knowledge")}
              className="mt-6 inline-flex items-center gap-2 rounded-[14px] bg-[#193735] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e625c]"
            >
              Start exploring
              <ArrowRight size={16} />
            </button>
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
          <MessageCircle size={18} />
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
          onClick={() => onNavigate("rewards")}
        >
          <span className="text-[16px]">🏆</span>
          Rewards
        </button>
      </nav>
    </div>
  );
}

export default Premium;