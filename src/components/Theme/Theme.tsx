import React, { ReactNode } from "react";
import * as C from "./styles";

type ThemeProps = {
  children: ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
  return (
    <C.Container>
      <C.Area>
        <C.Page>{children}</C.Page>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
