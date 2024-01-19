import {NavComponent} from "./NavComponent.tsx";
import React from "react";

export function NavbarBranches() {
    return (
        <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
            <div className="grid grid-cols-3 items-center gap-8">
                <div className="col-span-2">
                    <nav className="flex space-x-4">
                        <NavComponent/>
                        <a
                            href="#"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Société
                        </a>
                        <a
                            href="#"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Anglais
                        </a>
                        <a
                            href="#"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Modules EPSIC
                        </a>
                        <a
                            href="#"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            CIE
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}