import { View } from "ui/components/view";
import { Text } from "ui/components/text";
import {

  Pressable,

} from "react-native";
import { NEURAL } from "ui/theme/neuralRuntime";
import { AnimatedSection } from "./animatedSection";
import { NeuralPromptBar } from "./NeuralPromptBar";
import { TrustMarqueeSection } from "./trustMarqueeSection";
import { HeroStatsRow } from "./heroStatsRow";
import { HeroHighlightPills } from "./heroHighlightPills";
import { scrollToSection } from "../utils/scrollToSection";
import { useLandingSectionRef } from "../hooks/useLandingSectionRef";

export function HeroSection() {
  const heroRef = useLandingSectionRef("hero");

  return (
    <View
      ref={heroRef}
      nativeID="hero"
      collapsable={false}
      className="relative w-full overflow-hidden pb-6 md:pb-12"
    >
      <Pressable className="w-full max-w-[900px] mx-auto px-3 sm:px-4 md:px-6 items-center pt-4 sm:pt-6 md:pt-8">
        <AnimatedSection delay={0} variant="fadeUp">
          <View
            className="mb-5 sm:mb-7 self-center rounded-full px-5 sm:px-7 py-2.5 sm:py-3 border-2 max-w-full"
            style={{ backgroundColor: NEURAL.cyanSoft, borderColor: NEURAL.borderGlow }}
          >
            <Text
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-center"
              style={{ color: NEURAL.cyan }}
            >
              Turborepo · Next.js · Expo
            </Text>
          </View>
        </AnimatedSection>

        <AnimatedSection delay={80} variant="fadeUp">
          <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-center px-1" style={{ color: NEURAL.text }}>
            Write once.{"\n"}
            <Text style={{ color: NEURAL.violet }}>Web and mobile update together.</Text>
          </Text>
        </AnimatedSection>

        <AnimatedSection delay={160} variant="fadeUp">
          <Text className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-center max-w-[680px] px-1" style={{ color: NEURAL.textSecondary }}>
            One codebase for web and mobile — not two separate apps. Change a screen or component once, and it updates on both.
          </Text>
        </AnimatedSection>

        <AnimatedSection delay={220} variant="scale" className="w-full mt-8">
          <NeuralPromptBar
            size="lg"
            placeholder="Explore the workspace layout…"
            onGenerate={() => scrollToSection("showcase")}
          />
        </AnimatedSection>

        <AnimatedSection delay={280} variant="fadeUp" className="w-full">
          <HeroHighlightPills />
        </AnimatedSection>

        <AnimatedSection delay={320} variant="fadeUp" className="w-full">
          <HeroStatsRow />
        </AnimatedSection>

        <AnimatedSection delay={380} variant="fadeUp" className="w-full mt-8 md:mt-12">
          <TrustMarqueeSection />
        </AnimatedSection>
      </Pressable>
    </View>
  );
}
