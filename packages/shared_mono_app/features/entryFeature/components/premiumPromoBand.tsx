"use client";

import { ArrowRight, LayoutDashboard, Languages, ShieldCheck, Sparkles } from "lucide-react-native";
import { View } from "ui/components/view";
import { Text } from "ui/components/text";
import { Button } from "ui/components/button";
import { HoverBorderSurface } from "./HoverBorderSurface";
import { NEURAL, neuralAlpha } from "ui/theme/neuralRuntime";
import { AnimatedSection } from "./animatedSection";
import { scrollToSection } from "../utils/scrollToSection";
import { isWeb } from "./platformStyles";

const PERKS = [
  { label: "Full dashboard", icon: LayoutDashboard },
  { label: "OTP · PIN · biometrics", icon: ShieldCheck },
  { label: "Dark / light + i18n", icon: Languages },
] as const;

export function PremiumPromoBand() {
  return (
    <AnimatedSection className="w-full px-4 py-6">
      <View className="w-full max-w-[1100px] mx-auto">
        <HoverBorderSurface
          accent={NEURAL.cyan}
          baseBorder={neuralAlpha(NEURAL.violet, 0.55)}
          className="relative rounded-[32px] p-6 md:p-10 overflow-hidden"
          style={{
            backgroundColor: neuralAlpha(NEURAL.tile, 0.92),
            ...(isWeb
              ? {
                  boxShadow: `0 0 0 1px ${neuralAlpha(NEURAL.cyan, 0.28)}, 0 28px 90px ${neuralAlpha(NEURAL.violet, 0.28)}, 0 0 80px ${neuralAlpha(NEURAL.cyan, 0.12)}`,
                }
              : {}),
          }}
        >
          {isWeb ? (
            <>
              <View className="neural-ai-aurora absolute inset-0" pointerEvents="none" />
              <View
                pointerEvents="none"
                className="absolute -top-24 -right-16 w-72 h-72 rounded-full"
                style={{ backgroundColor: neuralAlpha(NEURAL.violet, 0.28) }}
              />
              <View
                pointerEvents="none"
                className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full"
                style={{ backgroundColor: neuralAlpha(NEURAL.cyan, 0.18) }}
              />
            </>
          ) : null}

          <View className={`relative z-10 ${isWeb ? "flex-row flex-wrap items-center gap-8" : "gap-7"}`}>
            <View className="flex-1 min-w-[260px] gap-4">
              <View
                className="self-start flex-row items-center gap-2 rounded-full px-3 py-1.5 border"
                style={{
                  backgroundColor: neuralAlpha(NEURAL.violet, 0.18),
                  borderColor: neuralAlpha(NEURAL.violet, 0.55),
                }}
              >
                <Sparkles size={16} color={NEURAL.cyan} />
                <Text className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: NEURAL.cyan }}>
                  Premium unlock
                </Text>
              </View>

              <Text className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: NEURAL.text }}>
                Same shared codebase.{"\n"}
                <Text style={{ color: NEURAL.cyan }}>The full product on web and mobile.</Text>
              </Text>

              <Text className="text-sm md:text-base leading-7 max-w-[560px]" style={{ color: NEURAL.textSecondary }}>
                This free ThemeWagon build is the architecture. Premium adds dashboards, auth, theming, and the complete
                UI kit — still one repo, still one change that ships to Next.js and Expo.
              </Text>

              <View className="flex-row flex-wrap gap-2.5 mt-1">
                {PERKS.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <View
                      key={perk.label}
                      className="flex-row items-center gap-2 rounded-2xl px-3 py-2 border"
                      style={{
                        borderColor: neuralAlpha(NEURAL.cyan, 0.35),
                        backgroundColor: neuralAlpha(NEURAL.canvas, 0.72),
                      }}
                    >
                      <Icon size={14} color={NEURAL.cyan} />
                      <Text className="text-[12px] font-semibold" style={{ color: NEURAL.text }}>
                        {perk.label}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            <View className={`gap-4 ${isWeb ? "shrink-0 w-full max-w-[280px]" : "w-full"}`}>
              <View
                className="rounded-3xl p-4 border gap-2"
                style={{
                  backgroundColor: neuralAlpha(NEURAL.canvas, 0.65),
                  borderColor: neuralAlpha(NEURAL.cyan, 0.28),
                }}
              >
                <Text className="text-[10px] uppercase tracking-widest font-bold" style={{ color: NEURAL.textDim }}>
                  What you get next
                </Text>
                <Text className="text-sm font-semibold leading-6" style={{ color: NEURAL.text }}>
                  Production screens on web and mobile from the packages you already cloned.
                </Text>
              </View>

              <Button
                variant="primary"
                size="lg"
                className={`w-full ${isWeb ? "hover:scale-[1.03]" : ""}`}
                textClassName="font-bold"
                label="Compare free vs premium"
                rightIcon={<ArrowRight size={18} color="#ffffff" />}
                onPress={() => scrollToSection("versions")}
              />
            </View>
          </View>
        </HoverBorderSurface>
      </View>
    </AnimatedSection>
  );
}
