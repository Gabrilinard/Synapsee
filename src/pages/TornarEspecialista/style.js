import { styled } from "@stitches/react";

export const StyledRegistro = styled("registro", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ".container": {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${"https://img.freepik.com/fotos-premium/uma-foto-bonita-um-fundo-bonito-uma-foto-muito-bonita_1028782-9203.jpg"})`, 
        backgroundSize: "cover",

        ".containerRegistro": {
            borderTop: "10px solid #0047ab",
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
        },

        "required:after" :{
            content: " *",
            color: "red"
        },

        h2: {
            color: "black",
            fontSize: "24px",
            marginBottom: "20px",
        },

        ".registroItens": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            label: {
                marginBottom: "8px",
                fontSize: "16px",
                fontWeight: "bold",
            },

            input: {
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",

                "&:focus": {
                    outline: "none",
                    borderColor: "#007bff",
                    boxShadow: "0px 0px 5px rgba(0, 123, 255, 0.3)",
                },
            },

            "input[type='button']": {
                padding: "10px 20px",
                backgroundColor: "#0047ab",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",

                "&:hover": {
                    backgroundColor: "#0056b3",
                },
            },
        },
    },
}) 