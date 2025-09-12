import React, { useState } from "react";
import CV from "../assets/my cv (1).pdf"; // Update with your file path

const DownloadButton = () => {
  const [downloadStatus, setDownloadStatus] = useState("idle");

  const handleDownload = () => {
    setDownloadStatus("inProgress");

    // Simulate a download process
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = CV;
      link.download = "My_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadStatus("successful");
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn md:w-[8rem] w-[150px] md:h-[3rem] h-[50px]  border-2 border-yellow-500 rounded-lg flex items-center justify-center "
    >
      {downloadStatus === "idle" && "Download CV"}
      {downloadStatus === "inProgress" && "Downloading..."}
      {downloadStatus === "successful" && "Download Successful"}
    </button>
  );
};

export default DownloadButton;
