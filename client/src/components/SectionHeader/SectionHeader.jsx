import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function SectionHeader({ title }) {
  return <h2 className="card-title text-2xl mb-4">{title}</h2>
}

export default SectionHeader;
