import { Form, Row, Col, Button } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import '../estilos/paginaCadastro.css';

function Cadastro() {
    return (
        <>
            <form className="form-cadastro" method="post" action="https://airbnb-clone-desafio.herokuapp.com/api/locacao/criarlocacao" style={{ display: 'block', margin: '5rem 10rem' }}
            onSubmit={() => {
                alert('Cadastro enviado com sucesso!')
            }}>
                <fieldset>
                    <legend>Cadastre seu imóvel</legend>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Título do anúncio" name="locacao_nome" minLength={5} maxLength={50} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descrição longa</Form.Label>
                        <Form.Control type="text" placeholder="Descrição longa do anúncio" name="descricao_longa" minLength={5} maxLength={250} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descrição curta</Form.Label>
                        <Form.Control type="text" placeholder="Descrição curta do anúncio" name="descricao_curta" minLength={5} maxLength={50} required/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Digite a cidade" name="localidade" minLength={5} maxLength={25} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>UF</Form.Label>
                            <Form.Control type="text" placeholder="Digite a UF (unidade federativa)" name="uf" minLength={2} maxLength={2} required/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Digite o logradouro" name="logradouro" minLength={5} maxLength={50} required/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Digite o bairro" name="bairro" minLength={5} maxLength={50} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" placeholder="Digite o complemento" name="complemento" minLength={5} maxLength={100} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="string" placeholder="EX.: 00000-000" name="cep" minLength={8} maxLength={8} inputMode="numeric" required/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Valor da diária</Form.Label>
                            <Form.Control type="string" placeholder="Digite o preço" name="preco" min={0} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Capacidade</Form.Label>
                            <Form.Control type="number" placeholder="Digite a capacidade de pessoas" name="capacidade" min={1} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control type="string" id="urlImage" name="urlImage" min={1} required/>
                        </Form.Group>
                    </Row>

                </fieldset>
                <fieldset style={{margin: '2rem 0'}}>
                   <legend>Dados do proprietário:</legend>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do proprietário" name="proprietario.nome" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="EX.: (00) 0000-0000" name="proprietario.phone" required/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail do proprietário" name="proprietario.email" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="string" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="EX.: 000.000.000-00" name="proprietario.cpf" inputMode="numeric" required/>
                        </Form.Group>
                    </Row>
                </fieldset>
                <Button style={{backgroundColor: "#ff385c", borderColor: "#ff385c"}} className="botao-cadastro" variant="primary" type="submit">Enviar cadastro</Button>
            </form>
        </>
    )
}

export default Cadastro;

