import React from "react";
import { SmallBoxHeading } from "./SmallBoxHeading.tsx";
import { SmallBoxPercentage } from "./SmallBoxPercentage.tsx";
import classnames from "classnames";


interface AverageSmallBoxProps {
    name: string
    averageGrade: number | null;
    percentage: string
    big?: boolean
}

export function AverageSmallBox({averageGrade, big, name, percentage}: AverageSmallBoxProps) {

    const classNames = classnames("flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6", { 'col-span-2': big })
    return (
        <div className={classNames}>
            <SmallBoxHeading name={name}/>
            <SmallBoxPercentage percentage={percentage}/>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                {averageGrade}
            </dd>
        </div>
    );
}

export default AverageSmallBox;
