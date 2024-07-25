import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
    return (
        <div className='w-[100vw] bg-[url("/images/sponsorsBg.png")] text-white p-10'>
            <h3 className='font-black text-4xl text-center pb-10'>Our Associates</h3>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col md:flex-row justify-evenly gap-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-center text-xl font-medium'>Sponsors</p>
                        <div className='flex flex-col md:flex-row gap-10 items-center'>
                            <Image src={'/images/sponsors/EliteGlobalPvtLtd.jpeg'} className='rounded-md' width={300} height={90} alt='sponsor' />
                            <Image src={'/images/sponsors/JankiElectromac.jpeg'} className='rounded-md' width={100} height={100} alt='sponsor' />
                        </div>
                    </div>
                    {/* ides */}
                    <div className='flex items-center flex-col gap-2'>
                        <div>
                            <p className='text-center font-medium text-xl'>Media Partner</p>
                        </div>
                        <Image src={'/images/sponsors/Lokmat.png'} className='rounded-md' width={200} height={100} alt='sponsor' />
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                    <p className='text-center font-medium text-xl'>Technically Co-sponsored by</p>
                    <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
                        <Image src={'/images/sponsors/YashEarthingPune.jpeg'} className='rounded-md' width={100} height={100} alt='sponsor' />
                        <Image src={'/images/sponsors/SkywingsTechnology.png'} className='rounded-md' width={150} height={100} alt='sponsor' />
                        {/* <Image src={'/images/sponsors/6SimplexPvtLtd.jpg'} className='rounded-md' width={200} height={50} alt='sponsor' /> */}
                        <Image src={'/images/sponsors/CryptoForensicTechnology.jpg'} className='rounded-md' width={200} height={100} alt='sponsor' />
                    </div>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center mt-10 self-center bg-[#31363F] rounded-xl xl:p-7 xl:backdrop-blur-sm xl:backdrop-contrast-[.5] bg-opacity-60 text-[#ffffff] max-sm:bg-transparent">
                    <h2 className='text-3xl font-bold text-center'>Call for a Sponsor</h2>
                    <h3 className='text-xl text-center w-full'>IC-ASET24 offer a range of sponsorship packages to suit different levels of participation and investment, including but not limited to:</h3>
                    <div className='flex justify-center max-sm:w-full'>
                        <ul className=' list-disc flex flex-col gap-4'>
                            <li>
                                <div className='flex flex-row gap-3'>
                                    <p className=' font-semibold'>Platinum Sponsorship:</p> <p>Premier branding and speaking opportunities, exclusive networking sessions, and more.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-row gap-3'>
                                    <p className=' font-semibold'>Gold Sponsorship:</p> <p>Significant branding visibility, participation in panel discussions, and additional benefits</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-row gap-3'>
                                    <p className=' font-semibold'>Silver Sponsorship:</p> <p>Brand exposure, booth space, and more.
                                        As a sponsor your organization will have the unique opportunity to:</p>
                                </div>
                                <div className='mt-3 pl-4'>
                                    <ul className=' list-decimal flex flex-col gap-y-1'>
                                        <li>
                                            <p>
                                                Showcase Your Brand: Gain prominent visibility among a targeted audience through various branding opportunities before, during, and after the event.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Network with Industry/Academic Leaders: Connect with influential professionals and establish valuable partnerships.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Present Your Products: Demonstrate your products, services, and solutions to an engaged and interested audience.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Enhance Your Corporate Image: Align your brand with cutting-edge industry advancements and thought leadership.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className='w-[70vw] max-sm:w-full'>
                                    <p>
                                        Enclosed, you will find our detailed sponsorship prospectus, outlining the various packages and the benefits they offer. We are also opened to customizing a package that aligns with your specific goals and budget.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors