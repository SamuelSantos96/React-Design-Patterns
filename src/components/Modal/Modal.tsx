import React, { ReactNode, useState } from 'react';

interface ModalProps {
    children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button
                className={'border p-5 bg-gray-300'}
                onClick={() => setShow(true)}
            >
                Show Modal
            </button>

            {show && (
                <section
                    className={
                        'fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black bg-opacity-50'
                    }
                    onClick={() => setShow(false)}
                >
                    <div
                        className={'bg-white mx-[10%] my-auto p-[20px] w-[50%]'}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                    >
                        <button
                            className={'border p-5 bg-gray-300'}
                            onClick={() => setShow(false)}
                        >
                            Hide Modal
                        </button>

                        {children}
                    </div>
                </section>
            )}
        </>
    );
};
