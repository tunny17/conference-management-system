import React from 'react';

interface RangeProps {
  max: number;
  current: number;
}

const Range: React.FC<RangeProps> = ({ max, current }) => {
  // Ensure the current value does not exceed max
  const progressPercentage = Math.min((current / max) * 100, 100);

  return (
    <section>
      <div className="relative w-full h-2 my-1 bg-white border rounded-full overflow-hidden">
        {/* Progress bar */}
        <div
          className="absolute h-full bg-primary-light"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        {/* Percentage Label */}
        <span className="absolute top-[-1.5rem] right-0 text-xs text-gray-600">
          {progressPercentage.toFixed(1)}%
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-primary-light">
        <span>{progressPercentage}% Donated</span>
        <span>Goals 100%</span>
      </div>
    </section>
  );
};

export default Range;
