import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function SectionHeader() {
  return (
    <div className="max-w-2xl mx-auto">
      <Link to={"/"} className="btn btn-ghost mb-6">
        <ArrowLeftIcon className="size-5 hover:-translate-x-1 transition-all" /> 
        Back to Notes 
      </Link>
    </div>
  );
}

export default SectionHeader;
