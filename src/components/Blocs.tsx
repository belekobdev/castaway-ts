import React from 'react';
import img1 from '../img/img1.svg'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

const Blocs = () => {
    return (
        <div className="bg-[#191919]">
            <div className="container">
                <div className="  text-white flex items-center justify-between p-5">
                    <h1 className="text-[30px]">Latest episodes</h1>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">
                        View all episodes
                    </button>
                </div>
                <div className=" bg-black flex items-center justify-center flex-col mt-20">
                    <div
                       className="flex mb-4 py-[80px] bg-black px-[200px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max:w-80 hover:bg-gray-100 dark:border-gray-700 ">

                        <img
                            className="mr-44 object-cover w-full rounded-t-lg h-96 md:h-auto w-80 md:rounded-none md:rounded-l-lg"
                            src={img1} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="text-blue-700">Episode1</p>
                            <h1 className="mb-2 pt-6 pb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                The best microphone <br/> under $200</h1>
                            <p className="pb-7 mb-3 font-normal text-gray-700 dark:text-gray-400">
                                With so many microphones on the market, how are you supposed to know <br/>
                                what’s the best? Take a look at our top picks.</p>
                            <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">
                                View all episodes
                            </button>
                        </div>
                    </div>

                    <div
                       className="flex bg-black bg-black mb-4 py-[80px] px-[200px]  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max:w-80 hover:bg-gray-100 dark:border-gray-700 bg-black ">
                        <img
                            className="mr-44 object-cover w-full rounded-t-lg h-96 md:h-auto w-80 md:rounded-none md:rounded-l-lg"
                            src={img2} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="text-blue-700">Episode2</p>
                            <h5 className="pt-6 pb-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Mic tricks to take <br/> you to the next level</h5>
                            <p className="pb-7 mb-3 font-normal text-gray-700 dark:text-gray-400">Stop rolling with
                                those default settings on your mic. These small tweaks will <br/>
                                take you from sounding good to great.</p>
                            <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                View all episodes
                            </button>
                        </div>
                    </div>

                    <div
                       className="flex py-[80px] bg-black px-[200px]  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max:w-80 hover:bg-gray-100 dark:border-gray-700 bg-black ">
                        <img
                            className="mr-44 object-cover w-full rounded-t-lg h-96 md:h-auto w-80 md:rounded-none md:rounded-l-lg"
                            src={img3} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="text-blue-700">Episode3</p>
                            <h5 className="pt-6 pb-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Should you get outboard audio gear?</h5>
                            <p className="pb-7 mb-3 font-normal text-gray-700 dark:text-gray-400">Is hardware really
                                worth it when it comes to podcasting? The answer is...it <br/>
                                depends. Here’s our reasons on why you might want to consider picking <br/> something
                                up.</p>
                            <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                View all episodes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blocs;