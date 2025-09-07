import React from "react";

export default function JobResources() {
  const resources = [
    {
      title: "Digital India Skill Training",
      description: "Free digital training courses from Government of India.",
      link: "https://www.skillindiadigital.gov.in/",
    },
    {
      title: "SWAYAM – Free Online Courses",
      description: "Access free courses from IITs, IIMs, and government orgs.",
      link: "https://swayam.gov.in/",
    },
    {
      title: "NSDC Job Portal",
      description: "National Skill Development Corporation's job matching platform.",
      link: "https://nsdcindia.org/",
    },
    {
      title: "YouTube: Basic Spoken English",
      description: "Simple English tutorials for beginners from rural backgrounds.",
      link: "https://www.youtube.com/results?search_query=spoken+english+for+beginners+in+hindi",
    },
    {
      title: "Create Resume (Free Tool)",
      description: "Use this site to create a professional resume easily.",
      link: "https://www.canva.com/resumes/",
    },
    {
      title: "Govt Schemes for Women Entrepreneurs",
      description: "Information about MUDRA loans and self-help support.",
      link: "https://msme.gov.in/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-green-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6">📚 Job & Skill Resources</h2>
        <p className="text-lg mb-6 text-gray-700">
          Empower yourself with digital training, government job portals, resume tools, and more.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Resource →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
