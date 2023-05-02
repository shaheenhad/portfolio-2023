import Github from "../../images/github.svg";
import LinkedIn from "../../images/linkedin.svg";
import { IconGithub } from "./IconGithub";

export const Icon = ({ name, className }) => {
  switch (name) {
    case "GitHub":
      return <IconGithub className={className} />;
    case "Linkedin":
      return (
        <img className={className} src={LinkedIn} alt="Shaheen's LinkedIn" />
      );
    default:
      return;
  }
};
