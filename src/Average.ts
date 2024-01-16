export function average(grades: Array<number | null>): number | null {

        const filteredArray = grades.filter(g => g !== null)

        if (filteredArray.length < 1) {
                return null;
        }


        const sum = filteredArray.reduce((acc, grade) => acc + grade, 0);

        const average = sum / filteredArray.length;

        return Math.round(average * 2) / 2;
}