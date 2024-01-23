import {NavComponent} from "./NavComponent.tsx";
import React from "react";

export function NavbarBranches() {
    return (
        <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
            <div className="grid grid-cols-3 items-center gap-8">
                <div className="col-span-2">
                    <nav className="flex space-x-4">
                        <NavComponent branch={"Maths"}/>
                        <NavComponent branch={"Societe"}/>
                        <NavComponent branch={"Anglais"}/>
                        <NavComponent branch={"Modules"}/>
                        <NavComponent branch={"CIE"}/>
                    </nav>
                </div>
            </div>
        </div>
    );
}