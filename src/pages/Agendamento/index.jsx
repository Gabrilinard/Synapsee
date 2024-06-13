import { useState } from "react";
import { StyledContainer, StyledSearchForm, StyledResultsWrapper, StyledResultsContainer, StyledResultItem, StyledButton, ContentWrapper } from "./style";
import Header from "../../components/Header"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [searchCriteria, setSearchCriteria] = useState({
        localizacao: "",
        areaEspecializacao: "",
        disponibilidade: ""
    });
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const professionals = [
        { id: 1, nome: "João", localizacao: "São Paulo", areaEspecializacao: "Energia Solar", disponibilidade: "Disponível", img: "Imagens/joao.png" },
        { id: 2, nome: "Maria", localizacao: "Rio de Janeiro", areaEspecializacao: "Reciclagem", disponibilidade: "Ocupado", img: "Imagens/maria.png" },
        { id: 3, nome: "Carlos", localizacao: "Curitiba", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Disponível", img: "Imagens/carlos.png" },
        { id: 4, nome: "Ana", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/ana.png" },
        { id: 5, nome: "Pedro", localizacao: "Curitiba", areaEspecializacao: "Energia Solar", disponibilidade: "Disponível", img: "Imagens/pedro.png" },
        { id: 6, nome: "Mariana", localizacao: "Rio de Janeiro", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Ocupado", img: "Imagens/mariana.png" },
        { id: 7, nome: "Fernando", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/fernando.png" },
        { id: 8, nome: "Luana", localizacao: "Curitiba", areaEspecializacao: "Energia Solar", disponibilidade: "Ocupado", img: "Imagens/luana.png" },
        { id: 9, nome: "Lucas", localizacao: "Rio de Janeiro", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Disponível", img: "Imagens/lucas.png" },
        { id: 10, nome: "Julia", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/julia.png" },
    ];

    const searchExperts = (event) => {
        event.preventDefault();
        const results = professionals.filter(professional =>
            professional.localizacao.toLowerCase().includes(searchCriteria.localizacao.toLowerCase()) &&
            professional.areaEspecializacao.toLowerCase().includes(searchCriteria.areaEspecializacao.toLowerCase()) &&
            professional.disponibilidade.toLowerCase().includes(searchCriteria.disponibilidade.toLowerCase())
        );
        setSearchResults(results);
        setShowResults(true);  
    };

    const handleSelectExpert = (expert) => {
        navigate("/agendarconsulta", { state: { selectedExpert: expert } });
    };

    return (
        <>
            <Header />
            <StyledContainer>
                <ContentWrapper>
                    <h1>Encontre um Especialista em Sustentabilidade</h1>
                    <StyledSearchForm>
                        <input type="text" placeholder="Localização" onChange={(e) => setSearchCriteria({ ...searchCriteria, localizacao: e.target.value })} />
                        <input type="text" placeholder="Área de Especialização" onChange={(e) => setSearchCriteria({ ...searchCriteria, areaEspecializacao: e.target.value })} />
                        <input type="text" placeholder="Disponibilidade" onChange={(e) => setSearchCriteria({ ...searchCriteria, disponibilidade: e.target.value })} />
                        <StyledButton onClick={searchExperts}>Pesquisar</StyledButton>
                    </StyledSearchForm>
                    {showResults && (
                        <StyledResultsWrapper>
                            <StyledResultsContainer>
                                {searchResults.length > 0 ? (
                                    searchResults.map(professional => (
                                        <StyledResultItem key={professional.id}>
                                            <h2>{professional.nome}</h2>
                                            <p>Localização: {professional.localizacao}</p>
                                            <p>Área de Especialização: {professional.areaEspecializacao}</p>
                                            <p>Disponibilidade: {professional.disponibilidade}</p>
                                            <Link to={"/AgendarConsulta"} state={{ selectedExpert: professional }}>
                                                <StyledButton onClick={() => handleSelectExpert(professional)}>Agendar Consulta</StyledButton>
                                            </Link>
                                        </StyledResultItem>
                                    ))
                                ) : (
                                    <p>Nenhum especialista encontrado com os critérios de pesquisa.</p>
                                )}
                            </StyledResultsContainer>
                        </StyledResultsWrapper>
                    )}
                </ContentWrapper>
            </StyledContainer>
        </>
    );
};

export default Home;
