"use client";

import { useAnimation } from "./index";

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useAnimation();
  return <>{children}</>;
}