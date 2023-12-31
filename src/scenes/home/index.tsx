import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:align-middle"
    >
        <motion.div
            className='flex flex-col md:flex-row mx-auto w-5/6 md:h-5/6 justify-center items-center'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis'>
                {/* HEADINGS */}
                <motion.div
                    className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                >
                    <img src={HomePageText} alt="home-page-text" />
                    <p className='mt-8 text-sm'>
                        Discover a haven of tranquility at ClubYoga, where transformative yoga classes meet the freedom of a dedicated free practice space. Immerse yourself in our diverse range of classes led by experienced instructors, tailored to every level.
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More!</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* IMAGE */}
            <div className='flex basis-4/5 justify-center z-10 
                md:ml-40 pt-20'
            >
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </motion.div>
    </section >
}

export default Home