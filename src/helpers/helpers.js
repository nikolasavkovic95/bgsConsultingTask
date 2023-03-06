export const formKeys = {
  card: ['cardNumber', 'cardName', 'expiryDate', 'cvv'],
  user: ['username', 'firstName', 'lastName', 'email', 'password', 'repeatPassword'],
};

//credit card format

export const ccFormat = (value) => {
  const v = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(' • ') : value;
};

//card type

export const cardType = (card) => {
  if (card === undefined) {
    return null;
  } else {
    const cardNumber = card.startsWith(5) || card.startsWith(2);

    return cardNumber;
  }
};

export const visaCard = (card) => {
  if (card === undefined) {
    return null;
  } else {
    const cardNumber = card.startsWith(4);

    return cardNumber;
  }
};

export const amexCard = (card) => {
  if (card === undefined) {
    return null;
  } else {
    const cardNumber = card.startsWith(3) && (card.charAt(1).startsWith(7) || card.charAt(1).startsWith(4));

    return cardNumber;
  }
};

export const discoverCard = (card) => {
  if (card === undefined) {
    return null;
  } else {
    const cardNumber = card.startsWith(6);

    return cardNumber;
  }
};

//credit card expiry date

export const edFormat = (value) => {
  if (value.length === 2) value = value + '/';
  else if (value.length === 3 && value.charAt(2) === '/') value = value.replace('/', '');

  return value;
};

//trim description

export const description = (value) => {
  if (!value) {
    return null;
  } else {
    if (value.startsWith('{')) {
      const descTrim = value.replaceAll('{"text_en":"', '');
      const descFinal = descTrim.replaceAll('"}', '');
      return descFinal;
    }
  }
};
