"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface ModalContextPropsTwo {
  isModalOpenTwo: boolean;
  modalHeadingTwo: string;
  setIsModalOpenTwo: (state: boolean) => void;
  setModalHeadingTwo: (value: string) => void;
}

const ModalContext = createContext<ModalContextPropsTwo | undefined>(undefined);

export const ModalProviderTwo: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpenTwo, setIsModalOpenTwo] = useState<boolean>(false);
  const [modalHeadingTwo, setModalHeadingTwo] = useState("");

  return (
    <ModalContext.Provider
      value={{ isModalOpenTwo, setIsModalOpenTwo, modalHeadingTwo, setModalHeadingTwo }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal2 = (): ModalContextPropsTwo => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal2 must be used within a ModalProviderTwo");
  }
  return context;
};

