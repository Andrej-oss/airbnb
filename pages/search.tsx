import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { Footer, Header, InfoCard, Map } from "../components/index";
import { format } from "date-fns";
import { Apartment } from "../models/Apartment";

const Search: NextPage = (props: any) => {
  const apartments: Apartment[] | null = props.apartments;
  const router: NextRouter = useRouter();
  const { location, startDate, endDate, numberOfGuests} = router.query;
  // @ts-ignore
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  // @ts-ignore
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
      <div>
        <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>
        <main className="flex">
          <section className='flex-grow px-4 pt-14'>
            <p className="text-sm">
              +300 stays {range} {numberOfGuests} guests
            </p>
            <h3 className="text-3xl font-semibold m-3 mb-8">Stays in {location}</h3>
            <div className="hidden md:inline-flex mb-4 space-x-4 whitespace-nowrap text-gray-800">
              <p className="button">Cancellation flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
            {apartments && apartments.map(apartment => <InfoCard apartment={apartment} key={apartment.id}/>)}
          </section>
          <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map apartments={apartments} />
          </section>
        </main>
        <Footer/>
      </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const apartments: Apartment[] = await fetch('http://localhost:8000/api/apartment')
      .then(res => res.json());

  return {
    props: {
      apartments
    }
  };
}