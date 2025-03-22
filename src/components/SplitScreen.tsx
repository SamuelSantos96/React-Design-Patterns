import { ReactNode } from 'react'

interface SplitScreenProps {
    children: [ReactNode, ReactNode];

    leftWeight: number;

    rightWeight: number;
}

export const SplitScreen = ({ children, leftWeight, rightWeight }: SplitScreenProps) => {
    const [left, right] = children;

    const leftWidth = `${leftWeight}rem`;
    const rightWidth = `${rightWeight}rem`;

    console.log("--- left", left);

    console.log("--- right", right);

    return (
        <section className='flex w-screen'>
            <div style={{ width: leftWidth }}>{left}</div>
            <div style={{ width: rightWidth }}>{right}</div>
        </section>
    )
}
