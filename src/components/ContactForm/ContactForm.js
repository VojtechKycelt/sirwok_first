import React from "react";
import styled from "styled-components";
import {COLOR_GRAY} from "../../constants/colors";

export const FormContainer = styled.div(() => ({
    background:COLOR_GRAY,
    margin: 24,
    padding:16,
    width:400
}));

export const InputContainer = styled.div(() => ({
    display:"flex",
    flexDirection:"column",
    gap:8,
    padding:16,
    width:"100%",
    "& input": {
        width:"max-content"
    }
}));

export const SubmitButtonContainer = styled.div(() => ({
    padding:16,
}));

export const SubmitButton = styled.button(() => ({
    padding:16,
}));

const ContactForm = () => {
    return (
        <FormContainer>
            <form action="./welcome.php" method="post">
                <InputContainer>
                    First Name:
                    <input type="text" name="first_name"/>
                </InputContainer>
                <InputContainer>
                    Last Name:
                    <input type="text" name="last_name"/>
                </InputContainer>
                <InputContainer>
                    E-mail:
                    <input type="text" name="from"/>
                </InputContainer>
                <InputContainer>
                    Subject:
                    <input type="text" name="subject"/>
                </InputContainer>
                <InputContainer>
                    Message:
                    <input type="text" name="message"/>
                </InputContainer>
                <SubmitButtonContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </SubmitButtonContainer>
            </form>
        </FormContainer>
    )
}

export default ContactForm;