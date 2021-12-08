import * as React from "react";
import Theme from "../Theme";
import * as C from "./styles";

const SearchBox = (props: { setSearchValue: any }) => {
  return (
    <Theme>
      <C.Container>
        <C.SearchForm>
          <input
            type="text"
            name="searchBox"
            placeholder="Digite um nome a ser pesquisado...."
            onChange={(event) => {
              return props.setSearchValue(event.target.value);
            }}
          />
          **Consulta limitada a 10 títulos por vez.
        </C.SearchForm>
      </C.Container>
    </Theme>
  );
};

export default SearchBox;
