import { ExploreData } from "../models/exploreData";
import Image from 'next/image';

function SmallCard(props: { props: ExploreData }) {
  return (
      <div className='flex items-center m-2 mt-5 space-x-4 transition duration-200
      transform easy-out rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105'>
        <div className='relative h-16 w-16'>
          <Image
              layout='fill'
              className='rounded-lg hover:scale-90'
          src={props.props.img}
          />
        </div>
        <div>
          <h2>{props.props.location}</h2>
          <h3 className='text-gray-500'>{props.props.distance}</h3>
        </div>
      </div>
  );
}

export default SmallCard;