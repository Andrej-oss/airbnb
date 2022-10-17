import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
        {/*  left */}

        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
          />
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-lg'>
          <input type='text' placeholder='start your search'
                 className='pl-5 flex-grow bg-transparent outline-none text-sm placeholder-gray-400 text-gray-600' />
          <SearchIcon
              className=' hidden md:inline-flex h-10 bg-red-300 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        <div className='flex items-center justify-end space-x-2.5 text-gray-600'>
          <p className='hidden md:inline'>Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer' />
          <div className='flex items-center space-x-1 border-2 rounded-full p-2'>
            <MenuIcon className='h-6 cursor-pointer' />
            <UserCircleIcon className='h-6 cursor-pointer' />
          </div>
        </div>
      </header>
  );
}

export default Header;