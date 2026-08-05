import {Link} from "react-router";
import { PlusIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
        ThinkBoard
      </h1>
      <div className="flex items-center gap-4">
        <Link to={"/create"} className="btn btn-primary">
          <PlusIcon className="size-5" />
          <span>New Note</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
