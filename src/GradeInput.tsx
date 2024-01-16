import React, { useState } from "react";

interface Props {
    onGradeAdd: (grade: number) => void;
}

export function GradeInput({ onGradeAdd }: Props) {
    const [inputValue, setInputValue] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        const parsedGrade = parseFloat(value);
        const isValid = !isNaN(parsedGrade) && parsedGrade >= 1 && parsedGrade <= 6;

        setInputValue(value);
        setInputError(!isValid);
    };

    const handleButtonClick = () => {
        const parsedGrade = parseFloat(inputValue);
        if (!isNaN(parsedGrade) && parsedGrade >= 1 && parsedGrade <= 6) {
            onGradeAdd(parsedGrade);
            setInputValue("");
            setInputError(false);
        } else {
            setInputError(true);
        }
    };

    const handleInputKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    };

    const inputClassName = `block w-14 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ${
        inputError ? "ring-red-500 ring-2" : "ring-gray-300"
    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`;

    return (
        <div>
            <label htmlFor="sem1" className="sr-only">
                Enter Grade
            </label>
            <div className="flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <input
                        type="text"
                        name="grade"
                        id="sem1"
                        className={inputClassName}
                        placeholder="4"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyPress}
                    />
                </div>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={handleButtonClick}
                >
                    <svg
                        className="-ml-0.5 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
