import Footer from "./Footer"
import { Worker, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import Navbar from "./Navbar"
import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const PdfViewer = () => {
    const [pdfUrl, setPdfUrl] = useState("");
    useEffect(() => {
        const url = new URL(window.location.href);
        const pdfUrl = url.searchParams.get('file');
        if (pdfUrl) setPdfUrl(`${API_URL}/${pdfUrl}`);
        console.log(pdfUrl);
    }, []);
    return (
        <div>
            <Navbar />
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="mt-20 mx-auto"  >
                    <Viewer fileUrl={pdfUrl} />
                </div>
            </Worker>
            <Footer />
        </div>
    )
}

export default PdfViewer
