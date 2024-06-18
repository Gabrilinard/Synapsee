import { styled } from "@stitches/react";

export const StyledUsuario = styled("usuario", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${"https://veja.abril.com.br/wp-content/uploads/2023/12/GettyImages-1402241735.jpg.jpg?quality=90&strip=info"})`, 

    ".container": {
        margin: "0px",
        width: "120vw",
        height: "80vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",

        ".containerProfile": {
            borderTop: "10px solid #0056B3",
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
            padding: "20px",
        },

        h2: {
            color: "black",
            fontSize: "29px",
            marginBottom: "20px",
        },

        ".profileItens": {
            display: "flex",
            flexDirection: "column",

            "a": {
                marginTop: "20px",
                color: "black",
                textDecoration: "underline",
                "&:hover": {
                    color: "#0047ab",
                }
            }
        },

        img: {
            width:"20px",
            marginLeft: "15px",
            cursor: "pointer"
        }
    },
});
