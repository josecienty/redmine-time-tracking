import useHotKey from "../../hooks/useHotkey";

type PropTypes = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ title, children, onClose }: PropTypes) => {
  /**
   * On "Escape" => close
   */
  useHotKey(onClose, { key: "Escape" });

  return (
    <div tabIndex={-1} className="fixed inset-0 z-40 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-800/50 p-4 animate-in fade-in dark:bg-gray-600/50">
      <div className="relative max-h-full w-full max-w-md">
        <div className="relative rounded-lg bg-white drop-shadow-lg animate-in fade-in zoom-in dark:bg-gray-800">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={onClose}
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-3">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
