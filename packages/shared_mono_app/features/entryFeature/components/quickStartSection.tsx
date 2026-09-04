import { Copy, Terminal, Rocket } from "lucide-react-native";

import { View } from "ui/components/view";
import { Text } from "ui/components/text";
import { HoverBorderSurface } from "./HoverBorderSurface";
import { NEURAL } from "ui/theme/neuralRuntime";
import { AnimatedSection } from "./animatedSection";
import { SectionHeading } from "./sectionHeading";
import { isWeb, landingCardGrid, landingCardGridItem, landingCardShell, landingCardSurface } from "./platformStyles";

const STEPS = [
  {
    step: "01",
    title: "Clone & install",
    description: "Install once at the repo root. That covers the Next.js app, the Expo app, and every shared package.",
    commands: ["yarn install"],
    icon: Copy,
    accent: NEURAL.cyan,
  },
  {
    step: "02",
    title: "Run web and mobile",
    description:
      "Stay in the same folder. yarn web starts Next.js at localhost:3000. yarn android or yarn ios starts Expo. Same shared code — pick the platform you want to preview.",
    commands: ["yarn web", "yarn android", "yarn ios"],
    icon: Terminal,
    accent: NEURAL.violet,
  },
  {
    step: "03",
    title: "Extend packages",
    description: "Add features under packages/shared_mono_app and import them from both apps — no second repo.",
    commands: ["yarn api myFeature"],
    icon: Rocket,
    accent: NEURAL.positive,
  },
] as const;

export function QuickStartSection() {
  return (
    <AnimatedSection nativeID="quickstart" className="w-full px-4 py-6">
      <View className="w-full max-w-[1100px] mx-auto">
        <SectionHeading
          badge="Get started"
          title="How to run web and mobile"
          subtitle="One install. Then start the website, the phone app, or both — from the same repository."
        />

        <View className={landingCardGrid}>
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <View key={item.step} className={landingCardGridItem("w-full md:w-1/3")}>
                <AnimatedSection delay={80 + index * 70} variant="fadeUp" className={landingCardShell}>
                  <HoverBorderSurface
                    accent={item.accent}
                    className={`rounded-3xl p-6 ${landingCardSurface}`}
                  >
                    <View className="flex-1 flex-col">
                      <View className="flex-row items-center justify-between mb-4">
                        <View
                          className="w-11 h-11 rounded-xl items-center justify-center"
                          style={{ backgroundColor: `${item.accent}18` }}
                        >
                          <Icon size={20} color={item.accent} />
                        </View>
                        <Text className="text-3xl font-bold opacity-30" style={{ color: item.accent }}>
                          {item.step}
                        </Text>
                      </View>
                      <Text className="text-lg font-bold mb-2" style={{ color: NEURAL.text }}>
                        {item.title}
                      </Text>
                      <Text
                        className="text-sm leading-6 mb-4 flex-1 min-h-[80px]"
                        style={{ color: NEURAL.textSecondary }}
                      >
                        {item.description}
                      </Text>
                      <View className="gap-2 mt-auto">
                        {item.commands.map((command) => (
                          <View
                            key={command}
                            className="rounded-xl px-3 py-2.5 border"
                            style={{ backgroundColor: NEURAL.canvas, borderColor: NEURAL.border }}
                          >
                            <Text
                              className="text-xs font-mono"
                              style={{ color: NEURAL.cyan, ...(isWeb ? { fontFamily: "monospace" } : {}) }}
                            >
                              {command}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </HoverBorderSurface>
                </AnimatedSection>
              </View>
            );
          })}
        </View>
      </View>
    </AnimatedSection>
  );
}
