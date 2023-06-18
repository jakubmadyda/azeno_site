import Image from "next/image";
import {faker} from "@faker-js/faker";
import Icon from "@/components/Icon";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

type CardProps = {
    fullName: string;
    position: string;
    photo: string;
    seniority: number;
    github: string;
    linkedin: string
}

const Card = ({ fullName, position, photo, seniority, github, linkedin }: CardProps) => {
    return (
        <div className="flex flex-wrap gap-y-5 bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col w-full">
                {!photo && (
                    <Image src={faker.image.urlLoremFlickr({category: 'people'})} alt={fullName} width="100" height="120" className="w-full mb-4 rounded-md" />
                )}
                <h2 className="text-xl text-gray-600 font-bold mb-2">{fullName}</h2>
                <p className="text-gray-600 mb-2"><span className="text-xs">Role:</span> <span className="font-bold">{position}</span> </p>
                <p className="text-gray-600">
                    <span className="text-xs">Seniority:</span> <span className="font-bold">{seniority} {seniority === 1 ? 'year' : 'years'}</span>
                </p>
            </div>
            <div className="flex justify-end self-end space-x-4 w-full">
                <a target="_blank" href={github}>
                    <Icon className="text-gray-600 text-xl" iconName={faGithub}/>
                </a>
                <a target="_blank" href={linkedin}>
                    <Icon className="text-gray-600 text-xl" iconName={faLinkedin}/>
                </a>

            </div>
        </div>
    );
};

export default Card;