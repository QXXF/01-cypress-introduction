import {
  GrInstall,
  GrEdit,
  GrTerminal,
  GrResources,
  GrUserExpert,
  GrKey,
} from "react-icons/gr";

import CourseGoal from "./CourseGoal";
import classes from "./CourseGoals.module.css";

const GOALS = [
  {
    icon: <GrInstall />,
    text: "Scopri come installare ed avviare Cypress",
  },
  {
    icon: <GrEdit />,
    text: "Scopri come scrivere test con Cypress",
  },
  {
    icon: <GrTerminal />,
    text: "Comprendi le funzionalità e i comandi principali di Cypress",
  },
  {
    icon: <GrResources />,
    text: "Personalizza e configura Cypress per le tue esigenze",
  },
  {
    icon: <GrUserExpert />,
    text: "Scopri come scrivere ottimi test e segui le Best Practices",
  },
  {
    icon: <GrKey />,
    text: `Affronta problemi più complessi, es. flusso di auth`,
  },
];

function CourseGoals() {
  return (
    <ul className={classes.goals}>
      {GOALS.map((goal) => (
        <CourseGoal key={goal.text} {...goal} />
      ))}
    </ul>
  );
}

export default CourseGoals;
