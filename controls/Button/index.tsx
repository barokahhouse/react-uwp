import * as React from "react";

import ElementState from "../../components/ElementState"

import { ThemeType } from "react-uwp/style/ThemeType";
import addArrayEvent from "../../common/addArrayEvent";
import setStyleToElement from "../../common/setStyleToElement";

let theme: ThemeType;

import * as styles from "./index.scss";
const defaultProps: ButtonProps = __DEV__ ? require("./devDefaultProps").default : {};

interface EventHanlder {
	(e?: React.SyntheticEvent<HTMLButtonElement>): void;
}
interface DataProps {
	borderSize?: string;
}
interface ButtonProps extends DataProps, React.HTMLAttributes<HTMLButtonElement> {}
interface ButtonState {}
export default class Button extends React.Component<ButtonProps, ButtonState> {
	static defaultProps: ButtonProps = {
		...defaultProps,
		className: "",
		borderSize: "2px"
	};
	state: ButtonState = {};
	static contextTypes = { theme: React.PropTypes.object };
	refs: { container: HTMLButtonElement };

	render() {
		const {
			borderSize, className,  children,
			...attributes
		} = this.props;
		theme = this.context.theme;

		return (
			<ElementState
				style={{
					background: theme.baseLow,
					color: theme.baseMediumHigh,
					padding: "5px 20px",
					...attributes.style,
					border: `${borderSize} solid transparent`
				}}
				hoverStyle={{
					border: `${this.props.borderSize} solid ${theme.baseMediumLow}`
				}}
				className={`${styles.c} ${className}`}
				{...attributes}
			>
				<button>
					{children}
				</button>
			</ElementState>
		);
	}
}
