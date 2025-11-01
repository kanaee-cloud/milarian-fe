import { createContext, useContext, useState } from "react";
import { UmkmModal } from "../components/UmkmModal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  const openModal = (umkm) => setSelectedUmkm(umkm);
  const closeModal = () => setSelectedUmkm(null);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      {selectedUmkm && (
        <UmkmModal umkm={selectedUmkm} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
