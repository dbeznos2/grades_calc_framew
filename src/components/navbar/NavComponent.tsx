import React from "react";

interface BranchesProps {
    branch: string;

}
export function NavComponent({branch}: BranchesProps) {
    return (
        <a href="#"
            className="text-white font-bold rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10">
            {branch}
        </a>
    );
}