import { Category, RemoveItem, TableColumn, TableLine, Value } from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { GoTrashcan } from 'react-icons/go';

type TableItemProps = {
    item: Item,
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>,
}

export const TableItem = ({ item, list, setList }: TableItemProps) => {

    const handleRemove = () => {
        let newList = [...list];
        newList.splice(newList.indexOf(item), 1);
        setList(newList);
        localStorage.setItem('items', JSON.stringify(newList));
    }

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
            <TableColumn>
                <RemoveItem>
                    <GoTrashcan onClick={handleRemove} />
                </RemoveItem>
            </TableColumn>
        </TableLine>
    );
}