import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  ShieldCheck,
  BookOpen,
  UserRound,
} from "lucide-react";
import type { UserProfile } from "../App";

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const ageOptions = Array.from({ length: 93 }, (_, index) => 8 + index);

const genders = [
  "Female",
  "Male",
  "Non-binary",
];

const interests = [
  "My body",
  "Growing up",
  "My mind",
  "Relationships",
  "Sexual & reproductive health",
  "Hygiene",
  "Fitness & lifestyle",
  "Self-confidence",
];

function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const ageScrollRef = useRef<HTMLDivElement | null>(null);

  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: "",
    gender: "",
    interests: [],
  });

  const updateProfile = (
    field: keyof UserProfile,
    value: string,
  ) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const selectedAge = profile.age ? Number(profile.age) : null;

  useEffect(() => {
    if (!selectedAge || !ageScrollRef.current) {
      return;
    }

    const selectedButton = ageScrollRef.current.querySelector<HTMLButtonElement>(
      `button[data-age="${selectedAge}"]`,
    );

    if (selectedButton) {
      selectedButton.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedAge]);

  const toggleInterest = (interest: string) => {
    setProfile((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const canContinue = () => {
    if (step === 1) return profile.age !== "";
    if (step === 2) return profile.gender !== "";
    return profile.interests.length > 0;
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (step < 3) {
      setStep((current) => current + 1);
    } else {
      onComplete(profile);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7f5]">
      <div className="mx-auto flex min-h-screen max-w-[1380px] flex-col lg:flex-row">

        {/* LEFT VISUAL PANEL */}
        <section className="relative hidden min-h-screen w-[42%] overflow-hidden bg-[#193735] px-12 py-10 text-white lg:flex lg:flex-col">
          {/* Decorative shapes */}
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -left-32 h-[470px] w-[470px] rounded-full border border-white/10" />
          <div className="absolute right-20 top-28 h-28 w-28 rounded-full bg-[#147d75]/30 blur-2xl" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#e1f0eb] text-[#193735]">
              <Sparkles size={19} strokeWidth={2.3} />
            </div>

            <span className="font-['Manrope'] text-xl font-extrabold tracking-[-0.04em]">
              OUR360
            </span>
          </div>

          {/* Main message */}
          <div className="relative z-10 my-auto max-w-[470px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#d9eeea]">
              <ShieldCheck size={16} />
              Private by design
            </div>

            <h1 className="font-['Manrope'] text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] xl:text-6xl">
              A space to
              <span className="block text-[#a9d5cb]">
                understand yourself.
              </span>
            </h1>

            <p className="mt-7 max-w-[410px] text-[17px] leading-8 text-white/65">
              Learn about your body, understand your mind,
              ask questions without judgment, and discover
              what matters to you.
            </p>

            {/* Mini feature row */}
            <div className="mt-12 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <BookOpen size={19} className="mb-5 text-[#a9d5cb]" />
                <p className="text-sm font-bold">Learn</p>
                <p className="mt-1 text-xs leading-5 text-white/45">
                  Knowledge made simple
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <Brain size={19} className="mb-5 text-[#a9d5cb]" />
                <p className="text-sm font-bold">Understand</p>
                <p className="mt-1 text-xs leading-5 text-white/45">
                  Make sense of yourself
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <Heart size={19} className="mb-5 text-[#a9d5cb]" />
                <p className="text-sm font-bold">Grow</p>
                <p className="mt-1 text-xs leading-5 text-white/45">
                  Build better habits
                </p>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-white/35">
            Your information stays yours.
          </p>
        </section>

        {/* RIGHT CONTENT */}
        <section className="flex min-h-screen flex-1 flex-col px-6 py-7 sm:px-10 lg:px-16 xl:px-24">

          {/* Mobile logo */}
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#193735] text-white">
                <Sparkles size={17} />
              </div>

              <span className="font-['Manrope'] text-lg font-extrabold tracking-[-0.04em]">
                OUR360
              </span>
            </div>

            <span className="text-xs font-semibold text-[#708783]">
              Step {step} of 3
            </span>
          </div>

          {/* Desktop progress */}
          <div className="hidden items-center justify-between lg:flex">
            <span className="text-sm font-semibold text-[#708783]">
              Let's personalize your space
            </span>

            <span className="text-sm font-semibold text-[#708783]">
              Step {step} of 3
            </span>
          </div>

          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#e3ebe8]">
            <div
              className="h-full rounded-full bg-[#147d75] transition-all duration-500"
              style={{
                width: `${(step / 3) * 100}%`,
              }}
            />
          </div>

          {/* FORM AREA */}
          <div className="mx-auto flex w-full max-w-[720px] flex-1 flex-col justify-center py-10">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="fade-up">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#e1f0eb] text-[#147d75]">
                  <UserRound size={25} />
                </div>

                <p className="eyebrow mb-3">
                  Start with you
                </p>

                <h2 className="font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#193735] sm:text-5xl">
                  Select your age
                </h2>

                <p className="mt-4 max-w-[570px] text-[16px] leading-7 text-[#708783]">
                  Choose your age to help OUR360 keep the
                  content and language appropriate for you,
                  while still letting you explore freely.
                </p>

                <div className="mt-9 age-picker-shell">
                  <div
                    className="pointer-events-none absolute inset-x-4 top-1/2 z-10 h-16 -translate-y-1/2 rounded-[20px] border border-[#d8d2ca] bg-[#f5f7f4]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                    aria-hidden="true"
                  />

                  <div
                    ref={ageScrollRef}
                    className="age-picker-scroll"
                    role="listbox"
                    aria-label="Select your age"
                  >
                    {ageOptions.map((age) => {
                      const selected = selectedAge === age;

                      return (
                        <button
                          key={age}
                          type="button"
                          data-age={age}
                          role="option"
                          aria-selected={selected}
                          onClick={() => updateProfile("age", String(age))}
                          className={`age-option ${selected ? "selected" : ""}`}
                        >
                          <span>{age}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#f8f3e8] px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a7550]">
                      Selected
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#4e493f]">
                      {selectedAge ? `${selectedAge} years old` : "Choose your age"}
                    </p>
                  </div>

                  <div className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#147d75]">
                    {selectedAge ? "Ready" : "Choose one"}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="fade-up">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#e1f0eb] text-[#147d75]">
                  <Heart size={25} />
                </div>

                <p className="eyebrow mb-3">
                  Your experience
                </p>

                <h2 className="font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#193735] sm:text-5xl">
                  How do you identify?
                </h2>

                <p className="mt-4 max-w-[570px] text-[16px] leading-7 text-[#708783]">
                  This helps us make recommendations more
                  relevant. You can change this anytime.
                </p>

                <div className="mt-9 space-y-3">
                  {genders.map((gender) => {
                    const selected =
                      profile.gender === gender;

                    return (
                      <button
                        key={gender}
                        type="button"
                        onClick={() =>
                          updateProfile("gender", gender)
                        }
                        className={`flex w-full items-center justify-between rounded-[20px] border px-6 py-5 text-left transition-all ${
                          selected
                            ? "border-[#147d75] bg-[#e1f0eb] shadow-[0_8px_25px_rgba(20,125,117,0.08)]"
                            : "border-[#dce7e3] bg-white hover:-translate-y-0.5 hover:border-[#a9c9c0]"
                        }`}
                      >
                        <div>
                          <p
                            className={`font-bold ${
                              selected
                                ? "text-[#0e625c]"
                                : "text-[#31514d]"
                            }`}
                          >
                            {gender}
                          </p>

                          <p className="mt-1 text-sm text-[#708783]">
                            {gender === "Non-binary"
                              ? "A space without assumptions."
                              : "Personalized content and recommendations."}
                          </p>
                        </div>

                        <div
                          className={`h-5 w-5 rounded-full border-2 ${
                            selected
                              ? "border-[#147d75] bg-[#147d75]"
                              : "border-[#cbd9d5]"
                          }`}
                        >
                          {selected && (
                            <div className="m-[3px] h-2.5 w-2.5 rounded-full bg-white" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-6 text-sm leading-6 text-[#708783]">
                  Your identity doesn't decide what health
                  you need. It simply helps us avoid making
                  assumptions.
                </p>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="fade-up">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#e1f0eb] text-[#147d75]">
                  <Sparkles size={25} />
                </div>

                <p className="eyebrow mb-3">
                  Make it yours
                </p>

                <h2 className="font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#193735] sm:text-5xl">
                  What are you curious about?
                </h2>

                <p className="mt-4 max-w-[600px] text-[16px] leading-7 text-[#708783]">
                  Pick anything that interests you. We'll
                  shape your discovery feed around it.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {interests.map((interest) => {
                    const selected =
                      profile.interests.includes(interest);

                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() =>
                          toggleInterest(interest)
                        }
                        className={`rounded-full border px-4 py-3 text-sm font-bold transition-all ${
                          selected
                            ? "border-[#147d75] bg-[#193735] text-white"
                            : "border-[#dce7e3] bg-white text-[#31514d] hover:border-[#a9c9c0] hover:bg-[#edf7f3]"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[22px] border border-[#dce7e3] bg-white p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-[#147d75]"
                    />

                    <div>
                      <p className="font-bold text-[#193735]">
                        No email required
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#708783]">
                        You can continue privately. We only
                        use what you choose to personalize
                        your OUR360 experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FOOTER CONTROLS */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={previousStep}
                disabled={step === 1}
                className={`text-sm font-bold transition ${
                  step === 1
                    ? "pointer-events-none opacity-0"
                    : "text-[#708783] hover:text-[#193735]"
                }`}
              >
                Back
              </button>

              <button
                type="button"
                disabled={!canContinue()}
                onClick={nextStep}
                className={`primary-btn min-w-[150px] ${
                  !canContinue()
                    ? "opacity-40"
                    : ""
                }`}
              >
                {step === 3 ? "Enter OUR360" : "Continue"}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Bottom privacy note */}
          <div className="pb-2 text-center">
            <p className="text-xs font-medium text-[#8a9b97]">
              OUR360 • Learn privately • Grow confidently
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Onboarding;