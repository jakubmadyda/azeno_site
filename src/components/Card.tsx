import Image from "next/image";
import {faker} from "@faker-js/faker";

type CardProps = {
    fullName: string;
    position: string;
    photo: string;
    seniority: number;
}

const Card = ({ fullName, position, photo, seniority }: CardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            {!photo && (
                <Image src={faker.image.urlLoremFlickr({category: 'people'})} alt={fullName} width="100" height="120" className="w-full mb-4 rounded-md" />
            )}
            <h2 className="text-xl text-gray-600 font-bold mb-2">{fullName}</h2>
            <p className="text-gray-600 mb-2">{position}</p>
            <p className="text-gray-600">
                Seniority: {seniority} {seniority === 1 ? 'year' : 'years'}
            </p>
        </div>
    );
};

export default Card;