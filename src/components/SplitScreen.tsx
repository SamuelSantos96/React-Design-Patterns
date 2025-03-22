import { ReactNode } from 'react'

interface SplitScreenProps {
    children: [ReactNode, ReactNode];

    leftWeight: number;

    rightWeight: number;
}

export const SplitScreen = ({ children, leftWeight, rightWeight }: SplitScreenProps) => {
    const [left, right] = children;

    console.log("--- left", left);

    console.log("--- right", right);

    return (
        <section className='flex w-screen'>
            <div>{left}</div>
            <div>{right}</div>
        </section>
    )
}
