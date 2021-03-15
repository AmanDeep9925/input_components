import React from "react";
import styled from "styled-components";

const Inputscontainer = styled.div`
    grid-column: 2 / span 5;
    padding-left: 50px;
    font-family: "Noto Sans JP", sans-serif;
`;

const Maincontainer = styled.div`
    padding-left: 30px;
`;

const Heading = styled.h1`
    list-style: none;
    padding-left: 0px;
    font-size: 25px;
    margin-bottom: 40px;
`;

const Container = styled.div`
    padding: 10px;
    margin: 0px 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    p {
        font-family: Ubuntu Mono;
        font-style: italic;
    }

    label {
        display: block;
        font-size: 0.8rem;
    }

    .sub-text {
        padding: 0;
        margin: 0;
        color: #333333;
    }

    .error {
        color: #d32f2f;
    }
`;

const Input = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;
    border: 2px solid ${(props) => props.inputColor || "#828282"};

    &:focus {
        outline: none;
        border: 2px solid #2962ff;
    }
    &:hover {
        border: 2px solid #020202;
        outline: none;
    }
`;

const InputHovered = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;
    border: 2px solid #020202;
`;

const InputFullWidth = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;
    border: 2px solid #828282;
    width: 90%;
`;

const InputFocused = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;

    border: 2px solid #2962ff;
`;

const Inputerror = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;

    border: 2px solid #d32f2f;
`;

const InputerrorFocused = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;

    border: 2px solid #d32f2f;
`;

const InputMultiLine = styled.input`
    padding: 1.2em;
    margin: 0.5em 0;
    border: none;
    border-radius: 5px;

    height: 50%;

    border: 2px solid #828282;
`;

function InputContainer() {
    return (
        <Inputscontainer>
            <Heading>Inputs </Heading>
            <Maincontainer>
                <Container>
                    <div>
                        <p>
                            {" < "}Input{" /> "}
                        </p>
                        <label>Label</label>
                        <Input type="text" placeholder="Placeholder" />
                    </div>

                    <div>
                        <p>&:hover</p>
                        <label>Label</label>
                        <InputHovered type="text" placeholder="Placeholder" />
                    </div>

                    <div>
                        <p>&:focus</p>
                        <label>Label</label>
                        <InputFocused type="text" placeholder="Placeholder" />
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input{" /> "}
                        </p>
                        <label className="error">Label</label>
                        <Inputerror type="text" placeholder="Placeholder" />
                    </div>

                    <div>
                        <p>&:hover</p>
                        <label>Label</label>
                        <InputHovered type="text" placeholder="Placeholder" />
                    </div>

                    <div>
                        <p>&:focused</p>
                        <label className="error">Label</label>
                        <InputerrorFocused
                            type="text"
                            placeholder="Placeholder"
                        />
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input disabled{" /> "}
                        </p>
                        <label>Label</label>
                        <Input type="text" placeholder="Placeholder" disabled />
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input helperText=”Some interesting text”
                            {" /> "}
                        </p>
                        <label>Label</label>
                        <Input type="text" placeholder="Placeholder" />
                        <p className="sub-text">Some interesting text</p>
                    </div>
                    <div>
                        <p>
                            {" < "}Input helperText=”Some interesting text”
                            error{" /> "}
                        </p>
                        <label className="error">Label</label>
                        <Inputerror type="text" placeholder="Placeholder" />
                        <p className="sub-text error">Some interesting text</p>
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input value="Text" {" /> "}
                        </p>
                        <label>Label</label>
                        <Input type="text" placeholder="Text" />
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input fullWidth{" /> "}
                        </p>
                        <label>Label</label>
                        <InputFullWidth type="text" placeholder="Placeholder" />
                    </div>
                </Container>

                <Container>
                    <div>
                        <p>
                            {" < "}Input multiline row="4"{" /> "}
                        </p>
                        <label>Label</label>
                        <InputMultiLine type="text" placeholder="Placeholder" />
                    </div>
                </Container>
            </Maincontainer>
        </Inputscontainer>
    );
}

export default InputContainer;
