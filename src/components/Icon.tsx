import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    iconName: IconProp;
    className?: string;
}

function Icon({iconName, className}: IconProps) {
    return (
        <FontAwesomeIcon icon={iconName} className={className || ''}/>
    );
}

export default Icon;