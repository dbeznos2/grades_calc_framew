import GradeComponent from "./GradeComponent.tsx";
import { GradeInput } from "./GradeInput.tsx";
import React, { useEffect, useState } from "react";
import { average } from "../../Average.ts";

interface SemesterProps {
  onAddSemesterGrade: (average: number | null) => void;
  semesterIndex: number;
}

export function Semester({ onAddSemesterGrade, semesterIndex }: SemesterProps) {
    const [semesterGrades, setSemesterGrades] = useState<number[]>([]);

    const addNewGrade = (grade: number) => {
        setSemesterGrades((previousState) => [...previousState, grade]);
    };

    useEffect(() => {
        onAddSemesterGrade(average(semesterGrades))
    }, [semesterGrades]);

    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900 py-2">Semestre {semesterIndex + 1}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                    {semesterGrades.map((grade, index) => (
                        <GradeComponent key={index} grade={grade} />
                    ))}
                </div>
                <div className="flex gap-2">
                    <GradeInput onGradeAdd={addNewGrade} />
                    <GradeComponent grade={average(semesterGrades)} bold />
                </div>
            </dd>
        </div>
    );
}

export default Semester;
