
import { Input } from 'antd';
const { Search } = Input;

const SearchInput = () => {
    return (
        <div>

            <Search placeholder="input search text" enterButton="Search" size="large" loading />
        </div>
    );
};

export default SearchInput;


