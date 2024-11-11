import React from 'react'
import { Container } from './Container'

const VisionMission = () => {
  return (
    <>
        <Container>
            <div className='flex xl:flex-row xs:flex-col  w-full max-w-7xl p-2 mx-auto'>
                <div className='w-1/2 xs:w-full bg-indigo-500 rounded-lg p-10'>
                    <p className='text-3xl font-bold text-center text-white'>Vision</p>
                    <div className='mt-5 text-white'>
                        <ul className='list-disc'>
                            <li className='mb-2'>To Become a trusted partner in digital transformation, providing innovative and sustainable information technology solutions to increase customer business productivity and efficiency.</li>
                            <li className='mb-2'>To become a market leader in providing intelligent information technology solutions, empowering society and encouraging digital economic growth in Indonesia.</li>
                            <li>To become an information technology company with a commitment to providing high-quality services and solutions tailored to the unique needs of each customer.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-10 xs:h-5'></div>
                <div className='w-1/2 xs:w-full bg-gray-100 rounded-lg p-10'>
                    <p className='text-3xl font-bold text-center'>Mission</p>
                    <div className='mt-5'>
                        <ul className='list-disc'>
                            <li className='mb-2'>Build long-term partnerships with customers, understand their needs, and provide the right solutions.</li>
                            <li className='mb-2'>Develop and apply the latest information technology to improve customer business performance.</li>
                            <li>Building a culture of innovation that encourages the development of new and creative solutions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default VisionMission