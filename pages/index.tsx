import type { NextPage } from "next"
import Head from "next/head"
import { Banner, Footer, Header, MediumCard, SmallCard } from "../components/index";
import LargeCard from "../components/LargeCard";
import { CardData } from "../models/CardData";
import { ExploreData } from "../models/exploreData";

const Home: NextPage = (props: any) => {
  const exploreData: ExploreData[] | null = props.exploreData;
  const cardData: CardData[] | null = props.cardData;
  return (
      <div className="">
        <Head>
          <title>Airbnb</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Header/>
        <Banner/>

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-2xl font-semibold pb-4">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {exploreData && exploreData.map(item => <SmallCard key={item.id} props={item}/>)}
            </div>
          </section>
          <section className="pt-6">
            <h2 className="text-2xl font-semibold pb-4">Live Anywhere</h2>
            <div className='flex items-center space-x-4 overflow-scroll scrollbar-hide'>
              {cardData && cardData.map(card => <MediumCard key={card.id} props={card}/>)}
            </div>
          </section>
          <LargeCard
              img='https://links.papareact.com/4cj'
              title='The Greatest Outdoors'
              description='Wishlist curated by Airbnb'
              buttonText='Get inspired'
          />
          <Footer />
        </main>
      </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:8000/api/explore")
      .then(res => res.json());

  const cardData = await fetch("http://localhost:8000/api/card")
      .then(res => res.json());
  return {
    props: {
      exploreData,
      cardData
    }
  };
}