import classNames from "classnames";
import * as React from "react";

export interface ILinkDefault {
  title?: string;
  href?: string;
  target?: string;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  classSvgLeft?: string;
  classSvgRight?: string;
  attributes?: object;
  name?: string;
}

export function LinkDefault({
  title,
  className,
  classSvgLeft,
  classSvgRight,
  href,
  target,
  iconLeft,
  iconRight,

  attributes,
}: ILinkDefault) {
  return (
    <a
      href={href}
      title={title}
      className={classNames(`link ${className}`)}
      target={target}
      {...attributes}
    >
      {iconLeft ? (
        // <Icon
        //   id={iconLeft}
        //   className=`link__icon${classSvgLeft ? " " + classSvgLeft : ""}`)}
        // />
        <div>icon PH</div>
      ) : null}
      {iconRight ? <div>icon PH</div> : null}
    </a>
  );
}

export function Link({ ...rest }: ILinkDefault) {
  return <LinkDefault {...rest} />;
}

export default Link;
