import styled from 'styled-components';

export const StyledExpertRegistration = styled.div`
    background-color: #f5f5f5;
    padding: 4rem 2rem;
    
    .content {
        max-width: 800px;
        margin: 0 auto;
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-align: center;
        }
        
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            text-align: center;
        }
    }
`;

export const ExpertForm = styled.form`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

export const Label = styled.label`
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    
    &:focus {
        outline: none;
        border-color: #6c63ff;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    
    &:focus {
        outline: none;
        border-color: #6c63ff;
    }
`;

export const SubmitButton = styled.button`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    background-color: #6c63ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #524dd9;
    }
`;
