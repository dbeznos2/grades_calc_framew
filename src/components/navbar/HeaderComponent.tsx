import React from "react";
import { NavbarBranches } from "./NavbarBranches.tsx";
import { CapIconComponent } from "./CapIconComponent.tsx";
import { RefreshButtonComponent } from "./RefreshButtonComponent.tsx";

export function HeaderComponent() {
  return (
    <header className="bg-sky-600 pb-24">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center py-5 lg:justify-between">
          <CapIconComponent />
          <RefreshButtonComponent />
        </div>
        <NavbarBranches />
      </div>
    </header>
  );
}