import { FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiSpring,
  SiPostgresql,
  SiAngular,
  SiSonarcloud,
  SiPostman,
} from "react-icons/si";

export const Stack = [
  {
    first: [
      {
        name: "Java",
        logo: <FaJava />,
      },
      {
        name: "JavaScript",
        logo: <IoLogoJavascript />,
      },
      {
        name: "TypeScript",
        logo: <SiTypescript />,
      },
    ],
    second: [
      {
        name: "Spring Boot",
        logo: <SiSpring />,
      },
      {
        name: "React",
        logo: <FaReact />,
      },

      {
        name: "Angular",
        logo: <SiAngular />,
      },
    ],
    third: [
      {
        name: "PostgreSQL",
        logo: <SiPostgresql />,
      },
      {
        name: "SonarCloud",
        logo: <SiSonarcloud />,
      },

      {
        name: "Postman",
        logo: <SiPostman />,
      },
    ],
  },
];
