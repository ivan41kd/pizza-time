import Container from '@/components/Container/Container';
import { usePizzaContext } from '@/providers/PizzaProvider';
import PizzaItems from '@/widgets/ui/PizzaItems';
import { Input, Empty } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const { data } = usePizzaContext();
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  const searchPizza = (event) => {
    const result = data.filter(
      (pizza) =>
        event.target.value !== '' &&
        pizza.title
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
    );
    setValue(event.target.value);
    setResults(result);
  };

  return (
    <section className="search">
      <Container>
        <div className="flex flex-col gap-8 items-center justify-center">
          <Input
            placeholder="Search pizza..."
            value={value}
            onChange={searchPizza}
            size="large"
            className="w-5xl!"
            prefix={<SearchOutlined />}
          />
          {value !== '' && results.length < 1 ? (
            <Empty
              description={'Pizza not found'}
              className="dark:text-white"
            />
          ) : (
            ''
          )}
          {results.length >= 1 && <PizzaItems data={results} />}
        </div>
      </Container>
    </section>
  );
};

export default Search;
