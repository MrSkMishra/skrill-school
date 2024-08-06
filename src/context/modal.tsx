"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalHeading, setModalHeading] = useState("");

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, modalHeading, setModalHeading }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
