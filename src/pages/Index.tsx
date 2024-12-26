import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Characters } from "@/components/Characters";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Characters />
    </div>
  );
};

export default Index;