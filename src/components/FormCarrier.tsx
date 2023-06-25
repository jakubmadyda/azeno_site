'use client'

import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {validateEmail} from "@/helpers/validators";

function FormCarrier() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm<>()
    const [formSent, setFormSent] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-4">
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-700" htmlFor="mail">Contact email</label>
                <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                    id="mail" {...register("mail", {
                    required: "Email is required!",
                    validate: { matchPattern: validateEmail }
                })} />
                {errors.mail?.message && <p className="text-red-500 mt-1 text-sm">{errors.mail.message}</p>}
            </div>
            <div className="border-2 border-dashed border-gray-400 p-4 rounded-lg mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="cv">Drag and drop your CV here</label>
                <input
                    id="cv"
                    type="file"
                    {...register("cv", {
                        required: "CV file is required!"
                    })}
                    className="hidden"
                />
                <div className="flex items-center justify-center h-32 bg-gray-100 border border-gray-300 rounded-lg">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p className="ml-2 text-sm text-gray-500">Drag and drop your CV file here, or click to browse</p>
                </div>
                {errors.cv?.message && <p className="text-red-500 mt-2 text-sm">{errors.cv.message}</p>}
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
        </form>

    );
}

export default FormCarrier;