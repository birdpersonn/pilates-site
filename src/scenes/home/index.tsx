import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:full-height md:pb-0"
    >
        <div className='flex flex-col md:flex-row mx-auto w-5/6 items-center justify-center'>
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-full sm:items-center'>
                {/* HEADINGS */}
                <div className='md:-mt-20'>
                    <img src={HomePageText} alt="home-page-text" />
                    <p className='mt-8 text-sm'>
                        Discover a haven of tranquility at ClubYoga, where transformative yoga classes meet the freedom of a dedicated free practice space. Immerse yourself in our diverse range of classes led by experienced instructors, tailored to every level.
                    </p>
                </div>

                {/* ACTIONS */}
                <div className='mt-8 flex items-center gap-8'>
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
                </div>
            </div>

            {/* IMAGE */}
            <div className='flex basis-4/5 justify-center z-10 
                md:ml-40 md:mt-16 md:justify-items-end pt-6'
            >
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </div>
    </section >
}

export default Home