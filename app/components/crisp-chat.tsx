"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e245cab4-89a6-4c60-a77e-6dc308ed6cba");
  }, []);

  return null;
};
