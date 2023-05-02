import { SideEl } from "../SideEl/SideEl";
import "./Social.css";
import { Icon } from "../Icon/Icon";
import { social } from "../../util/config";

export const Social = () => {
  return (
    <SideEl side="left">
      <ul className="social">
        {social.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon className="social__icon" name={name} />
            </a>
          </li>
        ))}
      </ul>
    </SideEl>
  );
};
