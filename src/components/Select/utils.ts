import { OptionType } from "./Select";

export const mapValueToLabelForOptions = (options: OptionType[]) => (value: OptionType["value"]) => {
  const opt = options.find((option) => option.value === value);

  if (opt) { return opt.label; }
  return "???";
};
