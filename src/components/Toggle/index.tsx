import React from 'react';

interface ToggleProps {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, setIsOn }) => {
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-[#4B6BA4]' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${
          isOn ? 'translate-x-7' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
