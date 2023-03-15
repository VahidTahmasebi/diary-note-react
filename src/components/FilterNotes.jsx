import React, { useEffect, useState } from 'react';
import TagItem from './TagItem';

const FilterNotes = ({ notes, setFilteredProducts }) => {
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('latest');
  const [selectedTag, setSelectedTag] = useState('');

  // filter on a data
  useEffect(() => {
    let result = notes;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filterSelectedTag(result);
    setFilteredProducts(result);
  }, [notes, sort, searchValue, selectedTag]);

  // search handler
  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  // filter search title
  const filterSearchTitle = (array) => {
    return array.filter((note) =>
      note.subject.toLowerCase().includes(searchValue)
    );
  };

  // sort date
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === 'latest') {
        return new Date(a.createAt) > new Date(b.createAt) ? -1 : 1;
      } else if (sort === 'earliest') {
        return new Date(a.createAt) > new Date(b.createAt) ? 1 : -1;
      }
    });
  };

  // tag filter
  const filterSelectedTag = (array) => {
    if (!selectedTag) return array;
    return array.filter((item) => item.tags.tags == selectedTag);
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
          name='searchInput'
          id='searchInput'
          value={searchValue}
          onChange={searchHandler}
          maxLength='30'
          placeholder='note search'
          className='p-2 text-main-white placeholder:text-slate-400 rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
        />
      </div>

      {/* sort */}
      <div className='md:w-24 w-full flex flex-col my-3 md:my-0'>
        <label htmlFor='sort-products' className='opacity-70'>
          Sort
        </label>
        <select
          name='sort-products'
          id='sort-products'
          value={sort}
          onChange={({ target }) => setSort(target.value)}
          className='p-2 text-slate-400 rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
        >
          <option value='latest'>latest</option>
          <option value='earliest'>earliest</option>
        </select>
      </div>

      {/* tags */}
      <div className='w-full md:w-40 flex flex-col'>
        <label htmlFor='sort-products' className='opacity-70 mb-0.5'>
          Tags
        </label>
        <select
          name='tags'
          id='tags'
          value={selectedTag}
          onChange={({ target }) => setSelectedTag(target.value)}
          className='p-2 text-slate-400 rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
        >
          <option value='' className=' mt-20'>
            all
          </option>
          {notes.map((note) => (
            <TagItem key={note.id} {...note} />
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterNotes;
