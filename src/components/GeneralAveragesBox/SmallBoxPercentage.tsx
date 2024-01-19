import React from "react";

interface Props {
    percentage: string
}
export function SmallBoxPercentage({percentage}: Props) {
    return (
    <dd className="text-xs font-medium text-green-600">{percentage}</dd>
    );
}