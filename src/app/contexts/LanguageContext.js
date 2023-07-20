"use client";
import React, { createContext } from "react";

export const LanguageContext = createContext({
  language: "ES", // Set a default value
  setLanguage: () => {}, // Set a default function
});
