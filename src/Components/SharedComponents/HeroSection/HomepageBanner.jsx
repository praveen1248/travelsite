import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Styles from './Styles.module.css'
//import './HomepageBanner.css'; // Assuming you'll have custom CSS
import Banner from './images/banner-1.jpg'
import scrollBanner from './images/shape-1.png'

const HomepageBanner = () => {
  return (
    <>
    
    <Box className={Styles.fullContainer}>
      <Box className={Styles.heroContainer}>
        <Box m={'auto'} maxWidth={'1440px'} width={'100%'} className={Styles.mnSection}>
          <Box className={Styles.mnHeading}>
            <Box className={Styles.mnHeadingContainer}>
              <Box className={Styles.textContainer} textAlign={'center'}>
                {/* <Image src='https://www.icelandtravel.is/because.svg' width={'100%'} /> */}
                Explore your travel
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={Styles.smallBanner}>
          <svg xmlns="http://www.w3.org/2000/svg" width="190" height="147" viewBox="0 0 190 147" fill="none"><g opacity="0.7" clip-path="url(#clip0_7349_16863)"><path d="M22.5106 44.9498C25.9738 44.5596 26.5603 41.5221 27.2585 38.3174C27.7891 35.7257 28.2639 34.4159 29.9117 34.2209C31.5595 34.0537 32.7325 35.2519 32.928 37.1748C33.1794 39.3484 32.0902 40.7418 30.6099 41.55L31.9785 43.4171C34.129 42.163 35.5533 39.8779 35.2182 36.924C34.8831 33.9143 32.7605 31.5177 29.5207 31.8521C26.1972 32.2144 25.6107 35.0847 24.9962 38.0387C24.4656 40.7418 24.0187 42.4138 22.1754 42.6089C20.5556 42.7761 19.2708 41.6614 18.9915 39.1255C18.7122 36.506 19.8015 34.8618 21.7006 33.9979L20.3042 32.0751C17.7347 33.3012 16.2824 35.9208 16.6455 39.3206C17.0644 42.9712 19.3267 45.2842 22.4826 44.9219L22.5106 44.9498Z" fill="#E1F5ED"></path><path d="M20.3602 58.6328L37.6761 53.533L37.0058 51.2479L19.6899 56.3476L20.3602 58.6328Z" fill="#E1F5ED"></path><path d="M29.2415 80.7036L30.1632 82.4035L46.0826 73.9876L44.9655 71.8697L33.0957 78.1398L40.6086 63.6767L39.7149 62.0046L23.7954 70.4206L24.9126 72.5385L36.8103 66.2405L29.2415 80.7036Z" fill="#E1F5ED"></path><path d="M43.5688 97.8421C40.6642 94.7766 40.9435 90.6244 43.8201 87.9213C46.6968 85.2182 50.8861 85.1624 53.7907 88.2278C55.4944 90.0392 56.053 92.4915 55.3268 94.5816L57.6449 95.2783C58.5386 92.3522 57.7566 89.036 55.4944 86.6394C51.724 82.6265 45.9986 82.6265 42.2282 86.1935C38.4578 89.7327 38.0947 95.4455 41.893 99.4305C44.1832 101.855 47.4788 102.802 50.4393 102.05L49.8528 99.737C47.7302 100.322 45.2724 99.6256 43.5967 97.8142L43.5688 97.8421Z" fill="#E1F5ED"></path><path d="M61.9181 107.094L68.2859 111.218L69.5147 109.351L63.119 105.199L66.1353 100.573L73.0617 105.06L74.2906 103.137L65.3813 97.3683L55.5503 112.472L64.5992 118.324L65.8281 116.43L58.79 111.859L61.9181 107.094Z" fill="#E1F5ED"></path><path d="M90.6852 112.389L90.7131 114.507L94.7348 114.451L90.6572 129.332L92.9474 129.945L97.6953 112.584L95.7124 112.054L90.6852 112.389Z" fill="#E1F5ED"></path><path d="M111.353 115.175C107.722 114.869 104.957 117.126 104.678 120.693C104.37 124.26 106.744 126.908 110.375 127.214C110.682 127.214 110.962 127.214 111.241 127.214L106.465 133.15L109.146 133.373L115.654 125.208C116.464 124.26 116.938 123.09 117.05 121.669C117.329 118.102 114.983 115.426 111.353 115.148V115.175ZM110.543 124.957C108.28 124.762 106.856 123.173 107.024 120.888C107.219 118.631 108.895 117.266 111.157 117.461C113.419 117.656 114.872 119.244 114.676 121.501C114.481 123.786 112.805 125.152 110.543 124.957Z" fill="#E1F5ED"></path><path d="M156.709 122.337C155.285 119.049 151.961 117.795 148.61 119.244C148.33 119.383 148.079 119.495 147.828 119.634L149.252 112.166L146.766 113.225L144.839 123.48C144.56 124.678 144.7 125.932 145.258 127.242C146.655 130.53 150.006 131.784 153.358 130.335C156.681 128.886 158.078 125.626 156.681 122.337H156.709ZM147.465 126.294C146.543 124.204 147.409 122.198 149.503 121.306C151.598 120.414 153.637 121.167 154.531 123.257C155.424 125.347 154.559 127.326 152.492 128.217C150.397 129.109 148.386 128.385 147.493 126.267L147.465 126.294Z" fill="#E1F5ED"></path><path d="M136.628 127.771C136.237 124.818 133.919 123.285 131.265 123.146L134.449 117.405L134.17 115.315L123.445 116.736L123.725 118.965L131.656 117.906L128.277 124.037L129.422 125.375L130.037 125.291C132.187 125.013 133.947 125.96 134.226 128.106C134.505 130.224 133.053 131.617 130.902 131.896C128.975 132.147 127.467 131.534 126.685 129.945L124.842 131.394C126.071 133.679 128.556 134.599 131.21 134.237C134.421 133.819 137.075 131.422 136.6 127.799L136.628 127.771Z" fill="#E1F5ED"></path><path d="M6.3122 52.3069L2.7373 53.0872C3.46345 56.4591 4.38511 59.8589 5.39055 63.1473L8.88165 62.0604C7.87621 58.8557 7.01042 55.5952 6.3122 52.3069Z" fill="#E1F5ED"></path><path d="M15.4448 86.2772C17.1485 89.259 18.9918 92.2408 20.9747 95.1111L23.9911 93.0489C22.0919 90.2622 20.2765 87.3919 18.6287 84.4937L15.4448 86.2772Z" fill="#E1F5ED"></path><path d="M7.82031 70.1697C9.04918 73.4023 10.4456 76.6071 11.9538 79.7282L15.2494 78.1398C13.7971 75.1301 12.4286 72.009 11.2276 68.8878L7.82031 70.1976V70.1697Z" fill="#E1F5ED"></path><path d="M6.78675 0.835897L3.21186 -0.00012207C2.40192 3.34395 1.75956 6.7995 1.25684 10.2272L4.88759 10.7567C5.36238 7.44045 6.00474 4.09637 6.78675 0.863764V0.835897Z" fill="#E1F5ED"></path><path d="M185.923 127.047C187.292 126.127 188.66 125.18 190.001 124.205V119.634C188.018 121.139 185.979 122.644 183.912 124.009L185.951 127.047H185.923Z" fill="#E1F5ED"></path><path d="M3.91063 35.1963L0.251953 35.4193C0.475384 38.8748 0.866388 42.3582 1.36911 45.758L4.97193 45.2007C4.46921 41.9123 4.10614 38.5125 3.8827 35.1685L3.91063 35.1963Z" fill="#E1F5ED"></path><path d="M3.65878 27.6164C3.65878 24.3838 3.79842 21.1233 4.04978 17.9186L0.391101 17.6121C0.111812 20.9004 -0.027832 24.2723 -0.027832 27.6443V28.0066H3.63085V27.6164H3.65878Z" fill="#E1F5ED"></path><path d="M100.572 145.495C104.007 146.052 107.498 146.443 110.933 146.693L111.185 143.043C107.833 142.792 104.454 142.402 101.13 141.872L100.544 145.467L100.572 145.495Z" fill="#E1F5ED"></path><path d="M119.675 143.349H118.418L118.39 147H119.675C122.719 147 125.791 146.888 128.808 146.666L128.528 143.015C125.596 143.238 122.607 143.349 119.675 143.349Z" fill="#E1F5ED"></path><path d="M152.631 138.612L153.664 142.123C156.988 141.148 160.311 140.005 163.523 138.723L162.183 135.323C159.054 136.55 155.843 137.664 152.631 138.612Z" fill="#E1F5ED"></path><path d="M135.707 142.235L136.209 145.857C139.645 145.384 143.08 144.743 146.459 143.99L145.649 140.423C142.382 141.176 139.03 141.789 135.707 142.235Z" fill="#E1F5ED"></path><path d="M25.3599 101.102C27.4825 103.833 29.7726 106.481 32.1466 109.017L34.8277 106.537C32.5376 104.084 30.3312 101.52 28.2645 98.873L25.3878 101.13L25.3599 101.102Z" fill="#E1F5ED"></path><path d="M168.802 132.481L170.366 135.797C173.494 134.32 176.622 132.704 179.61 130.976L177.767 127.827C174.862 129.499 171.846 131.088 168.802 132.509V132.481Z" fill="#E1F5ED"></path><path d="M51.2218 125.57C54.0426 127.549 57.031 129.416 60.0194 131.143L61.8347 127.967C58.9301 126.295 56.0535 124.483 53.2885 122.56L51.1938 125.542L51.2218 125.57Z" fill="#E1F5ED"></path><path d="M83.2002 141.343C86.4958 142.402 89.8752 143.321 93.2546 144.074L94.0645 140.507C90.7968 139.782 87.5012 138.89 84.3173 137.859L83.2002 141.343Z" fill="#E1F5ED"></path><path d="M37.3687 114.284C39.8822 116.652 42.5355 118.965 45.2446 121.111L47.5068 118.241C44.8815 116.151 42.3121 113.921 39.8822 111.636L37.3687 114.284Z" fill="#E1F5ED"></path><path d="M66.6108 134.655C69.7389 136.187 72.9228 137.609 76.1625 138.863L77.5031 135.463C74.3751 134.237 71.275 132.871 68.2586 131.394L66.6388 134.655H66.6108Z" fill="#E1F5ED"></path></g><defs><clipPath id="clip0_7349_16863"><rect width="190" height="147" fill="white"></rect></clipPath></defs></svg>
        </Box>
        <Image 
          src={Banner}
          position={'absolute'}
          height={'100%'}
          width={'100%'}
          inset={'0px'}
          color={'transparent'}
          className={Styles.bannerImage}
        />
      </Box>
    </Box>
    <Box className={Styles.patternlayer} backgroundImage={scrollBanner} ></Box>
    </>
  );
};

export default HomepageBanner;
