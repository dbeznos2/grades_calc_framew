import React from "react";
import { SmallBoxHeading } from "./SmallBoxHeading.tsx";
import { SmallBoxPercentage } from "./SmallBoxPercentage.tsx";

export function AverageSmallBox() {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
      <SmallBoxHeading />
      <SmallBoxPercentage />
      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        6
      </dd>
    </div>
  );
}

export default AverageSmallBox;