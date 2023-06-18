import React from "react";
import Navbar from "@/components/Navbar";

function Layout({children}: { children: React.ReactNode }) {
    return <section>
        <Navbar/>
        {children}
    </section>
}

export default Layout;