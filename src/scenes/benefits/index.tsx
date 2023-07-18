import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Peaceful and Functional Studios",
        description: "Gain access to several studios that center mindfulness and community, making your space as personal or interactive as needed."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Take one of our countless classes, differing in type of style and flow. Slow down and connect with your body or get your mind prepared for the day."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert Intructors",
        description: "Each of our many talented instructors brings a unique blend of expertise, ensuring a diverse and enriching yoga experience that caters to your goals."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-36"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div
                className="md:my-5 md:w-3/5"
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
                <HText>MORE THAN JUST A STUDIO.</HText>
                <p className="my-5 text-sm">
                    Immerse yourself in a variety of yoga classes led by our experienced and
                    passionate instructors. From gentle and restorative sessions to dynamic
                    vinyasa flows, we offer a diverse range of classes tailored to meet your
                    unique needs and goals.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
}

export default Benefits