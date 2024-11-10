import React from 'react'
import HomepageBanner from '../../SharedComponents/HeroSection/HomepageBanner'
import AboutSection from '../../SharedComponents/AboutSection/AboutSection'
import WhatWeDo from '../../SharedComponents/WhatWeDo/WhatWeDo'
import ExploretheTravel from '../../SharedComponents/ExploretheTravel/ExploretheTravel'
import BannerBottom from '../../SharedComponents/BannerBottom/BannerBottom'
import ClientTestimonials from '../../SharedComponents/ClientTestimonials/ClientTestimonials'
import CallToAction from '../../SharedComponents/CallToAction/CallToAction'

const HomePage = () => {
    return (
        <>
            <HomepageBanner />
            <BannerBottom />
            <AboutSection />
            <ClientTestimonials />
            <CallToAction />
            {/* <WhatWeDo /> */}
            {/* <ExploretheTravel /> */}
        </>
    )
}

export default HomePage