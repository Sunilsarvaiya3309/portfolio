"use client";
import { useState, ReactNode } from "react";
import CurtainIntro from "./CurtainIntro";

export default function CurtainWrapper({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <CurtainIntro onFinish={() => setIntroDone(true)} />}
      {introDone && children}
    </>
  );
}
