import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function BackButton({ title, link }) {
  return (
    <Link to={link} className="btn btn-ghost mb-6">
      <ArrowLeftIcon className="size-5 hover:-translate-x-1 transition-all" />
      {title}
    </Link>
  );
}

export default BackButton;
