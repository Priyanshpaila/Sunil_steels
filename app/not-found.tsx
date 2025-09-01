"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/"); // send all 404s to home
  }, [router]);

  return null; // nothing to render while redirecting
}