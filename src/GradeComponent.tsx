import React from 'react';
import classnames from 'classnames';

interface GradeComponentProps {
    grade: number;
    bold?: boolean;
    big?: boolean;
}

const GradeComponent: React.FC<GradeComponentProps> = ({ grade, bold = false, big = false }) => {
    const classNames = classnames(
        'inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-200',
        { 'font-bold': bold, 'font-medium': !bold, 'px-3 py-1 text-lg': big, 'px-2 py-2 text-sm': !big }
    );

    const fillClass =
        grade >= 5 ? 'fill-green-500' : grade < 5 && grade >= 4 ? 'fill-yellow-500' : 'fill-red-500';

    return (
        <span className={classNames}>
      <svg className={`h-1.5 w-1.5 ${fillClass}`} viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
            {grade}
    </span>
    );
};

export default GradeComponent;
