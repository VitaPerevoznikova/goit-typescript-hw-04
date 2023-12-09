import React, { useState } from 'react';


export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  // console.log('Форма була відправлена!');
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}


//import React, { useState, FormEvent, FC, ChangeEvent } from 'react';

// interface ValueProps {
//   value: (text: string) => void;
// }

// export const FormComponent: FC<ValueProps> = ({ value }) => {
//   const [inputValue, setValue] = useState("");

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const newValue = event.target.value;
//     setValue(newValue);
//     value(newValue);
//   };

//   return (
//     <input type="text" value={inputValue} onChange={handleChange} />
//   );
// };