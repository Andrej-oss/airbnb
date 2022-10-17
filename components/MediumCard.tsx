import Image from "next/image"
import { CardData } from "../models/CardData";

function MediumCard(props: { props: CardData }) {
  console.log(props);
  return (
      <div className='cursor-pointer hover:scale-105 transform duration-300 easy-out p-3 -m'>
        <div className='relative h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80'>
          <Image
              className='rounded-xl'
              layout='fill'
          src={props.props.img}
          />
        </div>
        <h3>{props.props.title}</h3>
      </div>
  );
}

export default MediumCard;