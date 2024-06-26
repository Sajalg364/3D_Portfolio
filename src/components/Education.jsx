import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../constants';
import EducationCard from './Cards/EducationCard';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    align-items: center;  
    // padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        // padding: 5px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Education = () => {
    return (
        <div >
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Enlightenment</p>
                <h2 className={`${styles.sectionHeadText}`}><span className="text-main">E</span>ducation.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </motion.p>
            </div>

            <Container id="education">
                <Wrapper>
                    <TimelineSection>
                        <Timeline>
                            {education.map((education, index) => (
                                <TimelineItem>
                                    <TimelineContent sx={{ py: '12px', px: '0px'}}>
                                        <EducationCard education={education} />
                                    </TimelineContent>
                                    <TimelineSeparator className='pl-[0.6rem]'>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        {index !== education.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                                    </TimelineSeparator>
                                </TimelineItem>    
                            ))}
                        </Timeline>
                    </TimelineSection>
                </Wrapper>
            </Container>
        </div>

    )
}

export default SectionWrapper(Education, 'education');