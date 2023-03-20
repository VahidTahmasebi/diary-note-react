import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { styleSelector } from './App';
import makeAnimated from 'react-select/animated';

const FilterNotes = ({ notes, setFilteredNotes, ...props }) => {
  const { optionsTags, selectedTags, setSelectedTags } = props;
  const animatedComponents = makeAnimated();

  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('latest');

  // filter on a data
  useEffect(() => {
    let result = notes;
    result = filterSearch(result);
    result = sortDate(result);
    result = filteredTagNotes(result);

    setFilteredNotes(result);
  }, [notes, sort, searchValue, selectedTags]);

  // search handler
  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  // filter search title
  const filterSearch = (array) => {
    if (searchValue == '') return array;

    return array.filter((n) => {
      return Object.values(n)
        .join(' ')
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  };

  // sort date
  const sortDate = (array) => {
    let sortedNotes = [...array];
    return sortedNotes.sort((a, b) => {
      if (sort === 'latest') {
        return new Date(a.createAt) > new Date(b.createAt) ? -1 : 1;
      } else if (sort === 'earliest') {
        return new Date(a.createAt) > new Date(b.createAt) ? 1 : -1;
      }
    });
  };

  // record the selected value in the state
  const selectTagHandler = (selected) => {
    setSelectedTags(selected);
  };

  // filter by tag
  const filteredTagNotes = (array) => {
    if (!selectedTags.length) return array;
    let filterNotes = [...array];

    return filterNotes.filter((todo) => {
      const todoTags = todo.tags.map((tag) => tag.value);
      return selectedTags.every((selectedItem) =>
        todoTags.includes(selectedItem.value)
      );
    });
  };

  return (
    <div className='md:w-9/12 flex flex-col md:flex-row justify-evenly items-center mb-10'>
      {/* search list */}
      <div className='w-full md:w-44 flex flex-col'>
        <label htmlFor='searchInput' className='opacity-70 mb-0.5'>
          Search
        </label>
        <input
          type='text'
          id='searchInput'
          value={searchValue}
          onChange={searchHandler}
          maxLength='30'
          placeholder='Note search...'
          className='p-2 text-main-white placeholder:text-slate-400 rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
        />
      </div>

      {/* sort */}
      <div className='md:w-24 w-full flex flex-col my-3 md:my-0'>
        <label className='opacity-70'>Sort</label>
        <select
          value={sort}
          onChange={({ target }) => setSort(target.value)}
          className='p-2 text-slate-400 rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
        >
          <option value='latest'>Latest</option>
          <option value='earliest'>Earliest</option>
        </select>
      </div>

      {/* tags */}
      <div className='w-full md:w-40 flex flex-col'>
        <label className='opacity-70 mb-0.5'>Tags</label>
        <Select
          options={optionsTags}
          isMulti
          onChange={selectTagHandler}
          styles={styleSelector}
          components={animatedComponents}
        />
      </div>
    </div>
  );
};

export default FilterNotes;
