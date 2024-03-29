import React from 'react'
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Connect with multiple sellers',
    description: 'Streamline your shopping experience by effortlessly connecting with numerous sellers, unlocking a world of options tailored to your preferences and needs',
  },
  {
    title: 'Monthly Subscription plans',
    description: 'Enjoy hassle-free entertainment or services with our flexible monthly subscription plans, ensuring convenience and value every month.',
  },
  {
    title: 'Easy Payment Options',
    description: 'Conveniently manage your payments with our user-friendly platform, offering seamless transactions for hassle-free shopping experiences',
  },
  {
    title: 'Home cooked food made easy',
    description: 'Delight in delicious, nutritious dishes prepared with love and care, ready to savor without the stress of cooking',
  },
];

const WhyUs = () => {
  return (     
 <div className="bg-neutral-300">
  <div className="relative h-screen flex items-center justify-end bg-cover bg-center" style={{ backgroundImage: `url(${'/src/assets/whyus1.jpg'})` }}>
    <div className="text-neutral-300 text-right pr-8 absolute top-1/4">
      <h1 className="text-7xl mb-10">Ghar ka khanna bahar bhi!</h1>
      <h3 className="text-2xl mb-2"> Experience the convenience and variety that FeastHUB brings to your</h3>
      <h3 className="text-2xl mb-2">   doorstep, making every meal a delightful part of your day!  </h3>
      <h3 className="text-2xl mb-2">A centralized solution, simplifying the process</h3>
      <h3 className="text-2xl mb-2"> of discovering and enjoying diverse culinary options near you.</h3>
      <h3 className="text-2xl mb-2">  Savor diverse cuisines and flavors without leaving the comfort of your home.
</h3>
    </div>
  </div> 


      <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
    
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tired of visiting places for food?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Savor diverse cuisines and flavors without leaving the comfort of your home.
          </p>
          
          {/* <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Product Features</h2> */}
          
        </div>

        <div className="mt-10">
          
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
  </div>

  
  );
};

export default WhyUs;
