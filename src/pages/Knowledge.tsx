import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Clock3,
  Heart,
  Lightbulb,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

export interface KnowledgeArticle {
  category: string;
  title: string;
  description: string;
  time: string;
  type: string;
  progress: number;
  featured: boolean;
  content: string[];
  takeaways: string[];
  related: string[];
}

interface KnowledgeProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
  onOpenArticle: (article: KnowledgeArticle) => void;
}

const categories = [
  "For you",
  "My Body",
  "My Mind",
  "Growing Up",
  "Relationships",
  "Health",
];

const articles: KnowledgeArticle[] = [
  {
    category: "My Body",
    title: "Why does your body change as you grow?",
    description:
      "A simple guide to understanding the changes happening inside and outside your body.",
    time: "4 min",
    type: "Explainer",
    progress: 65,
    featured: true,
    content: [
      "Your body goes through many changes as you grow, and those changes can feel confusing, exciting or even unsettling. The good news is that most changes are normal parts of development.",
      "Puberty brings shifts in hormones, energy, skin, mood and body shape. Some changes happen quickly, while others are gradual. That doesn't mean anything is wrong — it means your body is doing what it's meant to do as you grow.",
      "It's also normal to feel self-conscious or curious about how your body looks and behaves. Learning the basics can help you make sense of what you're feeling and remember that bodies do not all grow in the same way.",
      "If you notice something that feels really unusual, painful or persistent, it's a good idea to talk to a trusted adult, school nurse or health professional. Getting support early can make a big difference.",
    ],
    takeaways: [
      "Growth changes are usually normal parts of development.",
      "Bodies change at different speeds and in different ways.",
      "You deserve clear information and support when something feels off.",
    ],
    related: ["Stress and the body", "Healthy boundaries", "Myth or fact?"],
  },
  {
    category: "My Mind",
    title: "What actually happens when you're stressed?",
    description:
      "Understand what stress does to your brain and body — and why it feels the way it does.",
    time: "5 min",
    type: "Mind",
    progress: 0,
    featured: false,
    content: [
      "Stress is your body's way of reacting when it thinks something needs attention. It can be triggered by school pressure, social situations, family stress or even big life changes.",
      "When stress shows up, your body can feel tense, restless, tired or on edge. Your heart may beat faster, your breathing can get sharper, and your thoughts may race. These are not signs that something is wrong with you — they are signals that your body wants support.",
      "The goal isn't to eliminate stress completely. It's to notice it early, give yourself a little room to breathe and build habits that help you recover more easily.",
      "Small actions like moving your body, drinking water, getting enough sleep and talking to someone you trust can make a real difference.",
    ],
    takeaways: [
      "Stress is a normal response, not a personal failure.",
      "Your body often tells you when you need support.",
      "Small calming habits can lower the intensity of stress over time.",
    ],
    related: ["Why emotions feel overwhelming", "Healthy routines", "Sleep and focus"],
  },
  {
    category: "Growing Up",
    title: "Your body isn't supposed to look one way",
    description:
      "A reassuring look at body changes, development and why comparison can be misleading.",
    time: "6 min",
    type: "Body image",
    progress: 0,
    featured: false,
    content: [
      "Everyone's body goes through growth in a different pattern. Some people get taller earlier, some develop later, some have different curves, skin tone, hair patterns and body shapes. These differences are normal.",
      "Comparison can distort how you see yourself because social media often shows a narrow version of what bodies look like. Real bodies are much more varied than edited photos can show.",
      "It can help to remember that your body is not a project to fix. It's something to care for, respect and understand. The more you learn about how bodies actually develop, the less power comparison has over your confidence.",
      "If you find yourself feeling stuck in comparison, it's worth stepping back from certain content, limiting social media for a while and talking to someone who can help you reconnect with your own body.",
    ],
    takeaways: [
      "There is no single 'right' body shape or timeline for growth.",
      "Comparison often comes from unrealistic media standards.",
      "Self-respect grows when you focus on care instead of perfection.",
    ],
    related: ["Body changes as you grow", "Why emotions feel overwhelming", "Self-confidence"],
  },
  {
    category: "Health",
    title: "Myth or fact?",
    description:
      "Test what you know with some surprisingly common health myths.",
    time: "3 min",
    type: "Interactive",
    progress: 0,
    featured: false,
    content: [
      "Health myths spread fast because they feel memorable, simple or reassuring. But some of them can lead people to make decisions that aren't good for their bodies or minds.",
      "A fact can sound less catchy, but it usually helps you understand what actually works. For example, not every body change means something is wrong, and not every 'quick fix' is safe.",
      "That's why it's helpful to slow down and ask: does this claim come from a trusted source, and does it fit with how real bodies work? Careful thinking is a skill, and it's worth practicing.",
      "Being curious is a strength. If a health claim sounds too good to be true, it's worth checking more than one reliable source before making a decision.",
    ],
    takeaways: [
      "Not every popular claim is accurate.",
      "Reliable health information usually comes from evidence and context.",
      "It’s okay to question what you hear and look for better sources.",
    ],
    related: ["Why does your body change as you grow?", "Healthy routines", "Stress and the body"],
  },
  {
    category: "Relationships",
    title: "What does a healthy boundary look like?",
    description:
      "Learn how boundaries work and why they're important in every relationship.",
    time: "5 min",
    type: "Guide",
    progress: 0,
    featured: false,
    content: [
      "A boundary is a clear way of saying what feels okay, what doesn't, and what you need in order to feel safe and respected. Boundaries can be about time, communication, privacy, physical space or emotional energy.",
      "Healthy boundaries are not about being unkind. They are about being clear, honest and consistent. You can be warm and still say no. You can care about someone and still protect your own needs.",
      "People often learn boundaries from experience. If you've been unsure how to say no or ask for space, that's a skill you can build with practice.",
      "Setting boundaries can feel awkward at first, especially if you are used to putting other people first. But respectful relationships usually get stronger when both people understand each other's limits.",
    ],
    takeaways: [
      "Boundaries are about clarity, not punishment.",
      "Healthy relationships respect limits and communicate them clearly.",
      "You can practice boundaries in small, gentle steps.",
    ],
    related: ["Relationships basics", "Self-confidence", "Stress and the body"],
  },
  {
    category: "My Mind",
    title: "Why do emotions sometimes feel overwhelming?",
    description:
      "A simple way to understand strong emotions without judging yourself for having them.",
    time: "5 min",
    type: "Explainer",
    progress: 0,
    featured: false,
    content: [
      "Strong emotions can feel overwhelming when your brain and body are trying to react to something important. That might be stress, uncertainty, conflict, grief or even a lot of pressure all at once.",
      "Sometimes emotions hit hard because you've been holding them in or because there's not much room for recovery. When that happens, your feelings can feel bigger than usual and harder to manage.",
      "It helps to remember that feeling overwhelmed does not mean you're broken. It means you may need a little more support, rest or space to process what you're carrying.",
      "Simple grounding steps — slowing your breathing, naming what you feel, moving your body, or texting someone safe — can help you get through the moment without getting stuck in it.",
    ],
    takeaways: [
      "Emotions are signals, not proof that something is wrong.",
      "Feeling overwhelmed is a sign to slow down and support yourself.",
      "Grounding tools can help calm the body while the mind catches up.",
    ],
    related: ["Stress and the body", "Healthy routines", "Self-confidence"],
  },
];

function Knowledge({ profile, onNavigate, onOpenArticle }: KnowledgeProps) {
  const firstName = profile.name?.trim() || "there";

  const ageLabel =
    profile.age === "Under 13"
      ? "For your age"
      : profile.age === "13–17"
        ? "Teen-friendly"
        : "Personalized for you";

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
              className="nav-item nav-item-active"
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

      <main className="page-container pb-12 pt-8">

        {/* HEADER */}
        <section className="fade-up">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="mb-6 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
          >
            <ArrowLeft size={16} />
            Back home
          </button>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="our-pill mb-4">
                <BookOpen size={14} />
                Knowledge
              </div>

              <h1 className="display-font max-w-[700px] text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[#193735] sm:text-5xl lg:text-6xl">
                Curiosity is a
                <span className="text-[#147d75]"> good place to start.</span>
              </h1>

              <p className="mt-5 max-w-[640px] text-[16px] leading-7 text-[#708783]">
                Explore simple, trustworthy explanations about
                your body, mind, relationships and health.
                Learn at your own pace.
              </p>
            </div>

            {/* SEARCH */}
            <button
              type="button"
              className="flex h-[52px] w-full max-w-[340px] items-center gap-3 rounded-[16px] border border-[#dce7e3] bg-white px-4 text-left shadow-[0_8px_25px_rgba(25,55,53,0.04)] transition hover:border-[#a9c9c0]"
            >
              <Search
                size={19}
                className="text-[#8da19c]"
              />

              <span className="text-sm font-medium text-[#8da19c]">
                Search something you're curious about...
              </span>
            </button>
          </div>
        </section>

        <section className="mt-9">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  index === 0
                    ? "bg-[#193735] text-white"
                    : "border border-[#dce7e3] bg-white text-[#708783] hover:bg-[#edf7f3] hover:text-[#193735]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="page-section pt-0">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                {ageLabel}
              </p>

              <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735] sm:text-3xl">
                Pick your next topic
              </h2>
            </div>

            <span className="hidden text-sm font-semibold text-[#8a9b97] sm:block">
              {articles.length} discoveries
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenArticle(articles[0])}
            className="our-card our-card-hover group relative mb-5 w-full overflow-hidden p-0 text-left"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#e1f0eb] p-8">
                <div className="absolute left-6 top-6 rounded-full border border-[#147d75]/10 bg-white/70 px-3 py-1.5 text-[11px] font-bold text-[#147d75]">
                  FEATURED
                </div>

                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[2px] border-[#a9c9c0]">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white/80 bg-[#cce4dd]">
                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#147d75] text-white shadow-lg">
                      <Sparkles size={26} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="our-pill">
                    My Body
                  </span>

                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#8a9b97]">
                    <Clock3 size={13} />
                    4 min
                  </span>
                </div>

                <h3 className="heading-font mt-4 text-2xl font-extrabold tracking-[-0.035em] text-[#193735] sm:text-3xl">
                  Why does your body change as you grow?
                </h3>

                <p className="mt-3 max-w-[560px] text-sm leading-7 text-[#708783]">
                  A simple guide to understanding the changes happening inside and outside your body — without confusing medical language.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#147d75]">
                  Read article
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </button>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article, index) => (
              <button
                key={article.title}
                type="button"
                onClick={() => onOpenArticle(article)}
                className="our-card our-card-hover group overflow-hidden text-left"
              >
                <div
                  className={`relative flex h-[150px] items-center justify-center ${
                    index % 3 === 0
                      ? "bg-[#f8f3e8]"
                      : index % 3 === 1
                        ? "bg-[#edf7f3]"
                        : "bg-[#e9eeee]"
                  }`}
                >
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-extrabold text-[#526c67]">
                      {article.type}
                    </span>
                  </div>

                  <div className="flex h-18 w-18 items-center justify-center rounded-full border border-white/80 bg-white/45">
                    {index % 3 === 0 ? (
                      <Brain size={28} strokeWidth={1.6} className="text-[#147d75]" />
                    ) : index % 3 === 1 ? (
                      <Heart size={28} strokeWidth={1.6} className="text-[#147d75]" />
                    ) : (
                      <Lightbulb size={28} strokeWidth={1.6} className="text-[#907952]" />
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#147d75]">
                      {article.category}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-semibold text-[#8a9b97]">
                      <Clock3 size={12} />
                      {article.time}
                    </span>
                  </div>

                  <h3 className="heading-font mt-3 text-lg font-extrabold leading-snug text-[#193735]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#708783]">
                    {article.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#147d75]">
                      Read
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf7f3] text-[#147d75] transition group-hover:bg-[#193735] group-hover:text-white">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
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
          className="active"
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
          <Heart size={18} />
          Mind
        </button>

        <button
          type="button"
          onClick={() => onNavigate("rewards")}
        >
          <Trophy size={18} />
          Rewards
        </button>
      </nav>
    </div>
  );
}

export default Knowledge;