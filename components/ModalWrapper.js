"use client";

import { useState } from "react";

export default function ModalWrapper({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={`content ${isModalOpen ? "mt-52 lg:mt-36" : ""}`}>
        {children}
      </div>
    </>
  );
}
