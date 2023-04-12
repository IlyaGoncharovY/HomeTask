import React, {FC, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Item} from "./ModalItem/Item";

interface ModalForExampleType {
    changeTexts: { variable: string; valueVariable: string; }[]
}

export const ModalForExample: FC<ModalForExampleType> = ({changeTexts}) => {

    const [show, setShow] = useState<boolean>(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Предварительный просмотр
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Предварительный просмотр</Modal.Title>
                </Modal.Header>
                <Modal.Body>{changeTexts.map((el, index) => <Item changeTexts={el} key={index}/>)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

