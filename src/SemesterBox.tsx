import SemesterButton from "./SemesterButton.tsx";
import Semester from "./Semester.tsx";
import React, { useState } from "react";

export function SemesterBox() {
    const [semesters, setSemesters] = useState<number[]>([]);

    const onAddSemesterGrade = (grade: number, semesterIndex: number) => {
        console.log(`Adding grade ${grade} for semester ${semesterIndex}`);
    };

    const addNewSemester = () => {
        setSemesters((previousSemesters) => [...previousSemesters, 0]);
    };

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Mathématiques
                        </h2>
                    </div>
                    <div className="mt-4 flex md:ml-4 md:mt-0">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-200">
                            <svg
                                className="h-1.5 w-1.5 fill-green-500"
                                viewBox="0 0 6 6"
                                aria-hidden="true"
                            >
                                <circle cx="3" cy="3" r="3" />
                            </svg>
                            5.5
                        </span>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {semesters.map((_, index) => (
                            <Semester key={index} onAddSemesterGrade={(grade) => onAddSemesterGrade(grade, index)} semesterIndex={index} />
                        ))}
                        <SemesterButton onAddSemester={addNewSemester} />
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default SemesterBox;

