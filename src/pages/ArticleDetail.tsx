import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Heart,
  Lightbulb,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import type { Page, UserProfile } from "../App";
import type { KnowledgeArticle } from "./Knowledge";

interface ArticleDetailProps {
  article: KnowledgeArticle;
  profile: UserProfile;
  onNavigate: (page: Page) => void;
  onOpenArticle: (article: KnowledgeArticle) => void;
}

function ArticleDetail({
  article,
  profile,
  onNavigate,
  onOpenArticle,
}: ArticleDetailProps) {
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

      <main className="page-container pb-14 pt-8">
        <button
          type="button"
          onClick={() => onNavigate("knowledge")}
          className="mb-6 flex items-center gap-2 text-sm font-bold text-[#708783] transition hover:text-[#193735]"
        >
          <ArrowLeft size={16} />
          Back to Knowledge
        </button>

        <article className="our-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden bg-[#eaf2ee] p-8">
              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-[#147d75]/15 bg-white/70 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#147d75]">
                  {article.type}
                </span>
              </div>

              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[2px] border-[#bdd5cf] bg-white/50">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-white/80 bg-[#cfe3dd]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#193735] text-white shadow-lg">
                    {article.category === "My Mind" ? (
                      <Brain size={30} />
                    ) : article.category === "Relationships" ? (
                      <Heart size={30} />
                    ) : article.category === "Health" ? (
                      <Lightbulb size={30} />
                    ) : (
                      <BookOpen size={30} />
                    )}
                  </div>
                </div>

                <div className="absolute -right-2 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-[#193735] text-white shadow-md">
                  <Star size={17} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="our-pill">{article.category}</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#8a9b97]">
                  <Clock3 size={13} />
                  {article.time}
                </span>
              </div>

              <h1 className="heading-font mt-5 text-3xl font-extrabold tracking-[-0.04em] text-[#193735] sm:text-4xl">
                {article.title}
              </h1>

              <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-[#708783]">
                {article.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="primary-btn"
                >
                  <CheckCircle2 size={17} />
                  Mark as learned
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("ai")}
                  className="secondary-btn"
                >
                  Ask OUR360 AI
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </article>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="our-card p-6 sm:p-7">
              <p className="eyebrow">Full article</p>

              <div className="mt-5 space-y-5 text-[15px] leading-8 text-[#4f6664]">
                {article.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="our-card p-6 sm:p-7">
                <p className="eyebrow">Key takeaways</p>

                <ul className="mt-5 space-y-3">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-sm leading-6 text-[#4f6664]">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e1f0eb] text-[#147d75]">
                        <CheckCircle2 size={12} />
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="our-card p-6 sm:p-7">
                <p className="eyebrow">Related topics</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.related.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() =>
                        onOpenArticle({
                          ...article,
                          title: topic,
                          description: `Explore more about ${topic.toLowerCase()}.`,
                          content: [
                            `This article is a quick look at ${topic.toLowerCase()}.`,
                            "Use the related guidance in this section to continue learning at your own pace.",
                          ],
                          takeaways: [
                            `You can explore ${topic.toLowerCase()} in more detail.`,
                            "Keep building your understanding one topic at a time.",
                          ],
                          related: [article.title, "Stress and the body", "Wellbeing basics"],
                        })
                      }
                      className="rounded-full border border-[#dce7e3] bg-[#f8fbfa] px-3 py-2 text-xs font-bold text-[#31514d] transition hover:border-[#a9c9c0] hover:bg-[#edf7f3]"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-6">
          <div className="our-card p-6 sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">Keep learning</p>
                <h2 className="heading-font mt-2 text-2xl font-extrabold text-[#193735]">
                  Want to continue exploring?
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate("knowledge")}
                className="secondary-btn"
              >
                Back to Knowledge
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className="mobile-bottom-nav">
        <button type="button" onClick={() => onNavigate("home")}>
          <Sparkles size={18} />
          Home
        </button>

        <button type="button" className="active" onClick={() => onNavigate("knowledge")}>
          <BookOpen size={18} />
          Learn
        </button>

        <button type="button" onClick={() => onNavigate("ai")}>
          <Sparkles size={18} />
          Ask
        </button>

        <button type="button" onClick={() => onNavigate("wellbeing")}>
          <Heart size={18} />
          Community
        </button>

        <button type="button" onClick={() => onNavigate("rewards")}>
          <Trophy size={18} />
          Rewards
        </button>
      </nav>
    </div>
  );
}

export default ArticleDetail;
