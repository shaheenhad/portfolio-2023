import { SideEl } from "../SideEl/SideEl";
import { email } from "../../util/config";

export const Email = () => {
  return (
    <SideEl side="right">
      <a className="sideEl__link" href={`mailto:${email}`}>
        {email}
      </a>
    </SideEl>
  );
};
