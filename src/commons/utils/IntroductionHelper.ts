import { Links } from './Constants';

const CHAP = '\xa7';

const MAIN_INTRODUCTION = `
Welcome to the SICPy Academy playground!

The language [_SICPy_](${Links.sourceDocs}) is the unofficial language of the textbook [_Structure and
Interpretation of Computer Programs, JavaScript Adaptation_](${Links.textbook}). `;

const HOTKEYS_INTRODUCTION = `

In the editor on the left, you can use the [_Ace keyboard shortcuts_](${Links.aceHotkeys}) 
and also the [_SICPy Academy keyboard shortcuts_](${Links.sourceHotkeys}).

`;

const generateSourceDocsLink = (sourceType: string) => {
  switch (sourceType) {
    // case 'calc':
    //   return `You have chosen the sublanguage [_Source ${CHAP}0_] Calculator mode.`;
    case '0':
      return `You have chosen the sublanguage [_SICPy ${CHAP}0_].`;
    case '1':
      return `You have chosen the sublanguage [_SICPy ${CHAP}1_].`;
    case '2':
      return `You have chosen the sublanguage [_SICPy ${CHAP}2_].`;
    case '3':
      return `You have chosen the sublanguage [_SICPy ${CHAP}3_].`;
    case '4':
      return `You have chosen the sublanguage [_SICPy ${CHAP}4_].`;
    default:
      return 'You have chosen an invalid sublanguage. Please pick a sublanguage from the dropdown instead.';
  }
};

const generateIntroductionText = (sourceType: string) => {
  return MAIN_INTRODUCTION + generateSourceDocsLink(sourceType) + HOTKEYS_INTRODUCTION;
};

export const generateSourceIntroduction = (sourceVariant: string) => {
  return generateIntroductionText(`${sourceVariant}`);
};
