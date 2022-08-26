import ColorScheme from "color-scheme";

const scheme = new ColorScheme();
scheme.from_hue(21).scheme("mono").variation("pastel");

export default scheme.colors();
