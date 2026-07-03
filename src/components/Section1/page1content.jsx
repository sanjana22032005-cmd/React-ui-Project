import React, { useState } from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';
import FilterTabs from './filtertabs';
import Searchbar from './searchbar';

const Page1content = (props) => {

  const [filter, setFilter] = useState('All');

  const filteredUsers = props.users.filter((user) => {

    const matchesSearch =
      user.name.toLowerCase().includes(props.search.toLowerCase()) ||
      user.intro.toLowerCase().includes(props.search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      user.tag === filter ||
      user.accountType === filter;

    return matchesSearch && matchesFilter;

  });

  return (

    <div className="px-18 pt-0 pb-16 h-[90vh]">

      <div className="mb-8">

        <FilterTabs
          filter={filter}
          setFilter={setFilter}
        />

      </div>
      <div className="flex gap-8 h-[calc(100%-130px)]">

        <Leftcontent />

        <Rightcontent users={filteredUsers} />

      </div>

    </div>

  );
};

export default Page1content;