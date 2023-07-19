import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactPageGraphic from "@/assets/ContactPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="bg-primary-100 w-full pt-24 pb-32">
            <div className="w-5/6 mx-auto">
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

                    {/* FORM AND IMAGE */}
                    <div className="mt-10 justify-between gap-8 md:flex">
                        <motion.div
                            className="mt-10 basis-3/5 md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 50
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0
                                }
                            }}
                        >
                            <form
                                target="_blank"
                                onSubmit={onSubmit}
                                action="https://formsubmit.co/be0a2bf19d66f90579aab6bf033a8dd2"
                                method="POST"
                            >
                                <input
                                    className={inputStyles}
                                    type="text"
                                    placeholder="NAME"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.name.type === "required" && "This field is required."}
                                        {errors.name.type === "maxLength" && "Max length is 100 characters."}
                                    </p>
                                )}

                                <input
                                    className={inputStyles}
                                    type="text"
                                    placeholder="EMAIL"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.email.type === "required" && "This field is required."}
                                        {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )}

                                <textarea
                                    className={inputStyles}
                                    placeholder="MESSAGE"
                                    rows={4}
                                    cols={50}
                                    {...register("message", {
                                        required: true,
                                        maxLength: 2000,
                                    })}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.message.type === "required" && "This field is required."}
                                        {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUs