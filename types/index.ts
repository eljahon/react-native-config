export const type ITBICON =  {
    color: any,
    name: any,
    focused: any,
    icon: any
} 

export interface IButton {
    title: string,
    handlePross?: () => void,
    textStyle?: string,
    titleStyle?: string,
    isLoading?: boolean
}

export interface ITextInput {
    textInputStyle?: string,
    textLabelStyle?: string,
    textLabel?: string,
    inputError?: boolean,
    secureTextEntry?: boolean,
    inputValue?: string,
    isPassword?: boolean,
    iconName?:string,
    outStyle?: string,
    placeholderText?: string,
    onFocus?: () => void,
    onChangeText?: () => void,
    onBlur?: () => void
}

export interface IFileUpload {
    textLabel?: string,
    isdashed?: boolean
}
export interface AuthProps {
	authState: { authenticated: boolean | null; username: string | null; role: Role | null };
	onLogin: (username: string, password: string) => void;
	onLogout: () => void;
}

export interface ILogin {
    username: string,
    password: string
  }
  
export  interface IValidation {
    username: boolean,
    password: boolean
  }

  export interface ISIGNUP {
    name: string, 
    username: string, 
    password: string,
    rePassword: string
  }
  
  type IOnLogin ={
    username: string,
    password: string

  }
  export interface AuthProps {
    authState: { authenticated: boolean | false; username: string | null; role: Role | null };
    onLogin: <>(data:IOnLogin) => Promise<void>;
    onLogout: () => Promise<void>;
  }
  export interface IValidationRegistor {
    name: boolean, 
    username: boolean, 
    password: boolean,
    rePassword: boolean
  }