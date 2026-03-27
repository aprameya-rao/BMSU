import React from "react";
import { useParams, Navigate } from "react-router-dom";
import CampusTemplate from "../components/CampusTemplate"; // Adjust path if needed
import campusDataArray from "../data/campuses.json"; // Import your JSON data

export default function CampusPage() {
  // 1. Get the campus ID from the URL (e.g., "bmsce")
  const { campusId } = useParams<{ campusId: string }>();

  // 2. Find the matching campus in your JSON data
  const currentCampusData = campusDataArray.find(
    (campus) => campus.id === campusId
  );

  // 3. If the user types a URL for a campus that doesn't exist, show a fallback or redirect
  if (!currentCampusData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Campus not found!
      </div>
    );
  }

  // 4. Pass the found data into your template
  return <CampusTemplate campusData={currentCampusData} />;
}