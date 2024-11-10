import React from 'react';
import Styles from './team.module.css';
import { Box, Image, Text, Heading, SimpleGrid } from '@chakra-ui/react';

const Team = () => {
    const teamMembers = [
        {
            name: "Sathish Kumar Rajagopal",
            role: "Executive Director",
            image: "https://www.gtholidays.in/wp-content/uploads/2020/01/Sathish-Kumar-Rajagopal.jpg",
        },
        {
            name: "Yamini Karthik",
            role: "Director - Operations",
            image: "https://www.gtholidays.in/wp-content/uploads/2022/02/Yamini-Karthik.jpg",
        },
        {
            name: "Velayutham Murugan",
            role: "Team - Central",
            image: "https://www.gtholidays.in/wp-content/uploads/2022/06/GT-Holidays-Team-Velu.jpg",
        },
        {
            name: "Kalpana S",
            role: "Team - Sales & Operations",
            image: "https://www.gtholidays.in/wp-content/uploads/2022/02/S-KALPANA.jpg",
        },
    ];

    return (
        <Box className={Styles['team-container']}>
            <Heading className={Styles.Heading}> The Team Behind Your Happiness </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
                {teamMembers.map((member, index) => (
                <Box key={index} className={Styles['team-member']}>
                    <Image
                        src={member.image}
                        alt={member.name}
                        className="team-member-img"
                    />
                    <Box className={Styles['team-member-content']}>
                        <Heading as="h3" className={Styles['team-member-name']}>
                            {member.name}
                        </Heading>
                        <Text className={Styles['team-member-role']}>{member.role}</Text>
                    </Box>
                </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Team;
