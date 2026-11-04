"use client";
import { useEffect } from "react";
import { runtimeScripts } from "@/components/page-content";

/** Compatibility layer for the existing visual effects while the sections are migrated to React. */
export default function LegacyInteractions() {
  useEffect(() => {
    const nodes: HTMLScriptElement[] = [];
    for (const source of runtimeScripts) {
      if (!source?.trim()) continue;
      const script = document.createElement("script");
      script.text = source;
      document.body.appendChild(script);
      nodes.push(script);
    }
    return () => nodes.forEach((node) => node.remove());
  }, []);
  return null;
}
