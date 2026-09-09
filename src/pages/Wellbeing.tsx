import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface WellbeingProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

const communityHighlights = [
  "Anonymous questions welcomed",
  "Moderated, respectful conversations",
  "Small-group support spaces",
];

const mentors = [
  {
    name: "Aisha Morgan",
    role: "Verified therapist",
    focus: "Stress, confidence and boundaries",
    availability: "Tue • Thu • Sat",
  },
  {
    name: "Daniel Lee",
    role: "School counselor",
    focus: "School pressure and identity",
    availability: "Mon • Wed • Fri",
  },
  {
    name: "Noor Patel",
    role: "Sexual health educator",
    focus: "Body changes and questions",
    availability: "Every weekend",
  },
];

function Wellbeing({ profile, onNavigate }: WellbeingProps) {
  const firstName = profile.name?.trim() || "there";

  return (
    <div className="app-shell min-h-screen">
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
              className="nav-item nav-item-active"
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

      <main className="page-container pb-12 pt-8">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-7 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
        >
          <ArrowLeft size={16} />
          Back home
        </button>

        <section className="relative overflow-hidden rounded-[32px] bg-[#edf7f3] px-6 py-9 sm:px-10 sm:py-11">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d5ebe4] blur-2xl" />

          <div className="relative z-10 grid items-center gap-9 lg:grid-cols-[1fr_360px]">
            <div className="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-extrabold text-[#147d75]">
                <Users size={14} />
                Community
              </div>

              <h1 className="display-font max-w-[680px] text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] text-[#193735] sm:text-5xl lg:text-6xl">
                Support that feels
                <span className="block text-[#147d75]">
                  human and helpful.
                </span>
              </h1>

              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-[#5d7c77]">
                Talk with people who understand, get guidance from verified mentors,
                and find the kind of support that fits where you are right now.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate("ai")}
                  className="inline-flex items-center gap-2 rounded-[14px] bg-[#193735] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0e625c]"
                >
                  Open support chat
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("profile")}
                  className="inline-flex items-center gap-2 rounded-[14px] border border-[#d1e2df] bg-white/70 px-5 py-3 text-sm font-bold text-[#193735]"
                >
                  <ShieldCheck size={15} />
                  View mentors
                </button>
              </div>
            </div>

            <div className="hidden h-[260px] items-center justify-center lg:flex">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#b4d0ca] bg-white/55">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#193735] text-[#e1f0eb] shadow-sm">
                  <Heart size={34} strokeWidth={1.7} />
                </div>

                <div className="absolute -right-1 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f3e8] text-[#7e6b4e] shadow-md">
                  <MessageCircle size={18} />
                </div>

                <div className="absolute -bottom-1 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75] shadow-md">
                  <Users size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="mb-6">
            <p className="eyebrow">Community support chat</p>

            <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
              Talk, listen, and support each other.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="our-card rounded-[28px] p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#e1f0eb] text-[#147d75]">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#193735]">SafeSpace Chat</p>
                    <p className="text-xs text-[#708783]">Moderated support room</p>
                  </div>
                </div>

                <span className="rounded-full bg-[#edf7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#147d75]">
                  Online now
                </span>
              </div>

              <div className="space-y-3 rounded-[22px] bg-[#f5f7f5] p-4">
                <div className="max-w-[85%] rounded-[18px] rounded-bl-md bg-white px-4 py-3 text-sm leading-6 text-[#31514d] shadow-sm">
                  Anyone else feeling like they need a little space to breathe today?
                </div>

                <div className="ml-auto max-w-[85%] rounded-[18px] rounded-br-md bg-[#e1f0eb] px-4 py-3 text-sm leading-6 text-[#193735] shadow-sm">
                  I'm here. Sometimes just naming it helps. You're not alone.
                </div>

                <div className="max-w-[85%] rounded-[18px] rounded-bl-md bg-white px-4 py-3 text-sm leading-6 text-[#31514d] shadow-sm">
                  Thank you. I've been wondering whether what I'm feeling is normal.
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <input
                  type="text"
                  value="Share something gentle..."
                  readOnly
                  className="w-full rounded-[14px] border border-[#dce7e3] bg-white px-4 py-3 text-sm text-[#708783]"
                />

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#193735] text-white"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="our-card rounded-[28px] p-5">
              <p className="eyebrow">Why it helps</p>

              <div className="mt-5 space-y-3">
                {communityHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[18px] bg-[#f5f7f5] p-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75]">
                      <Check size={12} />
                    </div>

                    <p className="text-sm font-semibold text-[#31514d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="eyebrow">Mentors</p>

              <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
                Connect with qualified people who can guide you.
              </h2>
            </div>

            <span className="hidden text-sm font-semibold text-[#8a9b97] sm:block">
              Verified support
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {mentors.map((mentor) => (
              <article
                key={mentor.name}
                className="our-card our-card-hover rounded-[27px] border border-[#dce7e3] bg-white p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e1f0eb] text-[#147d75]">
                    <UserRound size={20} />
                  </div>

                  <span className="rounded-full bg-[#edf7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#147d75]">
                    {mentor.role}
                  </span>
                </div>

                <h3 className="heading-font mt-6 text-xl font-extrabold text-[#193735]">
                  {mentor.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#708783]">
                  {mentor.focus}
                </p>

                <div className="mt-5 rounded-[16px] bg-[#f5f7f5] px-3 py-2 text-xs font-bold text-[#526c67]">
                  {mentor.availability}
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-[14px] border border-[#dce7e3] bg-white px-4 py-2.5 text-sm font-bold text-[#193735] transition hover:bg-[#edf7f3]"
                >
                  Book a session
                  <ChevronRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

      </main>

      <nav className="mobile-bottom-nav">
        <button type="button" onClick={() => onNavigate("home")}>
          <Sparkles size={18} />
          Home
        </button>

        <button type="button" onClick={() => onNavigate("knowledge")}>
          <BookOpen size={18} />
          Learn
        </button>

        <button type="button" onClick={() => onNavigate("ai")}>
          <MessageCircle size={18} />
          Ask
        </button>

        <button type="button" className="active" onClick={() => onNavigate("wellbeing")}>
          <Heart size={18} />
          Community
        </button>

        <button type="button" onClick={() => onNavigate("rewards")}>
          <span className="text-[16px] leading-none">🏆</span>
          Rewards
        </button>
      </nav>
    </div>
  );
}

export default Wellbeing;
