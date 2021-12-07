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
            placeholder="Type to search...."
            onChange={(event) => {
              return props.setSearchValue(event.target.value);
            }}
          />
        </C.SearchForm>
      </C.Container>
    </Theme>
  );
};

export default SearchBox;
