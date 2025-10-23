"use client";
import { useEffect, ReactNode } from "react";
import { initApi } from "@/utils/axios";

export default function ClientInit({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window?.configs?.apiUrl) {
      initApi(window.configs.apiUrl);
    }
  }, []);

  return <>{children}</>;
}
