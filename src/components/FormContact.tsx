'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {apiCall} from "@/api/api";

type Inputs = {
    fullName: string,
    mail: string,
    message: string
}

function FormContact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        apiCall({endpoint: "messages", method: "POST", body: data})
    }

    return (
        <div className="max-w-5xl m-auto">
            <h1 className="text-center text-5xl mb-5">Contact us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="fullName"
                    >
                        Full Name</label>
                    <input
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                        id="fullName" {...register("fullName")}/>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="mail">Mail</label>
                    <input
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                        id="mail" {...register("mail")}/>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                        id="message" {...register("message")}/>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
}

export default FormContact;