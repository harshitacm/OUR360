import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  CircleHelp,
  Edit3,
  Lock,
  LogOut,
  MessageCircle,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface ProfileProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

function Profile({ profile, onNavigate }: ProfileProps) {
  const displayName = profile.name?.trim() || "OUR360 Explorer";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

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

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#193735] text-white">
            <span className="text-sm font-extrabold">
              {initials || "U"}
            </span>
          </div>
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

        {/* PROFILE HERO */}
        <section className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(25,55,53,0.07)]">
          <div className="h-32 bg-[#193735] sm:h-40">
            <div className="h-full bg-[radial-gradient(circle_at_80%_20%,rgba(169,201,192,0.28),transparent_25%),radial-gradient(circle_at_20%_100%,rgba(20,125,117,0.35),transparent_30%)]" />
          </div>

          <div className="px-6 pb-7 sm:px-9">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border-4 border-white bg-[#e1f0eb] text-[#147d75] shadow-lg sm:h-28 sm:w-28">
                  <span className="display-font text-3xl font-extrabold">
                    {initials || "U"}
                  </span>
                </div>

                <div className="pb-1">
                  <p className="eyebrow">
                    Your OUR360 profile
                  </p>

                  <h1 className="heading-font mt-1 text-2xl font-extrabold text-[#193735] sm:text-3xl">
                    {displayName}
                  </h1>
                </div>
              </div>

              <button
                type="button"
                className="secondary-btn w-fit"
              >
                <Edit3 size={16} />
                Edit profile
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="our-pill">
                <UserRound size={13} />
                {profile.age || "Age not set"}
              </span>

              <span className="our-pill-light">
                {profile.gender || "Identity not set"}
              </span>

              <span className="our-pill-light">
                <ShieldCheck size={13} />
                Private profile
              </span>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="soft-card p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#147d75]">
                  <Lock size={19} />
                </div>

                <div>
                  <h2 className="heading-font text-lg font-extrabold text-[#193735]">
                    Your space stays private.
                  </h2>

                  <p className="mt-1 max-w-[650px] text-sm leading-6 text-[#708783]">
                    Sensitive questions, reflections and personal choices stay private as part of your OUR360 experience.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="secondary-btn shrink-0"
              >
                <ShieldCheck size={16} />
                Privacy settings
              </button>
            </div>
          </div>
        </section>

        <section className="page-section pt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <SettingRow
              icon={<Settings size={18} />}
              title="App preferences"
              description="Notifications, appearance and experience"
            />

            <SettingRow
              icon={<ShieldCheck size={18} />}
              title="Privacy & safety"
              description="Control your personal information and safety options"
            />

            <SettingRow
              icon={<CircleHelp size={18} />}
              title="Help & support"
              description="Get help using OUR360"
            />

            <SettingRow
              icon={<BookOpen size={18} />}
              title="About OUR360"
              description="How OUR360 works and what it stands for"
            />

            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="our-card our-card-hover flex items-center justify-between gap-4 p-5 text-left md:col-span-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#f7e8e0] text-[#8d5e46]">
                  <LogOut size={18} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#193735]">
                    Log out
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#708783]">
                    Leave this profile and return to the home view
                  </p>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-[#9aaea9]"
              />
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
          Community
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

function SettingRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="our-card our-card-hover flex items-center justify-between gap-4 p-5 text-left"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#edf7f3] text-[#147d75]">
          {icon}
        </div>

        <div>
          <p className="text-sm font-extrabold text-[#193735]">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-[#708783]">
            {description}
          </p>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-[#9aaea9]"
      />
    </button>
  );
}

export default Profile;