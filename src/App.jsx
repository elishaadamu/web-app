/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const HierarchicalTree = () => {
  // The JSON data from your uploaded file
  const data = {
    name: "Performance Measures",
    children: [
      {
        name: "Review",
        children: [
          {
            name: "Recommendations",
            description: "PPT Recommendations",
            children: [
              { name: "Develop goals and objectives" },
              { name: "Include transit projects beyond the first six years" },
              { 
                name: "Include vision statement",
                content: [
                  { label: "Adopted Plan 2050 Vision Statement", text: "An integrated network, cost effective, multimodal transportation system that safely and efficiently moves people and goods throughout the region in an equitable and environmentally responsible manner to support economic prosperity and improved quality of life for all users." },
                  { label: "Adopted Plan 2045 Vision Statement", text: "Encourage a transportation system that equitably improves safety, economic vitality, and quality of life for people living and working in the Tri-Cities area." }
                ]
              },
              { 
                name: "Linking investment to performance targets",
                content: [
                  { label: "MTIP - Funding for Safety Projects", text: "Safety targeted improvements are implemented through HSIP projects. Each year Virginia is allocated ~$55 Million for HSIP and $5 Million for Railway Grade Crossing improvements. Virginia is also subject to a Penalty Transfer provision, Section 154 “Open Container”, such that 2.5% of NHPP funds are reserved for either NHTSA Alcohol-Impaired Driving or HSIP projects. The State determines what proportion goes to each program. Of the HSIP funds, about 10 percent is set aside for non-motorized safety projects and 20 percent of the remainder for improvements on locally-maintained roadways." }
                ]
              },
              { name: "3-C Agreement <> IIJA" },
              { name: "Title VI training for MPO staff and the new Executive Director" },
              { name: "Replace buses with CVTA Revenues" },
            ],
          },
        ],
      },
      {
        name: "MTP",
        children: [
          {
            name: "Metropolitan Transportation Plan",
            description: "Plan Elements",
            children: [
              { name: "Financial Planning methodology" },
              { name: "PBPP (Performance Based Planning and Programming)" },
              { name: "Public Participation for MTP" },
              { name: "System Performance Report" },
            ],
          },
        ],
      },
      {
        name: "UPWP",
        children: [
          {
            name: "Unified Planning Work Program",
            description: "Program Management",
            children: [
              { name: "Budgeting Process & Coordination" },
              { name: "Ensure Consistency with VDOT" },
              { name: "Amendments and Modifications" },
              { name: "Fiscal Monitoring" },
              { name: "Audits, Certifications & Reviews" },
            ],
          },
        ],
      },
      {
        name: "Agreements",
        children: [
          {
            name: "Agreements & Bylaws",
            description: "Core Documents",
            children: [
              { name: "Agreements (Air Quality)" },
              { name: "3C Agreement" },
              { name: "Bylaws" },
            ],
          },
        ],
      },
      {
        name: "TIP",
        children: [
          {
            name: "Transportation Improvement Program",
            description: "Project Programming",
            children: [
              { name: "Annual Listing of Obligated Projects" },
              { name: "Performance Based Planning and Programming (PBPP)" },
              { name: "Financial Planning" },
            ],
          },
        ],
      },
      {
        name: "Multimodal",
        children: [
          {
            name: "Freight & Transit",
            description: "Specialized Planning",
            children: [
              { name: "Freight Planning" },
              { name: "Transit Planning (service across MPA boundary)" },
            ],
          },
        ],
      },
      {
        name: "Participation",
        children: [
          {
            name: "Public Participation & Civil Rights",
            description: "Outreach & Compliance",
            children: [
              { name: "Public Participation Plan" },
              { name: "Civil Rights" },
              { name: "Non-discrimination" },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-gray-200 h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-grow overflow-hidden">
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default HierarchicalTree;
