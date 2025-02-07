import React, { ReactElement } from "react";

interface ModalProps {
  visible: boolean;
  children: ReactElement | string;
  footer?: ReactElement | string;
  onClose: () => void;
}

export const Modal = ({
  visible = false,
  children = "",
  footer = "",
  onClose,
}: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-colored/50 "
        onClick={onClose}
      >
        <div className="absolute top-[25px] right-[20px] cursor-pointer z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fefefe"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div
          className="w-full max-w-[600px] bg-white relative min-h-[450px] p-[30px] flex flex-col overflow-hidden border-blue border-[2px] rounded-[20px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-grow">
            <div>{children}</div>
          </div>
          {footer && (
            <div className="flex items-center justify-end  border-t border-gray-300">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
