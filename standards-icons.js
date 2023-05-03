var icons = {
    "ISO_7010-W004": [
        "0 0 24.0 24.0",
        "m 12.000039,1.5236495 c -0.228095,0 -0.440199,0.1240516 -0.556247,0.3201332 L 0.08703609,21.515951 c -0.11604828,0.200084 -0.11604828,0.444185 0,0.640267 0.11604828,0.200083 0.32815213,0.320133 0.55624702,0.320133 H 23.356717 c 0.228094,0 0.440198,-0.124052 0.556247,-0.320133 0.116048,-0.200083 0.116048,-0.444185 0,-0.640267 L 12.556286,1.8437827 C 12.440238,1.6436994 12.228134,1.5236495 12.000039,1.5236495 Z m 0.004,2.0023174 10.244262,17.6668811 H 1.7597632 Z"
    ]
}
async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[1];
  return {
    path: primaryPath,
    viewBox: svgDef[0]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["stnd"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["stnd"] = { getIcon, getIconList };