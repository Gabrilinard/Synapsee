import { styled } from "@stitches/react";

export const StyledUsuario = styled("usuario", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url("https://static.vecteezy.com/ti/vetor-gratis/p2/21186383-mundo-autismo-consciencia-dia-enigma-padronizar-fundo-modelo-mundo-autismo-dia-colorida-enigma-bandeira-simbolo-do-autismo-autismo-saude-cuidado-medico-plano-fundo-do-abril-02-celebracao-gratis-vetor.jpg")`, 
    backgroundRepeat: "no-repeat", // Impede a repetição da imagem de fundo
    backgroundSize: "cover", // Ajusta a imagem para cobrir todo o elemento
    backgroundPosition: "center", // Foca no centro da imagem

    ".container": {
        margin: "0px",
        width: "100%", // Ajusta a largura para ocupar toda a largura da tela
        height: "80vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

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
