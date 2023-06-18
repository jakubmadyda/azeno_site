'use client'

import {useEffect, useState} from "react";
import {apiCall} from "@/api/api";
import Card from "@/components/Card";

interface Employee {
    fullName: string;
    seniority: number;
    photo: string;
    position: string;
    github: string;
    linkedin: string;
}

interface EmployeeId extends Employee {
    id: number;
}

function Page() {
    const [employees, setEmployees] = useState<EmployeeId[]>([])

    useEffect(() => {
        const controller = new AbortController();

        apiCall<EmployeeId[]>({endpoint: "employees", signal: controller.signal})
            .then(setEmployees)
            .catch(console.error);

        return () => {
            controller.abort();
        }

    }, [])

    return (
        <>
            <h1 className="text-center text-5xl mb-5">Azeno heroes:</h1>
            <div className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
                {employees.map(({fullName, seniority, id, position, photo, github, linkedin}) => (
                    <Card
                        fullName={fullName}
                        position={position}
                        photo={photo}
                        seniority={seniority}
                        key={id}
                        github={github}
                        linkedin={linkedin}
                    />
                ))}
            </div>
        </>

    );
}

export default Page;