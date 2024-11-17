import React, { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-y-auto bg-[rgba(0,0,0,0.5)] overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
