export type ComponentPropsTypes = {
    setBox : (e: React.MouseEvent<HTMLDivElement>, num: number) => void;
    changeTitle: React.MutableRefObject<HTMLDivElement>;
    reset: () => void;
    resetBoxes:   React.MutableRefObject<HTMLDivElement>[];
}