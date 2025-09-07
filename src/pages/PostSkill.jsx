import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function PostSkill() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    skill: "",
    location: "",
    language: "selectLanguage",
    phone: "",
    description: "",
    experience: "selectLevel",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.skill ||
      !form.location ||
      !form.phone ||
      !form.description ||
      form.language === "selectLanguage" ||
      form.experience === "selectLevel"
    ) {
      alert(t("fillAllFields"));
      return;
    }

    console.log("Submitted Skill:", form);
    setSubmitted(true);
    setForm({
      name: "",
      skill: "",
      location: "",
      language: "selectLanguage",
      phone: "",
      description: "",
      experience: "selectLevel",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-100 to-purple-100 text-gray-800">
      <div className="max-w-xl mx-auto">
        {/* Language Buttons */}
        <LanguageSwitcher />

        <h2 className="text-4xl font-bold mb-6 text-purple-800">{t("postSkill")}</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-purple-200"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={`👤 ${t("yourName")}`}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            name="skill"
            value={form.skill}
            onChange={handleChange}
            placeholder={`🛠️ ${t("skill")}`}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder={`📍 ${t("location")}`}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={`📞 ${t("phoneNumber")}`}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder={`✍️ ${t("skillDescription")}`}
            rows="3"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="selectLevel">{t("selectLevel")}</option>
            <option value="beginner">{t("beginner")}</option>
            <option value="intermediate">{t("intermediate")}</option>
            <option value="expert">{t("expert")}</option>
          </select>

          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="selectLanguage">{t("selectLanguage")}</option>
            <option value="hindi">{t("hindi")}</option>
            <option value="bengali">{t("bengali")}</option>
            <option value="marathi">{t("marathi")}</option>
            <option value="urdu">{t("urdu")}</option>
            <option value="english">{t("english")}</option>
            <option value="gujarati">{t("gujarati")}</option>
            <option value="tamil">{t("tamil")}</option>
            <option value="telugu">{t("telugu")}</option>
          </select>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg font-bold shadow-md"
          >
            {t("submit")}
          </button>

          {submitted && (
            <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
               {t("successMessage")}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
