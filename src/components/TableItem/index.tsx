import { Category, TableColumn, TableLine, Value } from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type TableItemProps = {
    item: Item,
}

export const TableItem = ({ item }: TableItemProps) => {



    return (
        <TableLine>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Value>
            </TableColumn>
        </TableLine>
    );
}