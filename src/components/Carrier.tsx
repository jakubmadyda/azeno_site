import React from "react";
import {apiCall} from "@/api/api";
import {Content} from "@/components/About";
import FormCarrier from "@/components/FormCarrier";

async function Carrier() {

    const content = await apiCall<Content>({endpoint: 'contents/2'})

    return (
        <>
            <h1 className="text-center text-5xl mb-5">{content.mainTitle}</h1>
            {content.texts.map((text) => (
                <p>{text.content}</p>
            ))}
            <FormCarrier/>
        </>
    );
}

export default Carrier;