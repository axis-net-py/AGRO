"use client";

import React from "react";

export function MobileFrameWrapper({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen w-full bg-background overflow-x-hidden">{children}</div>;
}

