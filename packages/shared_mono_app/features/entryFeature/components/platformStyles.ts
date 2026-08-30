import { Platform, type ViewStyle } from "react-native";

export const isWeb = Platform.OS === "web";

/** CSS blur — web only. Never pass to native views. */
export function webBlurStyle(radius: number): ViewStyle | undefined {
  if (!isWeb) return undefined;
  return { filter: `blur(${radius}px)` } as ViewStyle;
}

/** Card grid helpers — `flex-1`/`h-full` stretch only on web; native uses natural height to avoid overlap. */
export const landingCardGrid = isWeb
  ? "flex-row flex-wrap -mx-3 items-stretch"
  : "flex-row flex-wrap -mx-3";

export const landingCardGridItem = (widthClass: string) =>
  isWeb ? `${widthClass} px-3 mb-6 flex` : `${widthClass} px-3 mb-6`;

export const landingCardShell = isWeb ? "w-full flex-1 flex" : "w-full";

export const landingCardSurface = isWeb ? "h-full flex-1 flex-col" : "flex-col";
