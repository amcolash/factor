export enum OS {
  Linux,
  Mac,
  Windows,
  iOS,
  Android,
  Other,
}

export function useOsType(): OS {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Mac')) {
    return OS.Mac;
  } else if (userAgent.includes('Win')) {
    return OS.Windows;
  } else if (userAgent.includes('Linux')) {
    return OS.Linux;
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
    return OS.iOS;
  } else if (userAgent.includes('Android')) {
    return OS.Android;
  }

  return OS.Other;
}
