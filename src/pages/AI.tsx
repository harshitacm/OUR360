import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import type { Page, UserProfile } from "../App";

interface AIProps {
  profile: UserProfile;
  onNavigate: (page: Page) => void;
}

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

const questionSuggestions = [
  {
    icon: "body",
    label: "My Body",
    question: "Why does my body change as I grow?",
  },
  {
    icon: "mind",
    label: "My Mind",
    question: "Why do I sometimes feel overwhelmed?",
  },
  {
    icon: "health",
    label: "Health",
    question: "How do I know if something is normal?",
  },
  {
    icon: "embarrassed",
    label: "Something I'm embarrassed to ask",
    question: "Is it normal to have questions about my body?",
  },
];

function getDemoResponse(question: string) {
  const lower = question.toLowerCase();

  if (
    lower.includes("body") ||
    lower.includes("grow") ||
    lower.includes("puberty") ||
    lower.includes("change")
  ) {
    return `Bodies change at different times and in different ways, especially while growing. Things like height, skin, body shape, hair and emotions can all change as your body develops.\n\nThere isn't one “correct” timeline. If you're worried about a specific change, tell me what you're noticing and I can explain it in simple terms.`;
  }

  if (
    lower.includes("stress") ||
    lower.includes("overwhelm") ||
    lower.includes("anxious") ||
    lower.includes("emotion")
  ) {
    return `Feeling overwhelmed can happen when your brain and body are dealing with more than they feel able to handle at that moment.\n\nA useful first step is to slow things down: take a few steady breaths, name what you're feeling, and focus on one thing you can deal with right now.\n\nIf these feelings are intense, persistent, or affecting everyday life, talking with a trusted person or mental-health professional can help.`;
  }

  if (
    lower.includes("normal") ||
    lower.includes("worried") ||
    lower.includes("wrong")
  ) {
    return `It's completely okay to wonder whether something you're experiencing is normal. Bodies and experiences vary a lot from person to person.\n\nI can help you understand general health information, but I can't tell you whether a specific medical condition is present. If you describe what you're experiencing, I can explain what is commonly known and when it may be worth talking to a healthcare professional.`;
  }

  if (
    lower.includes("embarrass") ||
    lower.includes("ashamed") ||
    lower.includes("awkward")
  ) {
    return `You don't need to feel embarrassed for being curious about your body or health. Questions are one of the best ways to understand yourself.\n\nYou can ask things here in your own words. I'll keep the explanation respectful, simple and appropriate for your age.`;
  }

  return `That's a really good question. There isn't anything embarrassing about wanting to understand yourself better.\n\nI can explain health and wellbeing topics in simple language, help you explore related knowledge, and point you toward reliable information.\n\nIf you want, tell me a little more about what you're wondering about and we'll take it from there.`;
}

function AI({ onNavigate }: AIProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const nextMessageId = useRef(1);

  const sendMessage = (question?: string) => {
    const text = (question ?? input).trim();

    if (!text) return;

    const userId = nextMessageId.current;
    nextMessageId.current += 1;

    const userMessage: Message = {
      id: userId,
      sender: "user",
      text,
    };

    const aiMessage: Message = {
      id: nextMessageId.current,
      sender: "ai",
      text: getDemoResponse(text),
    };

    nextMessageId.current += 1;

    setMessages((current) => [
      ...current,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  const clearConversation = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className="app-shell min-h-screen">
      {/* NAV */}
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
              className="nav-item nav-item-active"
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
            <UserRound size={18} />
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

        {/* HEADER */}
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_360px]">

          <div className="fade-up">
            <div className="our-pill mb-5">
              <Sparkles size={14} />
              OUR360 AI
            </div>

            <h1 className="display-font max-w-[700px] text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] text-[#193735] sm:text-5xl lg:text-6xl">
              Ask what you
              <span className="block text-[#147d75]">
                can't ask anyone.
              </span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-[#708783]">
              A private place to ask questions about your
              body, mind, health and growing up — without
              judgment or embarrassment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-[#edf7f3] px-4 py-2.5 text-xs font-bold text-[#147d75]">
                <ShieldCheck size={14} />
                Private
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#edf7f3] px-4 py-2.5 text-xs font-bold text-[#147d75]">
                <Heart size={14} />
                No judgment
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#edf7f3] px-4 py-2.5 text-xs font-bold text-[#147d75]">
                <Brain size={14} />
                Age-aware
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="hidden lg:block">
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-[30px] bg-[#e1f0eb]">
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/50 blur-2xl" />

              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#147d75]/15">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white bg-white/65 shadow-sm">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#193735] text-white shadow-lg">
                    <Sparkles size={31} />
                  </div>
                </div>

                <div className="absolute -right-2 top-9 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#147d75] shadow-md">
                  <MessageCircle size={19} />
                </div>

                <div className="absolute -bottom-1 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f3e8] text-[#907952] shadow-md">
                  <LightbulbIcon />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAT AREA */}
        <section className="mt-9 grid gap-5 lg:grid-cols-[1fr_310px]">

          {/* CHAT */}
          <div className="our-card overflow-hidden">

            {/* CHAT HEADER */}
            <div className="flex items-center justify-between border-b border-[#e5ece9] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#193735] text-white">
                  <Sparkles size={17} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#193735]">
                    OUR360 AI
                  </p>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#147d75]" />
                    <span className="text-[11px] font-semibold text-[#8a9b97]">
                      Here to help you understand
                    </span>
                  </div>
                </div>
              </div>

              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={clearConversation}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-[#8a9b97] transition hover:bg-[#f5f7f5] hover:text-[#193735]"
                >
                  <X size={14} />
                  Clear
                </button>
              )}
            </div>

            {/* MESSAGES */}
            <div className="min-h-[390px] bg-[#fbfcfb] px-5 py-6 sm:px-7">

              {messages.length === 0 ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#e1f0eb] text-[#147d75]">
                    <MessageCircle size={27} />
                  </div>

                  <h2 className="heading-font mt-5 text-xl font-extrabold text-[#193735]">
                    What's on your mind?
                  </h2>

                  <p className="mt-2 max-w-[430px] text-sm leading-6 text-[#708783]">
                    Ask in your own words. You don't need to
                    know the medical term or phrase your question
                    perfectly.
                  </p>

                  <div className="mt-7 grid w-full max-w-[650px] gap-2 sm:grid-cols-2">
                    {questionSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.label}
                        type="button"
                        onClick={() =>
                          sendMessage(suggestion.question)
                        }
                        className="group flex items-center justify-between rounded-[15px] border border-[#dce7e3] bg-white px-4 py-3.5 text-left transition hover:border-[#a9c9c0] hover:bg-[#edf7f3]"
                      >
                        <div className="flex items-center gap-3">
                          <SuggestionIcon
                            type={suggestion.icon}
                          />

                          <span className="text-sm font-bold text-[#31514d]">
                            {suggestion.label}
                          </span>
                        </div>

                        <ChevronRight
                          size={15}
                          className="text-[#a2b0ad] transition group-hover:translate-x-0.5"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.sender === "ai" && (
                        <div className="mr-3 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#193735] text-white">
                          <Sparkles size={14} />
                        </div>
                      )}

                      <div
                        className={`max-w-[80%] rounded-[20px] px-4 py-3.5 text-sm leading-6 ${
                          message.sender === "user"
                            ? "rounded-br-[6px] bg-[#193735] text-white"
                            : "rounded-bl-[6px] bg-[#e8f2ef] text-[#31514d]"
                        }`}
                      >
                        {message.text.split("\n").map(
                          (paragraph, index) => (
                            <p
                              key={index}
                              className={
                                index > 0 ? "mt-3" : ""
                              }
                            >
                              {paragraph}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="border-t border-[#e5ece9] bg-white p-4 sm:p-5">
              <div className="flex items-end gap-2 rounded-[18px] border border-[#dce7e3] bg-[#f9fbfa] p-2">
                <textarea
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={1}
                  placeholder="Ask anything you're curious about..."
                  className="min-h-[42px] flex-1 resize-none border-0 bg-transparent px-2 py-2.5 text-sm text-[#193735] outline-none placeholder:text-[#9aaba7]"
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#193735] text-white transition hover:bg-[#0e625c] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Send size={17} />
                </button>
              </div>

              <p className="mt-3 text-center text-[10px] font-medium leading-5 text-[#9aaba7]">
                OUR360 AI provides educational information,
                not medical diagnosis or treatment.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4">

            {/* PRIVACY */}
            <div className="our-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#e1f0eb] text-[#147d75]">
                <ShieldCheck size={19} />
              </div>

              <h3 className="heading-font mt-5 text-lg font-extrabold text-[#193735]">
                Your space, your questions.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#708783]">
                You don't have to use the right words,
                explain yourself perfectly, or worry about
                being judged.
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowPrivacy((current) => !current)
                }
                className="mt-4 text-sm font-bold text-[#147d75]"
              >
                {showPrivacy
                  ? "Hide details"
                  : "How privacy works"}
              </button>

              {showPrivacy && (
                <div className="mt-4 rounded-[15px] bg-[#f5f7f5] p-4 text-xs leading-5 text-[#708783]">
                  OUR360 only asks for information needed to
                  personalize the experience. Sensitive
                  questions should be treated carefully, and
                  the AI is designed to provide education
                  rather than diagnosis.
                </div>
              )}
            </div>

            {/* RELATED KNOWLEDGE */}
            <button
              type="button"
              onClick={() => onNavigate("knowledge")}
              className="our-card our-card-hover w-full p-6 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#f8f3e8] text-[#907952]">
                  <BookOpen size={19} />
                </div>

                <ArrowRight
                  size={16}
                  className="text-[#9aa9a5]"
                />
              </div>

              <p className="eyebrow mt-5">
                Go deeper
              </p>

              <h3 className="heading-font mt-2 text-lg font-extrabold text-[#193735]">
                Explore the knowledge library
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#708783]">
                Turn your question into something you can
                actually understand.
              </p>
            </button>

            {/* WELLBEING */}
            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="our-card our-card-hover w-full bg-[#edf7f3] p-6 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-white text-[#147d75]">
                  <Heart size={19} />
                </div>

                <ArrowRight
                  size={16}
                  className="text-[#9aa9a5]"
                />
              </div>

              <p className="eyebrow mt-5">
                Feeling something?
              </p>

              <h3 className="heading-font mt-2 text-lg font-extrabold text-[#193735]">
                Take a moment for yourself.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#708783]">
                Explore wellbeing activities and guided
                reflection.
              </p>
            </button>
          </aside>
        </section>

        {/* TRUST STRIP */}
        <section className="mt-8 rounded-[24px] border border-[#dce7e3] bg-white p-5">
          <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75]">
              <CheckCircle2 size={19} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-extrabold text-[#193735]">
                Learn, don't self-diagnose.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#8a9b97]">
                OUR360 helps you understand health information
                and know when it's worth seeking professional
                support.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("wellbeing")}
              className="flex items-center gap-1 text-sm font-bold text-[#147d75]"
            >
              More support
              <ChevronRight size={15} />
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
          className="active"
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
          Mind
        </button>

        <button
          type="button"
          onClick={() => onNavigate("rewards")}
        >
          <TrophyIcon />
          Rewards
        </button>
      </nav>
    </div>
  );
}

function SuggestionIcon({ type }: { type: string }) {
  if (type === "body") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#e1f0eb] text-[#147d75]">
        <UserRound size={15} />
      </div>
    );
  }

  if (type === "mind") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#edf7f3] text-[#147d75]">
        <Brain size={15} />
      </div>
    );
  }

  if (type === "health") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#f8f3e8] text-[#907952]">
        <Heart size={15} />
      </div>
    );
  }

  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#193735] text-white">
      <MessageCircle size={15} />
    </div>
  );
}

function LightbulbIcon() {
  return (
    <span className="text-[18px] leading-none">
      ✦
    </span>
  );
}

function TrophyIcon() {
  return (
    <span className="text-[16px] leading-none">
      🏆
    </span>
  );
}

export default AI;