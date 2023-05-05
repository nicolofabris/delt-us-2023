import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/type";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State Of The Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, itaque."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100 of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, itaque."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, itaque."
    }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            reprehenderit libero quae sunt et adipisci delectus vel obcaecati
            quos quas!
          </p>
        </div>

        <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit: BenefitType) => (
                <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
