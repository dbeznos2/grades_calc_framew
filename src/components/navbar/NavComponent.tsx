import React from "react";
import {Link} from "react-router-dom";

interface BranchesProps {
    branch: string;

}
export function NavComponent({branch}: BranchesProps) {
    return (
        <Link to= { "/" + branch}
            className="text-white font-bold rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10">
            {branch}
        </Link>
    );
}