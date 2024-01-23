import create from 'zustand';
import { average } from "../Average.ts";

interface StoreProps {
    maths: number | null;
    societe: number | null;
    ang: number | null;
    info: number | null;
    mod: number | null;
    cie: number | null;
    mathsAverages: number[];
    setMathsAverage: (index: number, average: number) => void;
    setSemesters: (semesters: (number | null)[]) => void;
}

const calculateInitialMathsAverage = (semesters: (number | null)[]): number | null => {
    const filteredSemesters = semesters.filter((value) => value !== null) as number[];
    return filteredSemesters.length > 0 ? average(filteredSemesters) : null;
};

export const useGradeStore = create<StoreProps>((set) => ({
    maths: calculateInitialMathsAverage([]),
    societe: null,
    ang: null,
    info: null,
    mod: null,
    cie: null,
    mathsAverages: [],
    setMathsAverage: (index, average) =>
        set((state) => {
            const mathsAverages = [...state.mathsAverages];
            mathsAverages[index] = average;
            return { mathsAverages };
        }),
    setSemesters: (semesters) =>
        set((state) => {
            const mathsAverage = calculateInitialMathsAverage(semesters);
            return { ...state, semesters, maths: mathsAverage };
        }),
}));

export default useGradeStore;
