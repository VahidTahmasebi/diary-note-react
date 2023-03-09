import React from 'react';
const TagItem = ({ ...note }) => {
  const { tags } = note;

  return (
    <>
      {tags.map((tag) => (
        <option key={tag.id_tag}>{tag.tags}</option>
      ))}
    </>
  );
};

export default TagItem;
