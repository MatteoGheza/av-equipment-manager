import Footer from "./footer"
import ScrollToTopBtn from "./scrollToTopBtn"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

import type { ReactNode } from "react"
import { useRef } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    const sidebarRef = useRef();

    const handleSidebarBtn = () => {
        //@ts-ignore 18048
        sidebarRef.current.handleBtn();
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar ref={sidebarRef} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar sidebarBtnHandler={handleSidebarBtn} />
                        <div className="container-fluid">
                            <main>
                                {children}
                            </main>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <ScrollToTopBtn />
        </>
    )
}
