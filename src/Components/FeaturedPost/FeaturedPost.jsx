import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const FeaturedPost = () => {
  return (
    <div className='max-w-[1400px]  mx-auto md:mt-40 '>

      <div className='text-center'>
        <h1 className='text-bold text-black text-3xl mb-4'>Featured Pets</h1>
        <p className='text-[#938683] text-sm'>Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum <br /> sat. Neceessitatibus sonet soluta, vim eu esse accusamus.</p>
      </div>

      <div className='mt-20 mx-16'>
        <Swiper
          slidesPerView={4} // number of slides to show at once
          spaceBetween={30} // space between slides
          navigation={true} // enable navigation buttons
          loop={true} // enable continuous loop mode
          modules={[Navigation]} // include the Navigation module here

          breakpoints={{
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is < 768px
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <div className="relative">
                <div className="bg-[#7EC1F7] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/1.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>
                <div className="absolute -bottom-3 left-0 right-0 flex justify-between items-center h-[50px]">
                  <div className="w-[60px] h-[60px] border-b-4 border-[#7EC1F7] rounded-bl-full"></div>
                  <div className="w-[60px] h-[60px] border-b-4 border-[#7EC1F7] rounded-br-full"></div>
                </div>
              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>German Breed <br />
                  Alsatian Puppies </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center'>

              <div className="relative">
                <div className="bg-[#FE8E68] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/2.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>


                <div className="absolute -top-0 left-0 right-0 flex justify-between items-center h-[20px]">
                  <div className="w-[70px] h-[70px] border-t-4 border-[#FE8E68] rounded-tl-full"></div>
                  <div className="w-[70px] h-[70px] border-t-4 border-[#FE8E68] rounded-tr-full"></div>
                </div>

              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>Leaving bed for <br /> Puppies </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center'>

              <div className="relative">
                <div className="bg-[#FBB742] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/3.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>
                <div className="absolute -bottom-3 left-0 right-0 flex justify-between items-center h-[50px]">
                  <div className="w-[60px] h-[60px] border-b-4 border-[#FBB742] rounded-bl-full"></div>
                  <div className="w-[60px] h-[60px] border-b-4 border-[#FBB742] rounded-br-full"></div>
                </div>
              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>Winter Clothing <br /> for Puppies</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center'>

              <div className="relative">
                <div className="bg-[#38C5D9] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/4.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>


                <div className="absolute -top-3 left-0 right-0 flex justify-between items-center h-[20px]">
                  <div className="w-[60px] h-[60px] border-t-4 border-[#38C5D9] rounded-tl-full"></div>
                  <div className="w-[60px] h-[60px] border-t-4 border-[#38C5D9] rounded-tr-full"></div>
                </div>

              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>German Breed <br />
                  Alsatian Puppies </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <div className="relative">
                <div className="bg-[#7EC1F7] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/1.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>
                <div className="absolute -bottom-3 left-0 right-0 flex justify-between items-center h-[50px]">
                  <div className="w-[60px] h-[60px] border-b-4 border-[#7EC1F7] rounded-bl-full"></div>
                  <div className="w-[60px] h-[60px] border-b-4 border-[#7EC1F7] rounded-br-full"></div>
                </div>
              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>German Breed <br />
                  Alsatian Puppies </h1>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat SwiperSlide for each card */}
          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <div className="relative">
                <div className="bg-[#FE8E68] flex justify-center items-center rounded-full w-[200px] h-[240px]">
                  <img src="/src/assets/image/Featured/2.png" alt="Puppy 2" className='w-[140px] h-[180px]' />
                </div>
                <div className="absolute -top-0 left-0 right-0 flex justify-between items-center h-[20px]">
                  <div className="w-[70px] h-[70px] border-t-4 border-[#FE8E68] rounded-tl-full"></div>
                  <div className="w-[70px] h-[70px] border-t-4 border-[#FE8E68] rounded-tr-full"></div>
                </div>
              </div>
              <div className='text-center mt-4'>
                <h1 className='font-bold text-black text-2xl mb-4'>Leaving bed for <br /> Puppies </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default FeaturedPost;