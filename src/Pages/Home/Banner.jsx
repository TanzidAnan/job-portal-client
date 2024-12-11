
import { motion } from "framer-motion";
import { easeInOut } from "motion";
import tame1 from '../../assets/tame/tame1 (1).jpg'
import tame2 from '../../assets/tame/tame1 (2).jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={tame1}
                        animate={{ y: [70, 40, 70] }}
                        transition={{ duration: 7, repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400" />
                    <motion.img
                        src={tame2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 7,delay:3, repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400" />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 20, color: ['red'] }}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#feca32', '#9f91b6', '#3769fa'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >jobs</motion.span> for you</motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;