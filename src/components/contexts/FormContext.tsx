import React, { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const defaultProps = {
  currentStep: 0,
  name: "",
  level: 0,
};

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
}

const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, defaultProps);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
