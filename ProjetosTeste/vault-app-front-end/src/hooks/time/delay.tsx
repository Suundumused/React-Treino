export const delay: (milliseconds: number) => Promise<void> = async (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}