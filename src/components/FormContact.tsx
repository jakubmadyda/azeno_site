'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {apiCall} from "@/api/api";
import {validateEmail} from "@/helpers/validators";

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
        reset,
        formState: {errors}
    } = useForm<Inputs>()
    const [formSent, setFormSent] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await apiCall({endpoint: "messages", method: "POST", body: data})
        setFormSent(true);
        reset();
    }



    return (
        <div className="max-w-5xl m-auto">
            <h1 className="text-center text-5xl mb-5">Contact us</h1>
            {formSent && (
                <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-2 mb-4 rounded-md">
                    Formularz został poprawnie wysłany!
                </div>)}
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
                        id="mail" {...register("mail", {
                        required: "Email is required!",
                        validate: {matchPattern: validateEmail}
                    })}/>
                    {errors.mail?.message && <p className="text-red-500 mt-1 text-sm">{errors.mail.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                        id="message" {...register("message", {required: true})}/>
                    {errors.message && <p className="text-red-500 mt-1 text-sm">Message is required!</p>}
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
}

export default FormContact;