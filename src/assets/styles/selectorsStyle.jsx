// single selectors style
export const styleSingleSelector = {
  control: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize,
    padding: '2px 3px',
    outline: 'none',
    border: '2px solid #9a9da1c3',
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
    backgroundColor: '#374151',
    boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 200ms ease-in',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    borderBottom: '0.1px solid #414d60',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    color: '#94a3b8',
    backgroundColor: state.isSelected ? '#1f2937' : '#374151',
    transition: 'all 100ms ease-in',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4b5563',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize,
    border: '2px solid #9a9da1c3',
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    backgroundColor: '#374151',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    color: '#d1d5db',
    fontSize: state.selectProps.myFontSize,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#94a3b8',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#94a3b8',
    transition: 'all 100ms ease-in',
  }),
};

// multi selectors style
export const styleMultiSelector = {
  control: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize,
    padding: '2px 3px',
    outline: 'none',
    border: '2px solid #9a9da1c3',
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
    backgroundColor: '#374151',
    boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 200ms ease-in',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    borderBottom: '0.1px solid #414d60',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    color: '#94a3b8',
    backgroundColor: state.isSelected ? '#1f2937' : '#374151',
    transition: 'all 100ms ease-in',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4b5563',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize,
    border: '2px solid #9a9da1c3',
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    backgroundColor: '#374151',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    borderRadius: '12px',
    fontSize: state.selectProps.myFontSize,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    width: state.selectProps.myWidthSize - 3,
    color: '#d1d5db',
    fontSize: state.selectProps.myFontSize,
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: '12px',
    backgroundColor: '#4b5563',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#d1d5db',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    ':hover': {
      color: '#ef4444',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#94a3b8',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#94a3b8',
    transition: 'all 100ms ease-in',
  }),
};
