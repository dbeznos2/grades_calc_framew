import React from "react";

interface Props {
    name: string
}
export function SmallBoxHeading({name}: Props) {
    return (
      <dt className="text-sm font-medium leading-6 text-gray-500">{name}</dt>
    );
}