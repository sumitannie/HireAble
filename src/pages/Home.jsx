import React from "react";
import { Button } from "../components/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Language Switch Buttons */}
        <LanguageSwitcher />

        {/* Headings */}
        <h1 className="text-4xl md:text-4xl font-bold text-purple-800">{t("welcome")}</h1>
        <p className="text-xl md:text-2xl mb-8 font-semibold">{t("tagline")}</p>

        {/* Buttons (Pass correct `to` prop for reliable routing) */}
        <div className="space-y-3 mb-8">
          <Button text={t("Explore Skills & Connect")} to="/skills" />
          <Button text={t("postSkill")} to="/post" />
          <Button text={t("Upgrade Your Skills")} to="/resources" />
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <img
            src="/assets/img.png"
            alt="Woman Cooking"
            className="w-full h-52 object-cover rounded-xl shadow-xl"
          />
          <img
            src="/assets/img2.png"
            alt="Handmade Goods"
            className="w-full h-52 object-cover rounded-xl shadow-xl"
          />
          <img
            src="/assets/img3.png"
            alt="Empowering Work"
            className="w-full h-48 object-cover rounded-xl shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}
