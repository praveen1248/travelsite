import React, { useRef, useState } from 'react';
import Styles from './Partners.module.css';
import { Box, Image, Link } from '@chakra-ui/react';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const partners = [
    {
      name: "Partner 1",
      logo: "path/to/partner1-logo.png",
      url: "https://www.partner1.com",
    },
    {
      name: "Partner 2",
      logo: "path/to/partner2-logo.png",
      url: "https://www.partner2.com",
    },
    {
      name: "Partner 3",
      logo: "path/to/partner3-logo.png",
      url: "https://www.partner3.com",
    },
    {
      name: "Partner 4",
      logo: "path/to/partner4-logo.png",
      url: "https://www.partner4.com",
    },
    {
      name: "Partner 5",
      logo: "path/to/partner5-logo.png",
      url: "https://www.partner5.com",
    },
    {
      name: "Partner 6",
      logo: "path/to/partner6-logo.png",
      url: "https://www.partner6.com",
    },
    // Add more partners as needed
  ];

  const totalPartners = partners.length;
  const partnersToShow = 4; // Number of logos to show at a time

  // Function to move left
  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalPartners - partnersToShow); // Loop back to the last 4 logos
    }
  };

  // Function to move right
  const scrollRight = () => {
    if (currentIndex < totalPartners - partnersToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first 4 logos
    }
  };

  return (
    <div className={`${Styles['partners-container']} ${Styles['scroll-arrow-left']}`}>
      <div
        className={Styles['scroll-arrow']}
        onClick={scrollLeft}
      >
        &#10094;
      </div>

      <div className={Styles['scroll-wrapper']} style={{ transform: `translateX(-${currentIndex * 200}px)` }}>
        {partners.map((partner, index) => (
          <Box key={index} className={Styles['partner-item']}>
            <Link href={partner.url} isExternal>
              <Image
                src={partner.logo}
                alt={partner.name}
                className={Styles['partner-logo']}
              />
            </Link>
          </Box>
        ))}
      </div>

      <div
        className={`${Styles['scroll-arrow']} ${Styles['scroll-arrow-right']}`}
        onClick={scrollRight}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Partners;
