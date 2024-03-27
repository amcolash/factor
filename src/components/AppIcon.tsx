import * as icons from 'simple-icons';
import isDarkColor from 'is-dark-color';
import levenshtein from 'js-levenshtein';
import { FaLock } from 'react-icons/fa';

interface Icon {
  svg: string;
  hex: string;
  title: string;
}

function getIcon(name?: string): Icon | undefined {
  if (!name) return undefined;

  let icon = Object.entries(icons)
    .filter(
      (e) =>
        name.toLowerCase().includes(e[1].title.toLowerCase()) && levenshtein(name.toLowerCase(), e[1].title.toLowerCase()) < name.length / 2
    )
    .sort((a, b) => {
      return levenshtein(name.toLowerCase(), a[1].title.toLowerCase()) - levenshtein(name.toLowerCase(), b[1].title.toLowerCase());
    })[0];

  // handle one-off cases

  return icon ? icon[1] : undefined;
}

const darkColor = 'bg-slate-900';
const lightColor = 'bg-slate-800';
function getColors(icon?: Icon): { background: string; fill?: string } {
  if (!icon) return { background: darkColor, fill: lightColor };

  // const dark = icon ? isDarkColor('#' + icon.hex) : false;
  // let background = dark ? darkColor : lightColor;
  let background = darkColor;
  let fill = '#' + icon.hex;

  // handle one-off cases
  switch (icon.title) {
    case 'Amazon':
      background = darkColor;
      break;
  }

  return { background, fill };
}

export function AppIcon({ name }: { name: string }) {
  const icon = getIcon(name);
  const colors = getColors(icon);

  const imgClass = 'w-12 h-12 rounded-full border border-slate-400 ' + colors.background;

  return icon ? (
    <div
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      className={`${imgClass} p-3 flex justify-center items-center`}
      style={{ fill: colors.fill }}
    />
  ) : (
    <div className={imgClass + ' flex justify-center items-center'}>
      <FaLock />
    </div>
  );
}
