import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = (event: Event) => {
            setScrollToTopBtn(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a className="scroll-to-top rounded" style={{ opacity: (scrollToTopBtn ? 100 : 0) }} href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>
    )
}