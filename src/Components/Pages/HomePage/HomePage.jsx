import React from 'react'
import HomepageBanner from '../../SharedComponents/HeroSection/HomepageBanner'
import AboutSection from '../../SharedComponents/AboutSection/AboutSection'
import WhatWeDo from '../../SharedComponents/WhatWeDo/WhatWeDo'
import ExploretheTravel from '../../SharedComponents/ExploretheTravel/ExploretheTravel'
import BannerBottom from '../../SharedComponents/BannerBottom/BannerBottom'

const HomePage = () => {
    return (
        <>
            <HomepageBanner />
            <BannerBottom />
            <AboutSection />
            <WhatWeDo />
            <ExploretheTravel />
        </>
    )
}

export default HomePage