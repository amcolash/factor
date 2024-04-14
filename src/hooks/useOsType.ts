export enum OS {
  Linux = 'Linux',
  Mac = 'Mac',
  Windows = 'Windows',
  iOS = 'iOS',
  Android = 'Android',
  Other = 'Other',
}

export function useOsType(): OS {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
    return OS.iOS;
  } else if (userAgent.includes('Android')) {
    return OS.Android;
  } else if (userAgent.includes('Mac')) {
    return OS.Mac;
  } else if (userAgent.includes('Win')) {
    return OS.Windows;
  } else if (userAgent.includes('Linux')) {
    return OS.Linux;
  }

  return OS.Other;
}
