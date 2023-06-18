'use client'

import {useEffect, useState} from "react";
import {apiCall} from "@/api/api";

interface Paragraph {
    type: "paragraph",
    content: string
}

interface List {
    type: "list",
    content: string[]
}

interface Content {
    id: number,
    mainTitle: string,
    subtitle: string,
    image: string,
    texts: Array<Paragraph | List>
}

function Page() {
    const [content, setContent] = useState<Content | undefined>(undefined)

    useEffect(() => {
        apiCall<Content>({endpoint: 'contents/1'})
            .then(setContent)
    }, [])

    if (content === undefined) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h1 className="text-center text-5xl mb-5">{content.mainTitle}</h1>
            <div className="m-5">
                <h3>{content.subtitle}</h3>
                {content.texts.map((text) => (
                    <>{text.type === "paragraph" ? (
                        <p>{text.content}</p>
                    ) : (
                        <ul>
                            {text.content.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}</>
                ))}
            </div>

        </>
    );
}

export default Page;