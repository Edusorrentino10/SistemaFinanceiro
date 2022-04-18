import { ButtonAdd, Container, Form, Input, InputLabel, InputSelect } from "./styles";
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { useState } from "react";
import { newDateFormat } from '../../helpers/dateFilter';

type InputAreaProps = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: InputAreaProps) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        let errors: string[] = [];

        if (isNaN(new Date(dateField).getTime())) {
            errors.push('Data inválida');
        }
        if (!categoryKeys.includes(categoryField)) {
            errors.push('Categoria inválida');
        }
        if (titleField === '') {
            errors.push('Título vazio');
        }
        if (valueField <= 0) {
            errors.push('Valor inválido');
        }

        if (errors.length > 0) {
            alert(errors.join(', \n'));
        } else {
            let newItem: Item = {
                date: newDateFormat(dateField),
                category: categoryField,
                title: titleField,
                value: valueField,
            };
            onAdd(newItem);
            
        }
        clearFields();
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <Container>
            <Form>
                <InputLabel>Data
                    <Input value={dateField} type="date" onChange={e => setDateField(e.target.value)} />
                </InputLabel>
                <InputLabel>Categoria
                    <InputSelect value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                        <option hidden></option>
                        {categoryKeys.map((value, index) => (

                            <option key={index} value={value}>{categories[value].title}</option>
                        ))}
                    </InputSelect>
                </InputLabel>
                <InputLabel>Título
                    <Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
                </InputLabel>
                <InputLabel>Valor
                    <Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
                </InputLabel>
                <ButtonAdd onClick={e => handleAddEvent(e)}>Adicionar</ButtonAdd>
            </Form>
        </Container>
    );
}