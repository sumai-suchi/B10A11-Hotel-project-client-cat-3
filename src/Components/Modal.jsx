/* eslint-disable react/prop-types */

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-black text-amber-100 rounded-t-2xl rounded-r-full  w-96 lg:w-3xl p-6 rounded-lg shadow-lg lg:h-3/6">
       
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
};

export default Modal;