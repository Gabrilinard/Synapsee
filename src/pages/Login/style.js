import { styled } from "@stitches/react";

export const StyledLogin = styled("login", {
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

        ".containerLogin": {
            borderTop: "10px solid #0047ab",
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
        },

        h2: {
            color: "black",
            fontSize: "24px",
            marginBottom: "20px",
        },

        ".loginItens": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            
        },
    },
});
