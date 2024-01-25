'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// icons
import { GiTrophyCup } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";

// Image
import Image from 'next/image';
import img_1 from '../../../public/images/img-1.jpg';
import img_2 from '../../../public/images/img-2.jpg';
import img_3 from '../../../public/images/img-3.jpg';

const img_obj = [
    {
        id: 1,
        name: "image 1",
        image: img_1,
        icon: <IoWallet />,
        title: "Get started with Argon",
        desc: "There’s nothing I really wanted to do in life that I wasn’t able to get good at."
    },
    {
        id: 2,
        name: "image 2",
        image: img_2,
        icon: <GiTrophyCup />,
        title: "Share with us your design tips!",
        desc: "Don’t be afraid to be wrong because you can’t learn anything from a compliment."
    },
    {
        id: 3,
        name: "image 3",
        image: img_3,
        icon: <FaLightbulb />,
        title: "Faster way to create web pages",
        desc: "That’s my skill. I’m not really specifically talented at anything except for the ability to learn."
    }
]

const Slider = (props) => {
    return (
        <div className={`slider_div h-[23rem] rounded-md overflow-hidden ${props.class}`}>
            <Swiper navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay, Navigation]} className="mySwiper">
                {
                    img_obj.map((images_obj) => (
                        <SwiperSlide key={images_obj.id} className='relative'>
                            <Image src={images_obj.image} className='Img' alt={images_obj.name} />
                            <ul className='absolute bottom-0 p-2 sm:p-5'>
                                <li className='text-base bg-white rounded-sm p-2 m-4 mb-3 w-fit text-black font-semibold'> {images_obj.icon} </li>
                                <li className='text-start text-xl p-4 pt-0 pb-2 text-white font-semibold'> {images_obj.title} </li>
                                <li className='text-start text-[1.02rem] p-4 pt-0 text-white font-normal'>
                                    {images_obj.desc}
                                </li>
                            </ul>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Slider;