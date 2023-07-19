import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactPageGraphic from "@/assets/ContactPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
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
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET CONNECTED
                    </HText>
                    <p className="my-5">
                        Let your yoga journey begin with a simple message. We would love to hear from you!
                        Whether you have questions, feedback, or simply want to say hello, please feel free
                        to reach out using the form below.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ContactUs