import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const Field = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const StyledLabel = styled.span`
  font-size: 1.4rem;
  transition: all 0.3s ease-in;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid grey;
  transition: all 0.3s ease-in;
  padding: 1rem;

  &:hover {
    border-color: black;
  }

  &:focus {
    outline: 0;
    border-color: black;
  }
`;

const FormInput = ({
  label,
  value,
  changeText,
  placeholder,
  select,
  options,
}) => {
  const handleChange = (e) => {
    if (select) {
      return changeText(e.value);
    }

    changeText(e.target.value);
  };

  if (!select) {
    return (
      <Field>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </Field>
    );
  }

  return (
    <Field>
      <StyledLabel>{label}</StyledLabel>
      <Select options={options} onChange={handleChange} />
    </Field>
  );
};

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = [
  createOption("Mathematics"),
  createOption("IFT"),
  createOption("Comp Sci"),
];

const MultiSelectFormInput = ({ value, onChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      onChange(newOption);
    }, 1000);
  };

  return (
    <Field>
      <StyledLabel>Department :</StyledLabel>
      <CreatableSelect
        isClearable
        isMulti
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => onChange(newValue)}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </Field>
  );
};

export { FormInput, MultiSelectFormInput };
