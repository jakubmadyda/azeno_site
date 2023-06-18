'use client'

import {useEffect, useState} from "react";
import {apiCall} from "@/api/api";
import Card from "@/components/Card";

interface Employee {
    fullName: string;
    seniority: number;
    photo: string;
    position: string;
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
        <div className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
            {employees.map(({fullName, seniority, id, position, photo}) => (
                <Card
                    fullName={fullName}
                    position={position}
                    photo={photo}
                    seniority={seniority}
                    key={id} />
                ))}</div>
    );
}

export default Page;