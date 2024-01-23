import React, { useEffect, useState } from "react";
import SemesterButton from "./SemesterButton.tsx";
import Semester from "./SemestersBox/Semester.tsx";
import useGradeStore from "./gradesStore.ts";
import GradeComponent from "./SemestersBox/GradeComponent.tsx";

export function SemesterBox() {
    const [semesters, setSemesters] = useState<Array<number | null>>([]);
    const setSemestersInStore = useGradeStore((state) => state.setSemesters);
    const mathsAverage = useGradeStore((state) => state.maths);

    useEffect(() => {
        setSemestersInStore(semesters.filter((value) => value !== null) as number[]);
    }, [semesters, setSemestersInStore]);

    const onAddSemesterGrade = (grade: number | null, semesterIndex: number) => {
        setSemesters((previousSemesters) =>
            previousSemesters.map((semester, index) =>
                index === semesterIndex ? grade : semester
            )
        );
    };

    const addNewSemester = () => {
        setSemesters((previousSemesters) => [...previousSemesters, null]);
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
                        <GradeComponent grade={mathsAverage} bold />
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {semesters.map((_, index) => (
                            <Semester
                                key={index}
                                onAddSemesterGrade={(grade) => onAddSemesterGrade(grade, index)}
                                semesterIndex={index}
                            />
                        ))}
                        <SemesterButton onAddSemester={addNewSemester} />
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default SemesterBox;
