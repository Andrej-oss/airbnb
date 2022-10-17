import Image from "next/image";

function Footer() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-20 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-gray-800 text-sm'>
          <h5 className='text-semibold font-bold'>ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
          <h5 className='text-semibold font-bold'>COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is fake site</p>
          <p>About community</p>
          <p>Join to community</p>
          <p>Who's in the community</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
          <h5 className='text-semibold font-bold'>HOST</h5>
          <p>SPA creating</p>
          <p>Flexible</p>
          <p>Super fast</p>
          <p>Scalable</p>
          <p>Durable</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
          <h5 className='text-semibold font-bold'>SUPPORT</h5>
          <p>Call us</p>
          <p>Write us</p>
          <p>Address</p>
          <p>Email</p>
          <p>Social media</p>
        </div>
      </div>
  );
}

export default Footer;