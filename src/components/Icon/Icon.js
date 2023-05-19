import { IconLinkedIn } from "./IconLinkedIn";
import { IconGithub } from "./IconGithub";

export const Icon = ({ name, className }) => {
  switch (name) {
    case "GitHub":
      return <IconGithub className={className} />;
    case "Linkedin":
      return <IconLinkedIn className={className} />;
    default:
      return;
  }
};
