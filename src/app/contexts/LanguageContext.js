"use client";
import React, { useState } from "react";

/*
export const LanguageContext = createContext({
  language: "ES", // Set a default value
  setLanguage: function(lan){
    this.language = lan
  } // Set a default function
});*/

export const LanguageContext = () => {
  const [language, setLanguage] = useState("ES");
  return { language, setLanguage };
};