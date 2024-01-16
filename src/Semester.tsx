import GradeComponent from "./GradeComponent.tsx";
import { GradeInput } from "./GradeInput.tsx";
import React, { useState, useEffect } from "react";

interface SemesterProps {
    onAddSemesterGrade: (semesterIndex: number, average: number) => void;
    semesterIndex: number;
}

export function Semester({ onAddSemesterGrade, semesterIndex }: SemesterProps) {
    const [semesterGrades, setSemesterGrades] = useState<number[]>([]);

    useEffect(() => {
        const average = calculateAverage(semesterGrades);
        onAddSemesterGrade(average, semesterIndex);
    }, [semesterGrades, semesterIndex, onAddSemesterGrade]);

    const addNewGrade = (grade: number) => {
        setSemesterGrades((previousState) => [...previousState, grade]);
    };

    const calculateAverage = (grades: number[]): number => {
        if (grades.length === 0) {
            return 0;
        }

        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / grades.length;

        return Math.round(average * 2) / 2;
    };

    const getAverageColor = (average: number): string => {
        if (average < 4) {
            return 'fill-red-500';
        } else if (average === 4) {
            return 'fill-yellow-500';
        } else {
            return 'fill-green-500';
        }
    };

    const average = calculateAverage(semesterGrades);
    const averageColor = getAverageColor(average);

    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900 py-2">Semestre {semesterIndex + 1}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                    {semesterGrades.map((grade, index) => (
                        <GradeComponent key={index} grade={grade} />
                    ))}
                </div>
                <div className="flex">
                    <GradeInput onGradeAdd={addNewGrade} />
                    <span className="ml-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-bold text-gray-900 ring-1 ring-inset ring-gray-300">
                        <svg className={`h-1.5 w-1.5 ${averageColor}`} viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx="3" cy="3" r="3" />
                        </svg>
                        {average}
                    </span>
                </div>
            </dd>
        </div>
    );
}

export default Semester;
