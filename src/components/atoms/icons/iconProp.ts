export type IconProp = {
  className: string;
  fill: string;
};

export type ColoredIconProp = Omit<IconProp, 'fill'>;
