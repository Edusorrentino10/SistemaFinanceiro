import { ResponsiveTable, Table, TableHeadColumn } from "./styles"
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';


type TableAreaProps = {
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>,
    filteredList: Item[],
}

export const TableArea = ({ filteredList, list, setList }: TableAreaProps) => {

    return (
        <ResponsiveTable>
            <Table>
                <thead>
                    <tr>
                        <TableHeadColumn width={130}>Data</TableHeadColumn>
                        <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                        <TableHeadColumn>Título</TableHeadColumn>
                        <TableHeadColumn width={130}>Valor</TableHeadColumn>

                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((item, index) => (
                        <TableItem list={list} setList={setList} key={index} item={item} />
                    ))}
                </tbody>
            </Table>
        </ResponsiveTable>
    )
}