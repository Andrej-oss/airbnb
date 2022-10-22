import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Apartment } from "../models/Apartment";

function InfoCard({apartment}: { apartment: Apartment }) {
  return (
      <div className="flex py-7 px-2 pr-4 cursor-pointer
       hover:opacity-80 shadow-lg transition duration-200 easy-out first:border-t">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image src={apartment.img}
                 objectFit='cover'
                 layout="fill"
                 className='rounded-2xl'
          />
        </div>
        <div className="flex flex-col pl-5">
          <div className="flex justify-between">
            <p>{apartment.location}</p>
            <HeartIcon className="h-7 cursor-pointer"/>
          </div>
          <h4 className="text-xl">{apartment.title}</h4>
          <div className="border-b w-10 pt-2"/>
          <p className="pt-2 text-sm text-gray-500 flex-grow">{apartment.description}</p>
          <div className='flex justify-between pt-5'>
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400"/>
              {apartment.star}
            </p>
            <div>
              <p className='text-lg font-semibold pb-2'>{apartment.price}</p>
              <p className='text-right font-extralight'>{apartment.total}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default InfoCard;
