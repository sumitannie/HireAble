import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const allSkills = [
  {
    name: "Tiffin Service",
    user: "Radha",
    location: "Ranchi",
    language: "Hindi",
    phone: "9876543210",
    description: "Tiffin Service Desc",
  },
  {
    name: "Mehendi Art",
    user: "Shaheen",
    location: "Lucknow",
    language: "Urdu",
    phone: "9876543211",
    description: "Mehendi Art Desc",
  },
  {
    name: "Math Tutoring",
    user: "Amar",
    location: "Kolkata",
    language: "Bengali",
    phone: "9876543212",
    description: "Math Tutoring Desc",
  },
  {
    name: "Tailoring & Stitching",
    user: "Nisha",
    location: "Patna",
    language: "Hindi",
    phone: "9876543213",
    description: "Tailoring & Stitching Desc",
  },
  {
    name: "Handmade Crafts",
    user: "Pooja",
    location: "Bhopal",
    language: "Hindi",
    phone: "9876543214",
    description: "Handmade Crafts Desc",
  },
  {
    name: "Pickle Making",
    user: "Rekha",
    location: "Indore",
    language: "Hindi",
    phone: "9876543215",
    description: "Pickle Making Desc",
  },
  {
    name: "Drawing Classes",
    user: "Neha",
    location: "Delhi",
    language: "English",
    phone: "9876543216",
    description: "Drawing Classes Desc",
  },
  {
    name: "Spoken English Coaching",
    user: "Rani",
    location: "Nagpur",
    language: "Marathi",
    phone: "9876543217",
    description: "Spoken English Coaching Desc",
  },
  {
    name: "Soap Making",
    user: "Kavita",
    location: "Agra",
    language: "Hindi",
    phone: "9876543218",
    description: "Soap Making Desc",
  },
  {
    name: "Embroidery Work",
    user: "Farzana",
    location: "Kanpur",
    language: "Hindi",
    phone: "9876543219",
    description: "Embroidery Work Desc",
  },
  {
    name: "Candle Making",
    user: "Deepa",
    location: "Pune",
    language: "Marathi",
    phone: "9876543220",
    description: "Candle Making Desc",
  },
  {
    name: "Organic Vegetable Supply",
    user: "Jyoti",
    location: "Nashik",
    language: "Marathi",
    phone: "9876543221",
    description: "Organic Vegetable Supply Desc",
  },
  {
    name: "Cooking Classes",
    user: "Sarla",
    location: "Varanasi",
    language: "Hindi",
    phone: "9876543222",
    description: "Cooking Classes Desc",
  },
  {
    name: "Paper Bag Manufacturing",
    user: "Anjali",
    location: "Raipur",
    language: "Hindi",
    phone: "9876543223",
    description: "Paper Bag Manufacturing Desc",
  },
  {
    name: "Henna Tattoo Artist",
    user: "Nasreen",
    location: "Hyderabad",
    language: "Urdu",
    phone: "9876543224",
    description: "Henna Tattoo Artist Desc",
  },
  {
    name: "Baking (Cakes & Cookies)",
    user: "Geeta",
    location: "Jaipur",
    language: "Hindi",
    phone: "9876543225",
    description: "Baking (Cakes & Cookies) Desc",
  },
  {
    name: "Home Gardening Help",
    user: "Lata",
    location: "Shimla",
    language: "Hindi",
    phone: "9876543226",
    description: "Home Gardening Help Desc",
  },
  {
    name: "Disability Awareness Speaker",
    user: "Preeti",
    location: "Mumbai",
    language: "English",
    phone: "9876543227",
    description: "Disability Awareness Speaker Desc",
  },
  {
    name: "Computer Literacy Tutor",
    user: "Vinod",
    location: "Ahmedabad",
    language: "Gujarati",
    phone: "9876543228",
    description: "Computer Literacy Tutor Desc",
  },
];

export default function SkillList() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = allSkills.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto">

        <LanguageSwitcher />

        <h2 className="text-3xl font-bold mb-6 text-purple-800">{t("availableSkills")}</h2>

        <input
          type="text"
          placeholder={t("search") || "Search skills, name, or location..."}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              <h3 className="text-xl font-bold text-purple-800 mb-1">{t(skill.name)}</h3>
              <p className="text-gray-700">👤 {t("by")}: <span className="font-medium">{skill.user}</span></p>
              <p className="text-gray-600">📍 {t("location")}: {skill.location}</p>
              <p className="text-gray-500 text-sm">🈯 {t("lang")}: {skill.language}</p>
              <p className="text-purple-700 mt-2 line-clamp-2">{t(skill.description)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-11/12 md:w-1/2 relative">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-2 right-2 text-red-500 text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">{t(selectedSkill.name)}</h2>
            <p className="mb-1">👤 <strong>{selectedSkill.user}</strong></p>
            <p className="mb-1">📍 {t("location")}: {selectedSkill.location}</p>
            <p className="mb-1">🈯 {t("lang")}: {selectedSkill.language}</p>
            <p className="mb-4">📄 {t(selectedSkill.description)}</p>
            <a
              href={`https://wa.me/91${selectedSkill.phone}?text=Hi ${selectedSkill.user}, I saw your ${selectedSkill.name} skill on HireAble.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
