import { useState } from "react";
import Onboarding from "./pages/Onboarding.tsx";
import Home from "./pages/Home.tsx";
import Body from "./pages/Body.tsx";
import Explore from "./pages/explore.tsx";
import Knowledge, { type KnowledgeArticle } from "./pages/Knowledge.tsx";
import AI from "./pages/AI.tsx";
import Wellbeing from "./pages/Wellbeing.tsx";
import Rewards from "./pages/Rewards.tsx";
import Premium from "./pages/Premium.tsx";
import Profile from "./pages/Profile.tsx";
import ArticleDetail from "./pages/ArticleDetail.tsx";

export type Page =
  | "home"
  | "body"
  | "explore"
  | "knowledge"
  | "article"
  | "ai"
  | "wellbeing"
  | "rewards"
  | "premium"
  | "profile";

export interface UserProfile {
  name: string;
  age: string;
  gender: string;
  interests: string[];
}

const emptyProfile: UserProfile = {
  name: "",
  age: "",
  gender: "",
  interests: [],
};

function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [page, setPage] = useState<Page>("home");
  const [profile, setProfile] = useState<UserProfile>(emptyProfile);
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null);

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const finishOnboarding = (data: UserProfile) => {
    setProfile(data);
    setOnboarded(true);
    setPage("home");
  };

  const openArticle = (article: KnowledgeArticle) => {
    setSelectedArticle(article);
    setPage("article");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!onboarded) {
    return (
      <Onboarding
        onComplete={finishOnboarding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      {page === "home" && (
        <Home
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "body" && (
        <Body
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "explore" && (
        <Explore
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "knowledge" && (
        <Knowledge
          profile={profile}
          onNavigate={navigate}
          onOpenArticle={openArticle}
        />
      )}

      {page === "article" && selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          profile={profile}
          onNavigate={navigate}
          onOpenArticle={openArticle}
        />
      )}

      {page === "ai" && (
        <AI
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "wellbeing" && (
        <Wellbeing
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "rewards" && (
        <Rewards
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "premium" && (
        <Premium
          profile={profile}
          onNavigate={navigate}
        />
      )}

      {page === "profile" && (
        <Profile
          profile={profile}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}

export default App;