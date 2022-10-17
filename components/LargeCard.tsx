import Image from "next/image";

interface LargeCardProps {
  img: string,
  title: string,
  description: string,
  buttonText: string
}

function LargeCard({
                     img,
                     title,
                     description,
                     buttonText
                   }: LargeCardProps) {
  return (
      <section className='relative py-16 cursor-pointer'>
        <div className="relative h-96 min-w-[300px]">
          <Image
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              src={img}/>
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-2xl mb-3 w-64'>{title}</h3>
          <p>{description}</p>
          <button className='text-sm text-white px-4 py-2 mt-4 rounded-lg bg-gray-900'>{buttonText}</button>
        </div>
      </section>
  );
}

export default LargeCard;