// src/components/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English", color: "bg-blue-200" },
    { code: "hi", label: "हिंदी", color: "bg-yellow-200" },
    { code: "bn", label: "বাংলা", color: "bg-pink-200" },
    { code: "mr", label: "मराठी", color: "bg-purple-200" },
    { code: "gu", label: "ગુજરાતી", color: "bg-green-200" },
    { code: "ta", label: "தமிழ்", color: "bg-red-200" },
    { code: "te", label: "తెలుగు", color: "bg-orange-200" },
    { code: "kn", label: "ಕನ್ನಡ", color: "bg-cyan-200" },
    { code: "ml", label: "മലയാളം", color: "bg-lime-200" },
    { code: "ur", label: "اردو", color: "bg-gray-200" }
  ];

  return (
    <div className="flex justify-end mb-4">
      <div className="grid grid-cols-4 gap-2 text-sm text-right">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`${lang.color} px-3 py-1 rounded font-medium hover:shadow`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
