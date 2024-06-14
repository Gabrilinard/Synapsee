import styled from 'styled-components';

export const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    min-height: 100vh;
    padding: 160px;
    font-family: Arial, sans-serif;

    .content {
        width: 100%;
        max-width: 600px;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1 {
        font-size: 24px;
        color: #333333;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: #666666;
        margin-bottom: 20px;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 14px;
    color: #555555;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 14px;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45A049;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }
`;
