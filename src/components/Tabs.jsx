export default function Tabs({children, button, buttonContainer = "menu"}){
    const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>{button}</ButtonContainer>
            {children}
        </>
    );
}