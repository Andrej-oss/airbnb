import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { ComponentProps, useState } from "react";
import { DateRangePicker} from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = (props: ComponentProps<any>) => {
  const { placeholder } = props;
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const search = () => {
    return router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests
      }
    })
  }

  return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
        {/*  left */}

        <div onClick={() => router.push('/')}
             className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
          />
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-lg'>
          <input type="text" placeholder={placeholder || "start your search"}
                 value={searchInput}
                 onChange={(e) => setSearchInput(e.target.value)}
                 className="pl-5 flex-grow bg-transparent outline-none text-sm placeholder-gray-400 text-gray-600"/>
          <SearchIcon
              className=" hidden md:inline-flex h-10 bg-red-300 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>
        <div className="flex items-center justify-end space-x-2.5 text-gray-600">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center space-x-1 border-2 rounded-full p-2">
            <MenuIcon className="h-6 cursor-pointer"/>
            <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
        </div>
        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
              <DateRangePicker
                 ranges={[selectionRange]}
                 minDate={new Date()}
                 rangeColors={['#fd5b61']}
                 onChange={handleSelect}
              />
              <div className='flex items-center border-b mb-4'>
                <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of guests</h2>
                <UsersIcon className='h-5' />
                <input type='number'
                       value={numberOfGuests}
                       onChange={(e) => setNumberOfGuests(+e.target.value)}
                       min={1}
                       max={10}
                       className='w-12 pl-2 text-lg outline-none text-red-400'/>
              </div>
              <div className='flex flex-grow'>
                <button
                    onClick={() => setSearchInput('')}
                    className='flex-grow text-gray-500'>Cancel</button>
                <button
                    onClick={search}
                    className='flex-grow text-red-400'>Search</button>
              </div>
            </div>
        )}
      </header>
  );
}

export default Header;