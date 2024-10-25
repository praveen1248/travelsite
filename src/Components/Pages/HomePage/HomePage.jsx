import React from 'react'
import HomepageBanner from '../../SharedComponents/HeroSection/HomepageBanner'
import AboutSection from '../../SharedComponents/AboutSection/AboutSection'
import WhatWeDo from '../../SharedComponents/WhatWeDo/WhatWeDo'
import ExploretheTravel from '../../SharedComponents/ExploretheTravel/ExploretheTravel'

const HomePage = () => {
    return (
        <>
            <HomepageBanner />
            <AboutSection />
            <WhatWeDo />
            <ExploretheTravel />
        </>
    )
}

export default HomePage